import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatPercentage(percentage: number, decimals = 2): string {
  return `${(percentage * 100).toFixed(decimals)}%`;
}

export function formatAddress(address: string, chars = 4): string {
  if (!address) return '';
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

export function formatTimeLeft(targetTime: Date): {
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
} {
  const now = new Date().getTime();
  const target = targetTime.getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { hours, minutes, seconds, total: difference };
}

export function calculateOdds(userDeposit: number, totalJackpot: number): number {
  if (totalJackpot === 0) return 0;
  return userDeposit / totalJackpot;
}

export function generateMockTxHash(): string {
  return '0x' + Array.from({ length: 64 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Provably fair random number generation (simplified for demo)
export function generateProvablyFairRandom(
  blockHash: string,
  userSeed: string,
  nonce: number
): number {
  // In a real implementation, this would use a more sophisticated
  // cryptographic hash function and verification system
  const combined = `${blockHash}${userSeed}${nonce}`;
  let hash = 0;
  
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return Math.abs(hash) / 2147483647; // Normalize to 0-1
}

export function validateDepositAmount(
  amount: number,
  balance: number,
  minDeposit = 0.001
): { isValid: boolean; error?: string } {
  if (amount <= 0) {
    return { isValid: false, error: 'Amount must be greater than 0' };
  }
  
  if (amount < minDeposit) {
    return { isValid: false, error: `Minimum deposit is ${minDeposit}` };
  }
  
  if (amount > balance) {
    return { isValid: false, error: 'Insufficient balance' };
  }
  
  return { isValid: true };
}
