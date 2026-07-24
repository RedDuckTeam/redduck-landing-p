export interface CaseInfoItem {
  name: string;
  about: string;
  blockChainGroups?: { name: string; icon: string }[];
  notableProjects?: { name: string; link: string }[];
}

export const CasesInfo: CaseInfoItem[] = [
  {
    name: 'EVM',
    blockChainGroups: [
      { icon: '/svg/icons/eth.svg?url', name: 'Ethereum' },
      { icon: '/svg/icons/bnb.svg?url', name: 'BNB' },
      { icon: '/svg/icons/polygon.svg?url', name: 'Polygon' },
      { icon: '/svg/icons/optimism.svg?url', name: 'Optimism' },
      { icon: '/svg/icons/aval.svg?url', name: 'Avalanche' },
      { icon: '/svg/icons/arbt.svg?url', name: 'Arbitrum' },
      { icon: '/svg/icons/zk-sync.svg?url', name: 'zkSync' },
      { icon: '/svg/icons/base.svg?url', name: 'Base' },
    ],
    about:
      'Since 2020, RedDuck has specialized in building EVM-compatible blockchains and smart contracts, offering full-stack development for Web3 projects. The development covers the entire ecosystem – from indexers and back-end services to front-end applications that seamlessly interact with blockchains and smart contracts.',
    notableProjects: [
      {
        name: 'Midas',
        link: 'https://midas.app',
      },
    ],
  },
  {
    name: 'SOLANA',
    about:
      "Solana's emergence allowed to develop extremely fast applications with low transaction cost. RedDuck utilizes Solana for applications where scalability, speed and cost of transactions is the highest priority.",
    notableProjects: [
      {
        name: 'Prophet',
        link: 'https://prophet.fun/',
      },
      {
        name: 'WARPR',
        link: 'https://x.com/warprHQ/',
      },
    ],
  },
  {
    name: 'HYPERLEDGER',
    about:
      'The Hyperledger project facilitates the development of permissioned blockchains that require access control and configurability. RedDuck utilizes Hyperledger for projects where clients are looking to develop permissioned blockchain solutions.',
  },
  {
    name: 'INJECTIVE',
    about:
      'Our team has hands-on experience building on top of the Injective chain, a high-performance blockchain designed for financial projects.',
    notableProjects: [
      {
        name: 'Injex.fi',
        link: 'https://injex.fi/',
      },
    ],
  },
  {
    name: 'COSMOS',
    about:
      'Cosmos SDK is a powerful kit that allows to develop custom blockchains, with a bigger focus on higher-level layer programming. RedDuck utilizes Cosmos SDK where a new blockchain is needed to be developed while adhering to the best practices.',
  },
  {
    name: 'SUBSTRATE',
    about:
      'For very deep blockchain development with lower-level layer changes such as consensus and runtime logic, Substrate is the better option to go with. When we see a need to develop a novel blockchain, we usually go with Substrate, unless there is a better option.',
  },
];
