export const SUPPORTED_TOKENS = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    isNative: true,
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    decimals: 6,
    isNative: false,
  },
  {
    symbol: 'ZARA',
    name: 'ZaraAi Token',
    address: '0x1234567890123456789012345678901234567890', // Placeholder
    decimals: 18,
    isNative: false,
  },
] as const;

export const DRAW_DURATION = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
export const PLATFORM_COMMISSION = 0.01; // 1%
export const MIN_DEPOSIT = 0.001; // Minimum deposit amount

export const THEME_CONFIG = {
  default: {
    name: 'Gaming',
    description: 'Cyberpunk gaming aesthetic',
    colors: {
      bg: '#1a0d2e',
      fg: '#e0e7ff',
      accent: '#00ff41',
      surface: '#2d1b4e',
      textPrimary: '#ffffff',
      textSecondary: '#a78bfa',
    },
  },
  celo: {
    name: 'Celo',
    description: 'Black background, yellow accents',
    colors: {
      bg: '#000000',
      fg: '#ffffff',
      accent: '#fbcc5c',
      surface: '#1a1a1a',
      textPrimary: '#ffffff',
      textSecondary: '#cccccc',
    },
  },
  solana: {
    name: 'Solana',
    description: 'Purple background, magenta accents',
    colors: {
      bg: '#1a0d2e',
      fg: '#ffffff',
      accent: '#9945ff',
      surface: '#2d1b4e',
      textPrimary: '#ffffff',
      textSecondary: '#c084fc',
    },
  },
  base: {
    name: 'Base',
    description: 'Dark blue background, Base blue accents',
    colors: {
      bg: '#0f172a',
      fg: '#f1f5f9',
      accent: '#0052ff',
      surface: '#1e293b',
      textPrimary: '#ffffff',
      textSecondary: '#94a3b8',
    },
  },
  coinbase: {
    name: 'Coinbase',
    description: 'Navy background, Coinbase blue accents',
    colors: {
      bg: '#0c1426',
      fg: '#f8fafc',
      accent: '#0052ff',
      surface: '#1e293b',
      textPrimary: '#ffffff',
      textSecondary: '#94a3b8',
    },
  },
} as const;

export const MOCK_ACTIVITIES = [
  {
    user: '0x1234...5678',
    action: 'deposited',
    amount: '0.5 ETH',
    time: '2 minutes ago',
    type: 'deposit' as const,
  },
  {
    user: '0x9876...5432',
    action: 'deposited',
    amount: '100 USDC',
    time: '5 minutes ago',
    type: 'deposit' as const,
  },
  {
    user: '0xabcd...efgh',
    action: 'won jackpot',
    amount: '45,230.50 USD',
    time: '11 hours ago',
    type: 'win' as const,
  },
  {
    user: '0x5555...9999',
    action: 'deposited',
    amount: '1,000 ZARA',
    time: '15 minutes ago',
    type: 'deposit' as const,
  },
] as const;

export const BASE_SCAN_URL = 'https://basescan.org';
export const BLOCK_EXPLORER_TX_URL = `${BASE_SCAN_URL}/tx/`;
export const BLOCK_EXPLORER_ADDRESS_URL = `${BASE_SCAN_URL}/address/`;

// Contract addresses (placeholder for demo)
export const CONTRACT_ADDRESSES = {
  JACKPOT_CONTRACT: '0x1111111111111111111111111111111111111111',
  TREASURY: '0x2222222222222222222222222222222222222222',
} as const;
