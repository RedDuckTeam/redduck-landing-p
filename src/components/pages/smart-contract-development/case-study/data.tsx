export interface CaseStudyItem {
  link?: string;
  image: string;
  imageAlt: string;
  /**
   * Self-contained HTML rendered in a sandboxed iframe instead of `image`.
   * The embedded content is non-interactive (not clickable).
   */
  embedSrc?: string;
  title: string;
  description: string[];
  whatWeBuilt: string[];
  result: string[];
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    link: 'https://midas.app/',
    image: '/images/rwa/midas.webp',
    imageAlt: 'RWA Vault Infrastructure',
    embedSrc: '/smart-contract-midas-case.html',
    title: 'RWA VAULT INFRASTRUCTURE',
    description: [
      'Tokenized asset infrastructure for institutional-grade RWA products.',
    ],
    whatWeBuilt: [
      'DepositVault & RedemptionVault',
      'Access control architecture',
      'Chainlink oracle integration',
      'RWA vault infrastructure',
    ],
    result: [
      '$1.7B+ TVL',
      '$50M Series A from Franklin Templeton & Coinbase Ventures',
      '10/10 Hacken score',
      '100% branch coverage',
      'Zero critical issues',
    ],
  },
  {
    image: '/images/defi/invarifi.webp',
    imageAlt: 'InvariFi — Staking & Governance',
    title: 'INVARIFI',
    description: ['Staking and governance infrastructure for a DeFi platform.'],
    whatWeBuilt: [
      'Staking vaults',
      'Reward distribution system',
      'Governance token mechanics',
      'Treasury management',
      'Full smart contract suite',
    ],
    result: [
      'Launched on time',
      'Passed audit',
      'Positive feedback on staking flow',
    ],
  },
  {
    link: 'https://injex.fi/',
    image: '/images/defi/injex.webp',
    imageAlt: 'Injex — DEX Aggregator on Injective',
    title: 'INJEX',
    description: ['DEX aggregation infrastructure on Injective Protocol.'],
    whatWeBuilt: [
      'Liquidity routing across multiple DEX pools',
      'DEX aggregation infrastructure',
    ],
    result: ['Fast delivery', 'Audit-ready architecture'],
  },
  {
    image: '/images/defi-security-audit/ecowise.webp',
    imageAlt: 'Ecowise — Supply Chain & DeFi Lending',
    title: 'ECOWISE',
    description: ['Supply chain financing and DeFi lending automation.'],
    whatWeBuilt: [
      'On-chain supply chain milestone system',
      'Automated DeFi loan evaluation logic',
    ],
    result: ['Automated lending evaluations', 'On-chain financing workflows'],
  },
];
