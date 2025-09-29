'use client';

import { AppShell } from '../components/AppShell';
import { useTheme } from '../components/ThemeProvider';

export default function ThemePreviewPage() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'default', name: 'Gaming (Default)', description: 'Cyberpunk gaming aesthetic' },
    { id: 'celo', name: 'Celo', description: 'Black background, yellow accents' },
    { id: 'solana', name: 'Solana', description: 'Purple background, magenta accents' },
    { id: 'base', name: 'Base', description: 'Dark blue background, Base blue accents' },
    { id: 'coinbase', name: 'Coinbase', description: 'Navy background, Coinbase blue accents' },
  ];

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-accent mb-4">Theme Preview</h1>
          <p className="text-text-secondary">
            Preview different themes for JackpotJester
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((themeOption) => (
            <div
              key={themeOption.id}
              className={`odds-card cursor-pointer transition-all duration-200 ${
                theme === themeOption.id ? 'ring-2 ring-accent' : ''
              }`}
              onClick={() => setTheme(themeOption.id as any)}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {themeOption.name}
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                {themeOption.description}
              </p>
              
              {/* Theme Preview */}
              <div className="space-y-2">
                <div className="h-8 bg-bg rounded border border-accent border-opacity-20"></div>
                <div className="h-4 bg-surface rounded"></div>
                <div className="h-4 bg-accent bg-opacity-20 rounded w-3/4"></div>
              </div>
              
              {theme === themeOption.id && (
                <div className="mt-3 text-xs text-accent font-semibold">
                  ✓ Currently Active
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="odds-card">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Component Preview
          </h3>
          
          <div className="space-y-4">
            {/* Buttons */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-text-secondary">Buttons</h4>
              <div className="flex flex-wrap gap-2">
                <button className="cyber-button">Primary Button</button>
                <button className="bg-surface border border-accent border-opacity-50 px-4 py-2 rounded text-accent hover:bg-accent hover:text-bg transition-all duration-200">
                  Secondary Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-text-secondary">Cards</h4>
              <div className="glass-card p-4 rounded-lg neon-border">
                <p className="text-text-primary">Glass card with neon border</p>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-text-secondary">Typography</h4>
              <div className="space-y-1">
                <h1 className="text-3xl font-bold text-accent animate-glow">Heading 1</h1>
                <h2 className="text-2xl font-semibold text-text-primary">Heading 2</h2>
                <p className="text-base text-text-primary">Body text</p>
                <p className="text-sm text-text-secondary">Secondary text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
