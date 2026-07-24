import {
  DexLiquidityIcon,
  StakingYieldIcon,
  LendingBorrowingIcon,
  SmartContractsIcon,
  TokenomicsIcon,
  AuditSecurityIcon,
} from '~/components/svg/icons/defi';

export const SERVICES_DATA = [
  {
    icon: DexLiquidityIcon,
    title: 'DEX & Liquidity Infrastructure',
    description:
      'DEX aggregators, AMM protocols, order book mechanics, liquidity pool architecture, routing logic across multiple chains. Built for low slippage, high reliability, and audit-ready code from day one.',
  },
  {
    icon: StakingYieldIcon,
    title: 'Staking & Yield Platforms',
    description:
      'Staking vaults, restaking mechanics, yield aggregators, reward distribution logic, auto-compounding strategies. We design tokenomics and staking models that align long-term incentives - not just the technical layer.',
  },
  {
    icon: LendingBorrowingIcon,
    title: 'Lending & Borrowing Protocols',
    description:
      'Collateral management, liquidation logic, interest rate models, isolated lending markets, risk parameter architecture. We build with security and capital efficiency as first-order requirements.',
  },
  {
    icon: SmartContractsIcon,
    title: 'Smart Contracts & Protocol Architecture',
    description:
      'EVM / Solidity for Ethereum and compatible chains. Rust for Solana and high-performance use cases. Access control, upgradeability patterns, oracle integrations (Chainlink, custom data feeds), governance modules.',
  },
  {
    icon: TokenomicsIcon,
    title: 'Tokenomics & Incentive Design',
    description:
      "We don't just implement the contract — we help design the model. Emission schedules, vesting contracts, governance token mechanics, staking reward structures. Bad tokenomics kills good protocols. We help you avoid that.",
  },
  {
    icon: AuditSecurityIcon,
    title: 'Audit Preparation & Security',
    description:
      "100% branch test coverage is our baseline before any audit submission. We've worked with Hacken and Sherlock. We prepare codebases that pass - not codebases that need rework after submission.",
  },
];
