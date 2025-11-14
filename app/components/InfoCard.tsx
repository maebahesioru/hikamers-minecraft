'use client';

import { Copy } from 'lucide-react';

export function InfoCard({ title, value, subtitle, copyable }: { 
  title: string; 
  value: string; 
  subtitle?: string;
  copyable?: boolean;
}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="bg-green-900/30 rounded-lg p-4">
      <h3 className="text-green-300 font-semibold mb-2">{title}</h3>
      <div className="flex items-center gap-2">
        <p className="text-white text-lg font-mono">{value}</p>
        {copyable && (
          <button
            onClick={handleCopy}
            className="text-green-400 hover:text-green-300 transition-colors"
            title="コピー"
          >
            <Copy size={18} />
          </button>
        )}
      </div>
      {subtitle && <p className="text-green-200 text-sm mt-1">{subtitle}</p>}
    </div>
  );
}
