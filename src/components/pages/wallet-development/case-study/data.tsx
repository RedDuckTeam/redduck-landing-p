export interface CaseStudyItem {
  link?: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  whatWeBuilt?: string[];
  result?: string;
}

export const CASE_STUDIES: [CaseStudyItem, CaseStudyItem] = [
  {
    image: '/images/wallet/go-wallet.webp',
    imageAlt: 'GoWallet — multi-chain crypto wallet',
    title: 'GoWallet — Multi-Chain Crypto Wallet',
    description:
      'Full-cycle wallet development: key management architecture, multi-chain support, fiat on-ramp integration, mobile apps (iOS + Android), DeFi connectivity.',
    whatWeBuilt: [
      'Non-custodial HD wallet architecture',
      'Multi-chain support: EVM + Solana',
      'MoonPay and Coinbase Onramp integration: card, Apple Pay, Google Pay - Privy for wallet-based auth and embedded wallet flows',
      'Mobile apps: React Native / Expo',
      'Real-time balance tracking, transaction history, push notifications',
    ],
  },
  {
    image: '/images/wallet/invarifi.webp',
    imageAlt: 'InvariFi — DeFi platform with mobile wallet',
    title: 'InvariFi — DeFi Platform with Mobile Wallet',
    description:
      'Full-stack DeFi platform including mobile wallet, staking flows, and portfolio management. iOS + Android delivery alongside smart contracts, backend, and dashboard',
    result:
      'launched on time, passed audit, positive user feedback on wallet UX and staking flow.',
  },
];
