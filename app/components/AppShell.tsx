'use client';

import { ReactNode } from 'react';
import { useTheme } from './ThemeProvider';
import { Settings2 } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="glass-card border-b border-accent border-opacity-20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-bg font-bold text-lg">🎰</span>
            </div>
            <h1 className="text-2xl font-bold text-accent animate-glow">
              JackpotJester
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
              className="bg-surface border border-accent border-opacity-50 rounded px-3 py-1 text-sm text-fg"
            >
              <option value="default">Gaming</option>
              <option value="celo">Celo</option>
              <option value="solana">Solana</option>
              <option value="base">Base</option>
              <option value="coinbase">Coinbase</option>
            </select>
            <Settings2 className="w-5 h-5 text-accent" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass-card border-t border-accent border-opacity-20 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <p className="text-text-secondary text-sm">
            Powered by Base • 1% commission • Provably fair draws
          </p>
        </div>
      </footer>
    </div>
  );
}
