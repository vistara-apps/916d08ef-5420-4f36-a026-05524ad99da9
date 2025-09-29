'use client';

import { TrendingUp, Users, Percent } from 'lucide-react';

interface OddsDisplayProps {
  totalJackpot: number;
  userDeposit: number;
  totalParticipants: number;
  userOdds: number;
}

export function OddsDisplay({ 
  totalJackpot, 
  userDeposit, 
  totalParticipants, 
  userOdds 
}: OddsDisplayProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${(percentage * 100).toFixed(2)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Jackpot Display */}
      <div className="text-center space-y-2">
        <div className="jackpot-display animate-float">
          {formatCurrency(totalJackpot)}
        </div>
        <p className="text-text-secondary">
          Total Jackpot Pool
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* User Deposit */}
        <div className="odds-card text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-text-secondary">Your Deposit</span>
          </div>
          <div className="text-2xl font-bold text-text-primary">
            {formatCurrency(userDeposit)}
          </div>
        </div>

        {/* Participants */}
        <div className="odds-card text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Users className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-text-secondary">Players</span>
          </div>
          <div className="text-2xl font-bold text-text-primary">
            {totalParticipants.toLocaleString()}
          </div>
        </div>

        {/* Win Odds */}
        <div className="odds-card text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Percent className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-text-secondary">Your Odds</span>
          </div>
          <div className="text-2xl font-bold text-accent animate-glow">
            {formatPercentage(userOdds)}
          </div>
        </div>
      </div>

      {/* Odds Explanation */}
      {userDeposit > 0 && (
        <div className="glass-card p-4 rounded-lg border border-accent border-opacity-20">
          <p className="text-sm text-text-secondary text-center">
            You've deposited <span className="text-accent font-semibold">{formatCurrency(userDeposit)}</span> out of{' '}
            <span className="text-accent font-semibold">{formatCurrency(totalJackpot)}</span> total.
            <br />
            If you win, you'll receive <span className="text-accent font-semibold">
              {formatCurrency(totalJackpot * 0.99)}
            </span> (99% of jackpot)
          </p>
        </div>
      )}
    </div>
  );
}
