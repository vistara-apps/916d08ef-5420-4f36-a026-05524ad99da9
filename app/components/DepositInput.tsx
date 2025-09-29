'use client';

import { useState } from 'react';
import { Plus, Coins } from 'lucide-react';

interface DepositInputProps {
  onDeposit: (amount: number, token: string) => void;
  isLoading?: boolean;
}

export function DepositInput({ onDeposit, isLoading = false }: DepositInputProps) {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('ETH');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (numAmount > 0) {
      onDeposit(numAmount, selectedToken);
      setAmount('');
    }
  };

  const tokens = [
    { symbol: 'ETH', name: 'Ethereum', balance: '2.45' },
    { symbol: 'USDC', name: 'USD Coin', balance: '1,250.00' },
    { symbol: 'ZARA', name: 'ZaraAi', balance: '10,000' },
  ];

  return (
    <div className="odds-card">
      <div className="flex items-center space-x-2 mb-4">
        <Coins className="w-5 h-5 text-accent" />
        <h3 className="text-lg font-semibold text-text-primary">Make Deposit</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Token Selection */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Select Token
          </label>
          <select
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value)}
            className="deposit-input w-full"
          >
            {tokens.map((token) => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol} - Balance: {token.balance}
              </option>
            ))}
          </select>
        </div>

        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            step="0.01"
            min="0"
            className="deposit-input w-full"
            required
          />
        </div>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-3 gap-2">
          {['0.1', '0.5', '1.0'].map((quickAmount) => (
            <button
              key={quickAmount}
              type="button"
              onClick={() => setAmount(quickAmount)}
              className="bg-surface border border-accent border-opacity-30 rounded px-3 py-2 text-sm text-accent hover:bg-accent hover:text-bg transition-all duration-200"
            >
              {quickAmount} {selectedToken}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !amount || parseFloat(amount) <= 0}
          className="cyber-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
              <span>Processing...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Deposit {amount} {selectedToken}</span>
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
