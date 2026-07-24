import {
  DexLiquidityIcon,
  PuzzleIcon,
  SmartContractsIcon,
  TokenomicsIcon,
} from '~/components/svg/icons/defi';
import {
  FrontendUxIcon,
  FullCustomIcon,
} from '~/components/svg/icons/prediction-market';

export const SERVICES_DATA = [
  {
    icon: SmartContractsIcon,
    title: 'Governance Architecture & Smart Contracts',
    description:
      'Proposal and voting logic, quorum and threshold design, timelock execution, delegation mechanics. On-chain governance that enforces what it says, not governance theatre.',
  },
  {
    icon: DexLiquidityIcon,
    title: 'Treasury Management',
    description:
      'Multi-sig treasury structure, spending proposal flows, automated disbursement logic, reserve management. The financial layer that makes a DAO an actual organization.',
  },
  {
    icon: TokenomicsIcon,
    title: 'Tokenomics & Incentive Design',
    description:
      "Governance token mechanics, voting power models, delegation incentives, participation rewards. Bad tokenomics produces governance attacks and voter apathy — we design models that don't.",
  },
  {
    icon: PuzzleIcon,
    title: 'DAO Infrastructure & Tooling',
    description:
      'Member registry, role architecture, allowlist/blocklist management, off-chain voting integration (Snapshot) with on-chain execution. The operational layer your community will use every day.',
  },
  {
    icon: FrontendUxIcon,
    title: 'Governance Interfaces & Dashboards',
    description:
      "Proposal creation and voting UI, treasury overview, governance analytics, member activity. Governance that people actually participate in needs a UI that doesn't require a PhD.",
  },
  {
    icon: FullCustomIcon,
    title: 'Custom Governance Modules',
    description:
      'Conviction voting, quadratic voting, rage quit mechanics, sub-DAO structures, cross-chain governance. If your protocol needs something beyond standard Governor Bravo, we build it.',
  },
];
