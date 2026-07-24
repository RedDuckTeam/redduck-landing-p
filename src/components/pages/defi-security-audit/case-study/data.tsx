export interface CaseStudyItem {
  link?: string;
  image: string;
  imageAlt: string;
  /**
   * Self-contained HTML rendered in a sandboxed iframe instead of the text
   * content column. The embedded content is non-interactive (not clickable).
   */
  embedSrc?: string;
  title: string;
  subhead?: string;
  description: string[];
  result: string[];
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    link: 'https://midas.app/',
    image: '/images/rwa/midas.webp',
    imageAlt: 'RWA Vault Security',
    embedSrc: '/defi-security-audit-midas-case.html',
    title: 'RWA VAULT SECURITY',
    description: [
      'RWA Vault Security',
      'Security-first development of vault infrastructure now securing $1.7B+ in real-world assets.',
      'DepositVault, RedemptionVault, oracle integration, greenlist/blacklist enforcement, role-based access control.',
      'Integrated with 20+ DeFi protocols: Morpho, Coinbase, Ledger, Gemini, Société Générale.',
    ],
    result: [
      '10/10 Hacken score',
      '100% branch coverage',
      'Zero critical issues',
    ],
  },
  {
    image: '/images/defi/invarifi.webp',
    imageAlt: 'InvariFi — DeFi platform with mobile wallet',
    title: 'INVARIFI — DEFI PLATFORM WITH MOBILE WALLET',
    subhead: 'Staking Protocol',
    description: [
      'Security review and audit preparation for a DeFi staking platform.',
      'Staking vault logic, reward distribution invariants, governance attack surface, tokenomics review.',
    ],
    result: ['Launched on time, passed audit without major issues'],
  },
];
