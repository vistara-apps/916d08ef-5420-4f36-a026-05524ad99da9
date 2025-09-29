import type { Metadata } from 'next';
import { Providers } from './providers';
import { ThemeProvider } from './components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'JackpotJester - Win the Whole Jackpot!',
  description: 'Deposit tokens, win the whole jackpot! 1% fee, pure thrills.',
  openGraph: {
    title: 'JackpotJester',
    description: 'Casino-style raffle dApp for Base and Solana',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
