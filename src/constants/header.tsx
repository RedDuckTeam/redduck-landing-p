import { Route } from './routes';

export type HeaderItem = {
  name: string;
  isComplex?: boolean;
  items?: HeaderItem[];
  href?: string;
};

export const LandingHeaderLinks: HeaderItem[] = [
  {
    name: 'Services',
    items: [
      { name: 'DeFi Development', href: Route.Services.DEFI },
      { name: 'RWA Tokenization', href: Route.Services.RWA },
      { name: 'Wallet Development', href: Route.Services.WALLET },
      {
        name: 'Smart Contract Development',
        href: Route.Services.SMART_CONTRACTS,
      },
      {
        name: 'DeFi Security & Audit Readiness',
        href: Route.Services.DEFI_SECURITY,
      },
      {
        name: 'Prediction Market Development',
        href: Route.Services.PREDICTION_MARKET,
      },
      { name: 'DAO Development', href: Route.Services.DAO },
      {
        name: 'Launchpad & Token Launch Infrastructure',
        href: Route.Services.LAUNCHPAD,
      },
      { name: 'ZK Development', href: Route.Services.ZK },
      {
        name: 'GameFi & GambleFi Development',
        href: Route.Services.GAMEFI,
      },
    ],
  },
  // {
  //   name: 'SERVICES',
  //   isComplex: true,
  //   items: [
  //     {
  //       name: 'BLOCKCHAIN',
  //       items: [
  //         {
  //           name: 'Blockchain Frameworks',
  //           items: [
  //             { name: 'Hyperledger Development', href: '' },
  //             { name: 'Cosmos SDK Development', href: '' },
  //             { name: 'Substrate Development', href: '' },
  //             { name: 'PolkaDot Development', href: '' },
  //           ],
  //         },
  //         {
  //           name: 'Blockchain Services',
  //           items: [
  //             { name: 'Blockchain consulting', href: '' },
  //             { name: 'Blockchain development', href: '' },
  //             { name: 'Tokenomics development', href: '' },
  //             { name: 'Cryptocurrency Development', href: '' },
  //             { name: 'Optimistic Rollups', href: '' },
  //             { name: 'ZK Rollups', href: '' },
  //             { name: 'Smart Contract development', href: '' },
  //             { name: 'Cryptocurrency Exchange Development', href: '' },
  //           ],
  //         },
  //         {
  //           name: 'Blockchain Solutions',
  //           items: [
  //             { name: 'DAO Development', href: '' },
  //             { name: 'Blockchain Solution For Pharma Industry', href: '' },
  //             { name: 'Blockchain In Identity Management', href: '' },
  //             { name: 'Blockchain for Supply Chain', href: '' },
  //           ],
  //         },
  //         {
  //           name: 'NFT',
  //           items: [
  //             { name: 'NFT Token Development', href: '' },
  //             { name: 'NFT Game Development', href: '' },
  //             { name: 'NFT Marketplace Development', href: '' },
  //           ],
  //         },
  //         {
  //           name: 'gamefi',
  //           items: [
  //             { name: 'GameFi Development', href: '' },
  //             { name: 'Web3 Game Development', href: '' },
  //             { name: 'P2E Game Development', href: '' },
  //           ],
  //         },
  //         {
  //           name: 'Blockchain Infrastructure',
  //           items: [
  //             { name: 'Cross Chain Bridge Development', href: '' },
  //             { name: 'Crypto Wallet Development', href: '' },
  //           ],
  //         },
  //         {
  //           name: 'Smart contracts',
  //           items: [
  //             { name: 'Ethereum development', href: '' },
  //             { name: 'Solana Development Services', href: '' },
  //             { name: 'Near Development', href: '' },
  //             { name: 'TON blockchain development', href: '' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: 'DEFI',
  //       items: [
  //         {
  //           name: 'Blockchain Frameworks',
  //           items: [{ name: '4Blockchain consulting', href: '' }],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    name: 'Cases',
    href: Route.Home.Cases,
  },
  // {
  //   name: 'FAQ',
  //   href: Route.Home.FAQ,
  // },
  // {
  //   name: 'Blog',
  //   href: Route.Home.Blog,
  // },
  {
    name: 'ABOUT US',
    items: [
      { name: 'academy', href: Route.AboutUs.Academy },
      { name: 'our team', href: Route.AboutUs.OurTeam },
      // { name: 'partners', href: Route.AboutUs.Partners },
      // { name: 'vacancies', href: Route.AboutUs.Vacancies },
      { name: 'memo', href: Route.AboutUs.Memorandum },
      // { name: 'terms and conditions', href: Route.AboutUs.TermsAndConditions },
    ],
  },
];

export const LandingHeaderLinksMobile: HeaderItem[] = [
  { name: 'DeFi Development', href: Route.Services.DEFI },
  { name: 'RWA Tokenization', href: Route.Services.RWA },
  { name: 'Wallet Development', href: Route.Services.WALLET },
  {
    name: 'Smart Contract Development',
    href: Route.Services.SMART_CONTRACTS,
  },
  {
    name: 'DeFi Security & Audit Readiness',
    href: Route.Services.DEFI_SECURITY,
  },
  {
    name: 'Prediction Market Development',
    href: Route.Services.PREDICTION_MARKET,
  },
  { name: 'DAO Development', href: Route.Services.DAO },
  {
    name: 'Launchpad & Token Launch Infrastructure',
    href: Route.Services.LAUNCHPAD,
  },
  { name: 'ZK Development', href: Route.Services.ZK },
  {
    name: 'GameFi & GambleFi Development',
    href: Route.Services.GAMEFI,
  },
  {
    name: 'Cases',
    href: Route.Home.Cases,
  },
  { name: 'Academy', href: Route.AboutUs.Academy },
  { name: 'Our Team', href: Route.AboutUs.OurTeam },
  { name: 'Memo', href: Route.AboutUs.Memorandum },
];
