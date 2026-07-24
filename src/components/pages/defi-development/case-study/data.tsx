export interface CaseStudyItem {
  link?: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string[];
  whatWeBuilt: string[];
  result: string;
  quote: string;
  quoteAuthor: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    link: 'https://injex.fi/',
    image: '/images/defi/injex.webp',
    imageAlt: 'Injex DEX Aggregator',
    title: 'INJEX — DEX AGGREGATOR ON INJECTIVE PROTOCOL',
    description: [
      'Injex is the first liquidity aggregator on Injective - uniting liquidity from multiple DEXs to give traders optimal pricing with minimal slippage.',
      'RedDuck delivered the full backend architecture and core smart contracts. The system routes trades across multiple DEX pools using a hybrid order book model, pulling deep liquidity without requiring users to manually find the best price.',
    ],
    whatWeBuilt: [
      'Core smart contract infrastructure',
      'Liquidity routing and aggregation logic',
      'Audit-ready codebase',
      'Ongoing backend support',
    ],
    result:
      'Live on Injective, praised by the client for fast delivery, high-quality output, and deep understanding of DeFi architecture. Communication via Slack and Telegram throughout.',
    quote: 'Fast delivery, high-quality output, and responsiveness.',
    quoteAuthor: 'Injex client review on Clutch',
  },
  {
    image: '/images/defi/invarifi.webp',
    imageAlt: 'InvariFi Staking Aggregator',
    title: 'InvariFi — Staking Aggregator & DeFi Governance Platform',
    description: [
      'InvariFi combines AI-powered analytics with DeFi staking infrastructure - a platform where users can stake, earn yield, and participate in protocol governance from a single interface. RedDuck delivered the entire product: smart contracts, backend, frontend, mobile app, and tokenomics model. This is the most comprehensive DeFi build in our portfolio - every layer of the stack.',
    ],
    whatWeBuilt: [
      'Staking smart contracts and vault architecture',
      'Governance and treasury management contracts',
      'Tokenomics model design',
      'Backend API and frontend dashboard',
      'Mobile application',
      'Audit coordination and deployment',
    ],
    result:
      "launched on time, within budget, passed audit without major issues. Users praised the staking UX. Client noted RedDuck's professionalism, technical expertise, and product thinking - not just execution.",
    quote: 'Professionalism, technical expertise, and strong product thinking.',
    quoteAuthor: 'InvariFi client review on Clutch',
  },
];
