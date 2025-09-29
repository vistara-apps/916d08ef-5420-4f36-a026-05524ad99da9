'use client';

import { CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';

interface TransactionStatusProps {
  status: 'pending' | 'success' | 'error' | 'idle';
  message?: string;
  txHash?: string;
}

export function TransactionStatus({ status, message, txHash }: TransactionStatusProps) {
  if (status === 'idle') return null;

  const getStatusConfig = () => {
    switch (status) {
      case 'pending':
        return {
          icon: <Clock className="w-5 h-5 animate-spin" />,
          color: 'text-yellow-400',
          bgColor: 'bg-yellow-400 bg-opacity-10',
          borderColor: 'border-yellow-400',
          title: 'Transaction Pending',
          defaultMessage: 'Your transaction is being processed...',
        };
      case 'success':
        return {
          icon: <CheckCircle className="w-5 h-5" />,
          color: 'text-accent',
          bgColor: 'bg-accent bg-opacity-10',
          borderColor: 'border-accent',
          title: 'Transaction Successful',
          defaultMessage: 'Your deposit has been confirmed!',
        };
      case 'error':
        return {
          icon: <XCircle className="w-5 h-5" />,
          color: 'text-red-400',
          bgColor: 'bg-red-400 bg-opacity-10',
          borderColor: 'border-red-400',
          title: 'Transaction Failed',
          defaultMessage: 'Something went wrong. Please try again.',
        };
      default:
        return {
          icon: <AlertCircle className="w-5 h-5" />,
          color: 'text-text-secondary',
          bgColor: 'bg-surface',
          borderColor: 'border-gray-600',
          title: 'Unknown Status',
          defaultMessage: 'Transaction status unknown.',
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`${config.bgColor} ${config.borderColor} border rounded-lg p-4 mb-4`}>
      <div className="flex items-start space-x-3">
        <div className={config.color}>
          {config.icon}
        </div>
        <div className="flex-1">
          <h4 className={`font-semibold ${config.color}`}>
            {config.title}
          </h4>
          <p className="text-sm text-text-secondary mt-1">
            {message || config.defaultMessage}
          </p>
          {txHash && (
            <a
              href={`https://basescan.org/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline mt-2 inline-block"
            >
              View on BaseScan →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
