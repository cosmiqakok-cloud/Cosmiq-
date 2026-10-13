import React, { useState } from 'react';
import { Terminal, RotateCcw, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const PythonCalculatorDemo: React.FC = () => {
  const [num1, setNum1] = useState('12');
  const [num2, setNum2] = useState('4');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState<string | null>('16');
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<Array<{ expr: string; res: string; timestamp: string }>>([
    { expr: '12 + 4', res: '16', timestamp: 'Initial state' },
    { expr: '100 / 5', res: '20.0', timestamp: 'Demonstration' },
  ]);

  const calculate = () => {
    setError(null);
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setError('ValueError: could not convert string to float: non-numeric input');
      setResult(null);
      return;
    }

    let calculated: number;
    switch (operator) {
      case '+':
        calculated = n1 + n2;
        break;
      case '-':
        calculated = n1 - n2;
        break;
      case '*':
        calculated = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setError('ZeroDivisionError: division by zero — defensive validation caught this safely');
          setResult(null);
          return;
        }
        calculated = n1 / n2;
        break;
      case '%':
        if (n2 === 0) {
          setError('ZeroDivisionError: integer modulo by zero');
          setResult(null);
          return;
        }
        calculated = n1 % n2;
        break;
      case '**':
        if (n1 === 0 && n2 < 0) {
          setError('ZeroDivisionError: 0.0 cannot be raised to a negative power');
          setResult(null);
          return;
        }
        calculated = Math.pow(n1, n2);
        break;
      default:
        setError('Unsupported operator');
        return;
    }

    const formattedResult = Number.isInteger(calculated) ? calculated.toString() : calculated.toFixed(4).replace(/\.?0+$/, '');
    setResult(formattedResult);

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setHistory((prev) => [
      { expr: `${num1} ${operator} ${num2}`, res: formattedResult, timestamp: now },
      ...prev.slice(0, 4),
    ]);
  };

  const handleTestZeroDivision = () => {
    setNum1('42');
    setNum2('0');
    setOperator('/');
  };

  const handleReset = () => {
    setNum1('10');
    setNum2('2');
    setOperator('+');
    setError(null);
    setResult('12');
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800 font-mono text-xs shadow-inner">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-sky-400" />
          <span className="text-slate-200 font-semibold">python_calculator.py (Interactive Simulator)</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="p-1 hover:text-white transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Input controls */}
      <div className="space-y-3 font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] text-slate-400 mb-1">Operand 1 (Number)</label>
            <input
              type="text"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="w-full px-3 py-2 text-sm font-mono bg-slate-950 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
            />
          </div>

          <div>
            <label className="block text-[11px] text-slate-400 mb-1">Operation</label>
            <div className="grid grid-cols-6 gap-1">
              {['+', '-', '*', '/', '%', '**'].map((op) => (
                <button
                  key={op}
                  type="button"
                  onClick={() => setOperator(op)}
                  className={`py-2 text-xs font-mono font-medium rounded transition-colors ${
                    operator === op
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {op}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-slate-400 mb-1">Operand 2 (Number)</label>
            <input
              type="text"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="w-full px-3 py-2 text-sm font-mono bg-slate-950 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
            />
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <button
            type="button"
            onClick={calculate}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md text-xs transition-colors"
          >
            Run calculate(num1, op, num2)
          </button>

          <button
            type="button"
            onClick={handleTestZeroDivision}
            className="text-xs text-sky-400 hover:text-sky-300 underline font-mono"
          >
            Test ZeroDivisionError validation (42 / 0)
          </button>
        </div>

        {/* Output area */}
        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs">
          <div className="text-slate-500 mb-1">$ python app.py --interactive</div>
          {error ? (
            <div className="flex items-start gap-2 text-red-400 mt-2">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{error}</p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Defensive programming safeguard: In Python, a try/except block catches the exception rather than crashing the program.
                </p>
              </div>
            </div>
          ) : result !== null ? (
            <div className="flex items-center gap-2 text-emerald-400 mt-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Result: {num1} {operator} {num2} = <strong className="text-white text-sm">{result}</strong></span>
            </div>
          ) : null}
        </div>

        {/* History log */}
        {history.length > 0 && (
          <div className="pt-2">
            <span className="text-[11px] text-slate-400">Execution History:</span>
            <div className="mt-1 space-y-1">
              {history.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-950/60 px-2.5 py-1 rounded">
                  <span>&gt;&gt;&gt; {item.expr} = {item.res}</span>
                  <span className="text-slate-600">{item.timestamp}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
