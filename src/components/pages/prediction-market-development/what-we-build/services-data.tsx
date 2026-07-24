import {
  DexLiquidityIcon,
  StakingYieldIcon,
  TokenomicsIcon,
} from '~/components/svg/icons/defi';
import {
  FrontendUxIcon,
  FullCustomIcon,
  OracleResolutionIcon,
} from '~/components/svg/icons/prediction-market';

export const SERVICES_DATA = [
  {
    icon: FullCustomIcon,
    title: 'Full Custom Prediction Market Protocol',
    description:
      'AMM or order book, market creation and resolution logic, liquidity mechanisms, dispute resolution, oracle integration for automated settlement. Built from scratch around your use case — sports, crypto, politics, real-world events, custom verticals.',
  },
  {
    icon: DexLiquidityIcon,
    title: 'Whitelabel Solution',
    description:
      'Ready-to-deploy prediction market platform, fully branded, customizable, production-ready. Fastest path from idea to live product: weeks, not months. Ideal for founders who want to move fast without building core infrastructure from scratch.',
  },
  {
    icon: StakingYieldIcon,
    title: 'Ready-Made Modules',
    description:
      "Don't need the full platform? We have battle-tested modules for market creation, AMM mechanics, resolution logic, and liquidity pools that can be integrated into existing products.",
  },
  {
    icon: OracleResolutionIcon,
    title: 'Oracle & Resolution Infrastructure',
    description:
      "Automated resolution via Chainlink, UMA, or custom oracle setup. Manual resolution flows with multi-sig dispute handling. Hybrid resolution for edge cases where on-chain data isn't enough.",
  },
  {
    icon: TokenomicsIcon,
    title: 'Liquidity & Market Making',
    description:
      'Initial liquidity seeding, LMSR and CPMM market maker implementations, liquidity incentive design. The difference between a market that works and one that just exists.',
  },
  {
    icon: FrontendUxIcon,
    title: 'Frontend & UX',
    description:
      "Trading interface, market discovery, portfolio and positions dashboard, mobile-ready. We've built data-dense UIs for real traders — prediction markets need that same level of polish.",
  },
];
