import {
  BatteryIcon,
  HeartbeatIcon,
  TruckIcon,
  BuildingIcon,
  CalculatorIcon,
  DocumentIcon,
} from '~/components/svg/icons/rwa';

export const SERVICES_DATA = [
  {
    icon: BuildingIcon,
    title: 'SECONDARY MARKET INFRASTRUCTURE',
    description:
      'Trading flows, liquidity mechanisms, DEX integrations, OTC desk support. If your token needs to move, we build the infrastructure for it',
  },
  {
    icon: TruckIcon,
    title: 'ADMIN & BACK-OFFICE',
    description:
      'Issuer dashboard, investor portal, reporting tools, role management. The operational layer your team will use every day',
  },
  {
    icon: HeartbeatIcon,
    title: 'AUDIT & DEPLOYMENT',
    description:
      'Smart contract security audit preparation, third-party audit coordination, testnet + mainnet deployment, post-launch monitoring and support',
  },
  {
    icon: BatteryIcon,
    title: 'TOKENIZATION ENGINE',
    description:
      'Asset registry, issuance flow, vault-based asset management, NAV tracking, cap table management, yield and dividend distribution logic. Built for auditability from day one',
  },
  {
    icon: CalculatorIcon,
    title: 'KYC / AML & INVESTOR ONBOARDING',
    description:
      'Whitelisting, accreditation checks, greenlist/blacklist architecture, third-party KYC provider integrations. Compliant by design — not bolted on',
  },
  {
    icon: DocumentIcon,
    title: 'SMART CONTRACT ARCHITECTURE',
    description:
      'Token standard selection — ERC-20, ERC-3643 (T-REX), ERC-1400 — based on your compliance requirements. Transfer restrictions, whitelist/blacklist logic, role-based access, and compliance rules baked in at the contract level. Not added later',
  },
];
