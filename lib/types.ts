export interface User {
  walletAddress: string;
  totalDeposits: number;
  currentSessionDeposits: number;
  lastActive: Date;
}

export interface Deposit {
  id: string;
  userId: string;
  tokenAddress: string;
  amount: number;
  timestamp: Date;
  drawId?: string;
}

export interface Draw {
  id: string;
  startTime: Date;
  endTime: Date;
  status: 'pending' | 'active' | 'completed';
  totalJackpot: number;
  winningUserAddress?: string;
  commission: number;
  blockHashForSeed?: string;
}

export interface JackpotState {
  totalJackpot: number;
  userDeposit: number;
  totalParticipants: number;
  userOdds: number;
  nextDrawTime: Date;
  currentDraw?: Draw;
}

export interface TransactionState {
  status: 'idle' | 'pending' | 'success' | 'error';
  message?: string;
  txHash?: string;
}

export type Theme = 'default' | 'celo' | 'solana' | 'base' | 'coinbase';

export interface TokenInfo {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  balance?: string;
}
