import React, { useState, useMemo } from 'react';
import { ShieldCheck, ShieldAlert, KeyRound, Eye, EyeOff, RefreshCw, Check, X, Info } from 'lucide-react';

export const PasswordCheckerDemo: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  // Analysis calculation
  const analysis = useMemo(() => {
    const len = password.length;
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    // Calculate pool size
    let poolSize = 0;
    if (hasLower) poolSize += 26;
    if (hasUpper) poolSize += 26;
    if (hasNumber) poolSize += 10;
    if (hasSpecial) poolSize += 33;

    // Shannon Entropy estimation
    const entropy = len > 0 && poolSize > 0 ? Math.round(len * Math.log2(poolSize)) : 0;

    // Score from 0 to 4
    let score = 0;
    if (len >= 8) score++;
    if (len >= 12 && (hasLower || hasUpper) && hasNumber) score++;
    if (len >= 14 && hasLower && hasUpper && hasNumber) score++;
    if (len >= 16 && hasSpecial) score++;

    // Realistic offline brute force estimate (10 billion guesses/sec hashcat rate)
    let crackTime = 'Instant';
    if (len === 0) {
      crackTime = 'Enter a password to evaluate';
    } else if (entropy < 28) {
      crackTime = 'Under 1 second (trivial)';
    } else if (entropy < 40) {
      crackTime = 'A few seconds to minutes';
    } else if (entropy < 55) {
      crackTime = 'Several days to months';
    } else if (entropy < 70) {
      crackTime = 'Decades to centuries';
    } else {
      crackTime = 'Millions of years (resilient)';
    }

    const suggestions: string[] = [];
    if (len < 12) suggestions.push('Aim for at least 12–16 characters. Length is the single strongest defense.');
    if (!hasUpper) suggestions.push('Add uppercase characters to expand the search space.');
    if (!hasNumber) suggestions.push('Include numbers (0–9) to resist single-dictionary attacks.');
    if (!hasSpecial) suggestions.push('Incorporate symbols or spaces (!, @, #, $, -, _)');
    if (/(.)\1{2,}/.test(password)) suggestions.push('Avoid repetitive patterns (e.g. "aaa", "111").');
    if (/^(password|admin|123456|qwerty)/i.test(password)) suggestions.push('Avoid ubiquitous credential defaults.');

    let rating = 'Very Weak';
    let ratingColor = 'text-red-500';
    let progressBg = 'bg-red-500';

    if (entropy >= 75 || score === 4) {
      rating = 'Very Strong';
      ratingColor = 'text-emerald-500';
      progressBg = 'bg-emerald-500';
    } else if (entropy >= 55 || score === 3) {
      rating = 'Strong';
      ratingColor = 'text-blue-500';
      progressBg = 'bg-blue-500';
    } else if (entropy >= 38 || score === 2) {
      rating = 'Moderate';
      ratingColor = 'text-amber-500';
      progressBg = 'bg-amber-500';
    } else if (password.length > 0) {
      rating = 'Weak';
      ratingColor = 'text-orange-500';
      progressBg = 'bg-orange-500';
    }

    return {
      len,
      hasLower,
      hasUpper,
      hasNumber,
      hasSpecial,
      entropy,
      score,
      crackTime,
      suggestions,
      rating,
      ratingColor,
      progressBg,
    };
  }, [password]);

  // Generate NIST-friendly multi-word passphrase
  const generatePassphrase = () => {
    const wordList = [
      'solar', 'shield', 'packet', 'router', 'matrix', 'cipher', 'subnet', 'beacon',
      'vector', 'anchor', 'harbor', 'shadow', 'orbit', 'cobalt', 'alpine', 'falcon',
      'quarry', 'timber', 'granite', 'zenith', 'canyon', 'arctic', 'silver', 'breeze'
    ];
    const picked: string[] = [];
    for (let i = 0; i < 4; i++) {
      const idx = Math.floor(Math.random() * wordList.length);
      picked.push(wordList[idx]);
    }
    const num = Math.floor(Math.random() * 90 + 10);
    const pass = `${picked.join('-')}-${num}`;
    setPassword(pass);
  };

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <KeyRound className="w-5 h-5 text-blue-600 dark:text-sky-400" />
          <h4 className="text-base font-semibold text-slate-900 dark:text-white">
            Interactive Password Strength Inspector
          </h4>
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Client-side evaluation only
        </span>
      </div>

      {/* Input row */}
      <div className="space-y-3">
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type or test a sample password..."
            className="w-full px-4 py-2.5 pr-24 text-sm font-mono bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded transition-colors"
              title={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
            {password && (
              <button
                type="button"
                onClick={handleCopy}
                className="px-2 py-1 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : 'Copy'}
              </button>
            )}
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={generatePassphrase}
            className="inline-flex items-center gap-1.5 text-blue-600 dark:text-sky-400 hover:underline font-medium"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Generate Strong NIST Passphrase
          </button>
          <span className="text-slate-400 font-mono">
            {password.length} characters
          </span>
        </div>

        {/* Strength meter bar */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-500 dark:text-slate-400">Strength Rating:</span>
            <span className={`font-semibold ${analysis.ratingColor}`}>
              {analysis.rating} {analysis.len > 0 && `(${analysis.entropy} bits entropy)`}
            </span>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${analysis.progressBg}`}
              style={{ width: `${Math.min(100, Math.max(5, (analysis.entropy / 80) * 100))}%` }}
            />
          </div>
        </div>

        {/* Characteristic checklist */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
          <div className={`flex items-center gap-1.5 ${analysis.len >= 12 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
            {analysis.len >= 12 ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            <span>12+ Length ({analysis.len})</span>
          </div>
          <div className={`flex items-center gap-1.5 ${analysis.hasUpper && analysis.hasLower ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
            {analysis.hasUpper && analysis.hasLower ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            <span>Mixed Case (aA)</span>
          </div>
          <div className={`flex items-center gap-1.5 ${analysis.hasNumber ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
            {analysis.hasNumber ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            <span>Numbers (0-9)</span>
          </div>
          <div className={`flex items-center gap-1.5 ${analysis.hasSpecial ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
            {analysis.hasSpecial ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            <span>Symbols (!@#)</span>
          </div>
        </div>

        {/* Analysis breakdown */}
        <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
            <span className="text-slate-500">Estimated Brute-Force Resistance:</span>
            <span className="font-mono font-medium text-slate-900 dark:text-slate-100">{analysis.crackTime}</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
            <span className="text-slate-500">Theoretical Entropy:</span>
            <span className="font-mono text-slate-900 dark:text-slate-100">{analysis.entropy} bits</span>
          </div>
        </div>

        {/* Suggestions */}
        {analysis.suggestions.length > 0 && password.length > 0 && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-lg text-xs text-amber-800 dark:text-amber-300 space-y-1">
            <div className="flex items-center gap-1.5 font-medium">
              <Info className="w-3.5 h-3.5" />
              <span>Cybersecurity Advice (NIST SP 800-63B):</span>
            </div>
            <ul className="list-disc list-inside space-y-0.5 pl-1 text-[11px] opacity-90">
              {analysis.suggestions.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
