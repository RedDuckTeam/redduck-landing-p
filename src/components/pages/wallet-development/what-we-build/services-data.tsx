import {
  LendingBorrowingIcon,
  SmartContractsIcon,
  TokenomicsIcon,
  AuditSecurityIcon,
} from '~/components/svg/icons/defi';

export const SERVICES_DATA = [
  {
    icon: SmartContractsIcon,
    title: 'Non-Custodial Wallet Development',
    description:
      'HD wallet architecture, BIP-32/39/44 derivation paths, secure key generation and storage. Private keys stay on the device - we design the architecture to ensure that holds under every failure mode, not just the happy path',
  },
  {
    icon: AuditSecurityIcon,
    title: 'Account Abstraction (ERC-4337)',
    description:
      "Smart contract wallets with social recovery, session keys, gas sponsorship, and batch transactions. The UX layer that makes wallets usable for people who don't know what a seed phrase is - without compromising self-custody",
  },
  {
    icon: LendingBorrowingIcon,
    title: 'Mobile Wallet (iOS + Android)',
    description:
      'React Native / Expo for cross-platform delivery. Biometric auth, push notifications, real-time balance updates, DeFi integrations, NFT support. Built for users who expect the same polish as their banking app',
  },
  {
    icon: LendingBorrowingIcon,
    title: 'Web3 Wallet & dApp Integration',
    description:
      'Wallet connect flows, WalletConnect v2, SIWE (Sign-In with Ethereum), EIP-712 signing, transaction simulation before confirmation. The integration layer between your product and the on-chain world',
  },
  {
    icon: LendingBorrowingIcon,
    title: 'Fiat On/Off Ramp Integration',
    description:
      "MoonPay, Transak, Coinbase Onramp, Privy - we've integrated all of them. Card payments, Apple Pay, Google Pay flowing into crypto positions with minimal friction. Designed for users with zero prior crypto experience",
  },
  {
    icon: TokenomicsIcon,
    title: 'Multi-Sig & Threshold Signature Wallets',
    description:
      "Multi-signature structures across EVM, Bitcoin, and Solana. Native Bitcoin Script multisig, P2SH, P2WSH - we go deeper than most teams on the Bitcoin side. MPC and threshold signature schemes for institutional custody where eliminating single points of failure isn't optional",
  },
  {
    icon: TokenomicsIcon,
    title: 'Hardware Wallet & Secure Enclave',
    description:
      'Ledger and Trezor integration, secure enclave key storage (iOS Secure Enclave, Android Keystore), hardware-backed signing flows for institutional-grade security requirements',
  },
];
