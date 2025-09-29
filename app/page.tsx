'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { AppShell } from './components/AppShell';
import { WalletConnectButton } from './components/WalletConnectButton';
import { DrawTimer } from './components/DrawTimer';
import { DepositInput } from './components/DepositInput';
import { OddsDisplay } from './components/OddsDisplay';
import { TransactionStatus } from './components/TransactionStatus';

interface JackpotData {
  totalJackpot: number;
  userDeposit: number;
  totalParticipants: number;
  userOdds: number;
  nextDrawTime: Date;
}

export default function HomePage() {
  const { isConnected, address } = useAccount();
  const [jackpotData, setJackpotData] = useState<JackpotData>({
    totalJackpot: 52242.40,
    userDeposit: 0,
    totalParticipants: 1247,
    userOdds: 0,
    nextDrawTime: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours from now
  });
  
  const [transactionStatus, setTransactionStatus] = useState<{
    status: 'pending' | 'success' | 'error' | 'idle';
    message?: string;
    txHash?: string;
  }>({ status: 'idle' });

  const [isLoading, setIsLoading] = useState(false);

  // Calculate user odds based on deposit
  useEffect(() => {
    if (jackpotData.userDeposit > 0 && jackpotData.totalJackpot > 0) {
      const odds = jackpotData.userDeposit / jackpotData.totalJackpot;
      setJackpotData(prev => ({ ...prev, userOdds: odds }));
    }
  }, [jackpotData.userDeposit, jackpotData.totalJackpot]);

  const handleDeposit = async (amount: number, token: string) => {
    if (!isConnected) {
      setTransactionStatus({
        status: 'error',
        message: 'Please connect your wallet first.',
      });
      return;
    }

    setIsLoading(true);
    setTransactionStatus({
      status: 'pending',
      message: `Depositing ${amount} ${token}...`,
    });

    try {
      // Simulate transaction delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Simulate successful transaction
      const newUserDeposit = jackpotData.userDeposit + amount;
      const newTotalJackpot = jackpotData.totalJackpot + amount;
      
      setJackpotData(prev => ({
        ...prev,
        userDeposit: newUserDeposit,
        totalJackpot: newTotalJackpot,
        totalParticipants: prev.totalParticipants + (prev.userDeposit === 0 ? 1 : 0),
      }));

      setTransactionStatus({
        status: 'success',
        message: `Successfully deposited ${amount} ${token}!`,
        txHash: '0x' + Math.random().toString(16).substr(2, 64),
      });

      // Clear status after 5 seconds
      setTimeout(() => {
        setTransactionStatus({ status: 'idle' });
      }, 5000);

    } catch (error) {
      setTransactionStatus({
        status: 'error',
        message: 'Transaction failed. Please try again.',
      });
      
      setTimeout(() => {
        setTransactionStatus({ status: 'idle' });
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-accent animate-glow">
            🎰 JackpotJester
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Deposit tokens, win the whole jackpot! 1% fee, pure thrills.
          </p>
        </div>

        {/* Draw Timer */}
        <div className="flex justify-center">
          <DrawTimer nextDrawTime={jackpotData.nextDrawTime} />
        </div>

        {/* Transaction Status */}
        <TransactionStatus
          status={transactionStatus.status}
          message={transactionStatus.message}
          txHash={transactionStatus.txHash}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Jackpot Display */}
          <div className="lg:col-span-2">
            <OddsDisplay
              totalJackpot={jackpotData.totalJackpot}
              userDeposit={jackpotData.userDeposit}
              totalParticipants={jackpotData.totalParticipants}
              userOdds={jackpotData.userOdds}
            />
          </div>

          {/* Right Column - Actions */}
          <div className="space-y-6">
            {/* Wallet Connection */}
            <div className="odds-card text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Get Started
              </h3>
              <WalletConnectButton />
              {!isConnected && (
                <p className="text-sm text-text-secondary mt-3">
                  Connect your wallet to participate in the jackpot
                </p>
              )}
            </div>

            {/* Deposit Interface */}
            {isConnected && (
              <DepositInput
                onDeposit={handleDeposit}
                isLoading={isLoading}
              />
            )}

            {/* How It Works */}
            <div className="odds-card">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                How It Works
              </h3>
              <div className="space-y-3 text-sm text-text-secondary">
                <div className="flex items-start space-x-2">
                  <span className="text-accent font-bold">1.</span>
                  <span>Deposit tokens into the shared jackpot</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-accent font-bold">2.</span>
                  <span>Your odds = your deposit / total jackpot</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-accent font-bold">3.</span>
                  <span>Winner takes 99% of the jackpot</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-accent font-bold">4.</span>
                  <span>Draws happen every 12 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="odds-card">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {[
              { user: '0x1234...5678', action: 'deposited', amount: '0.5 ETH', time: '2 minutes ago' },
              { user: '0x9876...5432', action: 'deposited', amount: '100 USDC', time: '5 minutes ago' },
              { user: '0xabcd...efgh', action: 'won jackpot', amount: '45,230.50 USD', time: '11 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-accent border-opacity-10 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm text-text-secondary">
                    <span className="text-accent font-mono">{activity.user}</span> {activity.action} {activity.amount}
                  </span>
                </div>
                <span className="text-xs text-text-secondary">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
