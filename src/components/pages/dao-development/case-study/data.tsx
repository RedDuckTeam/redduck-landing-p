export interface CaseStudyItem {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  link?: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    image: '/images/defi/invarifi.webp',
    imageAlt: 'InvariFi — DeFi Governance DAO',
    title: 'INVARIFI — DEFI GOVERNANCE DAO',
    description:
      'Full DAO layer governing staking mechanisms, protocol improvements, community incentives. Tokenomics design, governance framework, staking and treasury smart contracts. Launched on time, passed audit, positive community response.',
  },
  {
    image: '/images/defi-security-audit/ecowise.webp',
    imageAlt: 'EcoWise — Supply Chain Sustainability DAO',
    title: 'ECOWISE — SUPPLY CHAIN SUSTAINABILITY DAO',
    description:
      'Decentralized governance for supply chain coordination across partners and stakeholders. Members vote on sustainability initiatives, funding allocation, supply chain improvements. Open governance increased partner cooperation across the ecosystem.',
  },
  {
    image: '/images/defi/injex.webp',
    imageAlt: 'Injex — DEX Aggregator DAO',
    title: 'INJEX — DEX AGGREGATOR DAO',
    description:
      'Community governance for a DEX aggregator on Injective Protocol. Token holders participate in protocol decisions while the platform maintains optimal liquidity across multiple DEXs.',
    link: 'https://injex.fi/',
  },
];
