import {
  AuditSecurityIcon,
  SmartContractsIcon,
  StakingYieldIcon,
  DexLiquidityIcon,
  MonitoringIcon,
  PuzzleIcon,
} from '~/components/svg/icons/defi';

export const SERVICES_DATA = [
  {
    icon: DexLiquidityIcon,
    title: 'Threat Modeling & Security Architecture',
    description:
      'Protocol review at the design stage, before code is written. Access control design, privilege architecture, upgrade risk, emergency controls, treasury flow assumptions. Changes here cost hours. The same changes after audit cost weeks.',
  },
  {
    icon: SmartContractsIcon,
    title: 'Smart Contract Security Review',
    description:
      'Code-level review focused on business logic vulnerabilities, not just known patterns. Economic attack scenarios, oracle manipulation, flash loan surfaces, access control bypass, invariant breaks under adversarial conditions. EVM / Solidity and Rust / Anchor (Solana).',
  },
  {
    icon: AuditSecurityIcon,
    title: 'Audit Preparation',
    description:
      'Documentation, natspec coverage, architecture diagrams, invariant specifications. A well-prepared submission costs less and returns fewer findings. We coordinate with Hacken and Sherlock.',
  },
  {
    icon: PuzzleIcon,
    title: 'Invariant Testing & Fuzzing',
    description:
      "We define what must always be true in your protocol, then build the test suite to break it. Foundry fuzzing, property-based testing, stateful invariant checks. The kind of testing that catches what the author's test cases never will.",
  },
  {
    icon: MonitoringIcon,
    title: 'Monitoring & Incident Response',
    description:
      "On-chain alerting for anomalous behavior, wallet movements, LP manipulation, admin key activity, contract state changes outside expected bounds. Designed before it's needed under pressure, not after an incident.",
  },
  {
    icon: StakingYieldIcon,
    title: 'Security Retainer',
    description:
      'Post-launch advisory on protocol decisions, governance proposals, new integrations. Monthly retainer for teams that want ongoing security perspective after launch.',
  },
];
