import {
  SmartContractsIcon,
  MonitoringIcon,
  PuzzleIcon,
  TokenomicsIcon,
  LendingBorrowingIcon,
} from '~/components/svg/icons/defi';

export const SERVICES_DATA = [
  {
    icon: SmartContractsIcon,
    title: 'EVM / Solidity',
    description:
      'DeFi protocols, token contracts, vesting, governance, vault architecture, escrow, NFT contracts. Ethereum, Polygon, BNB Chain, Arbitrum, Base',
  },
  {
    icon: SmartContractsIcon,
    title: 'Solana / Rust / Anchor',
    description:
      'SPL token programs, staking vaults, escrow, DEX logic, reward distribution. Rust-native, not EVM thinking applied to Solana',
  },
  {
    icon: TokenomicsIcon,
    title: 'Token Contracts & Tokenomics',
    description:
      'ERC-20, ERC-721, ERC-1155, ERC-4626, ERC-3643 (T-REX), ERC-1400 Vesting, emission schedules, staking rewards, governance mechanics We advise on the model, not just the implementation',
  },
  {
    icon: MonitoringIcon,
    title: 'DeFi Protocol Contracts',
    description:
      'AMMs, lending, yield aggregators, liquidation logic, oracle integrations Built with capital efficiency and security as first-order requirements',
  },
  {
    icon: LendingBorrowingIcon,
    title: 'Access Control & Upgradeability',
    description:
      'Role-based access, multi-sig patterns, timelocks, proxy upgradeability (UUPS, Transparent, Beacon) The decisions that determine whether your protocol survives a key compromise',
  },
  {
    icon: PuzzleIcon,
    title: 'Bitcoin Script & Multi-Sig',
    description:
      'Native Bitcoin Script, P2SH, P2WSH, PSBT, Taproot Most EVM teams have never written a line of Bitcoin Script, we have',
  },
];
