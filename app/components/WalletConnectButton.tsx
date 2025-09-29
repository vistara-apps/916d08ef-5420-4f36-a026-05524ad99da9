'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { useAccount } from 'wagmi';

export function WalletConnectButton() {
  const { isConnected } = useAccount();

  if (isConnected) {
    return (
      <Wallet>
        <div className="flex items-center space-x-3 glass-card p-3 rounded-lg neon-border">
          <Avatar className="w-8 h-8" />
          <Name className="text-fg font-medium" />
        </div>
      </Wallet>
    );
  }

  return (
    <Wallet>
      <ConnectWallet>
        <button className="cyber-button">
          🔗 Connect Wallet
        </button>
      </ConnectWallet>
    </Wallet>
  );
}
