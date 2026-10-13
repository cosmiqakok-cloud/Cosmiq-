import React, { useState } from 'react';
import { BookOpen, Search, Shield, Layers, Lock, Terminal, CheckCircle2 } from 'lucide-react';

interface NoteModule {
  id: string;
  category: string;
  title: string;
  summary: string;
  points: string[];
  securityTakeaway: string;
}

const STUDY_NOTES: NoteModule[] = [
  {
    id: 'cia-triad',
    category: 'Core Concepts',
    title: 'The CIA Triad (Foundations of Information Assurance)',
    summary: 'The foundational security model guiding policies and controls across all systems.',
    points: [
      'Confidentiality: Ensuring sensitive data is only accessible to authorized entities (enforced via encryption, access controls, least privilege).',
      'Integrity: Guarding data against unauthorized tampering or modification (enforced via cryptographic hashes like SHA-256, digital signatures, parity checks).',
      'Availability: Guaranteeing services and information are reachable when needed by authorized users (enforced via redundant hardware, DDoS mitigation, regular backups).'
    ],
    securityTakeaway: 'Every security incident involves the compromise of at least one pillar in the CIA Triad.'
  },
  {
    id: 'osi-layers',
    category: 'Networking',
    title: 'OSI 7-Layer Model: Security Controls Breakdown',
    summary: 'Mapping defensive mechanisms to each layer of the Open Systems Interconnection model.',
    points: [
      'Layer 7 (Application): WAF (Web Application Firewalls), HTTPS, authentication tokens, API gateways.',
      'Layer 4 (Transport): TLS/SSL handshakes, TCP SYN flood protection, stateful port filtering.',
      'Layer 3 (Network): IP filtering, IPsec VPN tunneling, routing table security, subnet segmentation.',
      'Layer 2 (Data Link): VLAN segmentation, ARP spoofing defenses (Dynamic ARP Inspection), MAC filtering.',
      'Layer 1 (Physical): Physical access badges, locking server racks, port locks, surveillance.'
    ],
    securityTakeaway: 'True Defense in Depth requires overlapping security controls at multiple OSI layers rather than relying on a single perimeter wall.'
  },
  {
    id: 'attack-vectors',
    category: 'Threat Analysis',
    title: 'Common Attack Vectors and Countermeasures',
    summary: 'Understanding the mechanics of frequent threats encountered by organizations.',
    points: [
      'Phishing & Social Engineering: Exploiting human trust to harvest credentials. Defense: MFA, domain verification (SPF/DKIM), continuous security awareness training.',
      'Man-in-the-Middle (MITM): Intercepting communications on unencrypted or untrusted Wi-Fi. Defense: Strict HTTPS, HSTS headers, encrypted VPNs.',
      'SQL Injection (SQLi): Injecting malicious database payloads through unvalidated form inputs. Defense: Prepared statements (parameterized queries) and input sanitation.',
      'Brute Force & Credential Stuffing: Automated guessing of user passwords. Defense: Rate limiting, account lockout thresholds, high-entropy passphrases, MFA.'
    ],
    securityTakeaway: 'Attackers typically take the path of least resistance — often targeting human error or unpatched default settings.'
  },
  {
    id: 'crypto-basics',
    category: 'Cryptography',
    title: 'Fundamental Differences: Hashing vs Encryption vs Encoding',
    summary: 'Clarifying the most commonly confused cryptographic transformations in security.',
    points: [
      'Hashing (One-way): Converts arbitrary data into a fixed-length string (e.g., SHA-256). Irreversible by design. Used for password verification and file integrity checks.',
      'Encryption (Two-way reversible with key): Obfuscates plaintext into ciphertext using a secret key (AES-256, RSA). Can be decrypted only with the correct key.',
      'Encoding (Format transformation): Converts data into standard representations (e.g., Base64, ASCII, URL encoding). NOT a security measure; easily decoded by anyone without a key.'
    ],
    securityTakeaway: 'Never store passwords in plain text or with reversible encoding (like Base64). Passwords must be hashed using salted, adaptive functions.'
  },
  {
    id: 'linux-cli',
    category: 'Systems & CLI',
    title: 'Essential Linux CLI for Security & Permissions',
    summary: 'Fundamental commands for inspecting system state and configuring file access control.',
    points: [
      'ls -la: Displays detailed file permissions (Read/Write/Execute for User, Group, Others).',
      'chmod 600 secret.txt: Restricts file access strictly to owner read/write only.',
      'ss -tulpn / netstat: Inspects all active listening network sockets, ports, and associated process IDs.',
      'sudo ufw status: Checks the Uncomplicated Firewall rules configured on a Linux host.'
    ],
    securityTakeaway: 'The principle of least privilege starts at the local file system: never leave sensitive files with world-readable (777) permissions.'
  }
];

export const NotesViewerDemo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core Concepts', 'Networking', 'Threat Analysis', 'Cryptography', 'Systems & CLI'];

  const filteredNotes = STUDY_NOTES.filter((note) => {
    const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory;
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.points.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600 dark:text-sky-400" />
          <h4 className="text-base font-semibold text-slate-900 dark:text-white">
            Cybersecurity Knowledge & Study Notes Viewer
          </h4>
        </div>
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search notes (e.g. CIA, OSI, hash)..."
            className="w-full sm:w-56 pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Category selector tabs */}
      <div className="flex flex-wrap gap-1.5 mb-4 p-1 bg-slate-200/60 dark:bg-slate-950/60 rounded-lg">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === cat
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notes cards list */}
      <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
        {filteredNotes.length === 0 ? (
          <div className="text-center py-8 text-slate-500 text-xs">
            No study notes found matching "{searchTerm}". Try another keyword.
          </div>
        ) : (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-xs space-y-2.5 shadow-2xs"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium text-blue-600 dark:text-sky-400 uppercase tracking-wide">
                  {note.category}
                </span>
                <span className="text-[11px] text-slate-400">Study Reference</span>
              </div>
              <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                {note.title}
              </h5>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                {note.summary}
              </p>
              <ul className="space-y-1.5 pt-1 text-slate-600 dark:text-slate-300">
                {note.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-sky-400 font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-start gap-2 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/40 p-2.5 rounded">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-[11px] font-medium">
                  <strong>Key Takeaway:</strong> {note.securityTakeaway}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
