'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function InfoCard({ title, value, subtitle, copyable }: { 
  title: string; 
  value: string; 
  subtitle?: string;
  copyable?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-green-900/30 rounded-lg p-4 relative">
      <h3 className="text-green-300 font-semibold mb-2">{title}</h3>
      <div className="flex items-center gap-2">
        <p className="text-white text-lg font-mono">{value}</p>
        {copyable && (
          <div className="relative">
            <button
              onClick={handleCopy}
              className={`text-green-400 hover:text-green-300 transition-all duration-300 ${
                copied ? 'scale-110' : 'scale-100'
              }`}
              title={copied ? 'コピーしました！' : 'コピー'}
            >
              {copied ? (
                <Check size={18} className="animate-bounce" />
              ) : (
                <Copy size={18} />
              )}
            </button>
            {copied && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap animate-fade-in-up">
                コピーしました！
              </div>
            )}
          </div>
        )}
      </div>
      {subtitle && <p className="text-green-200 text-sm mt-1">{subtitle}</p>}
    </div>
  );
}
