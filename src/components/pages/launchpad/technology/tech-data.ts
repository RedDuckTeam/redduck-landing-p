import type { TechStackTab } from '~/components/common';

export const TECH_TABS: TechStackTab[] = [
  {
    id: 'evm',
    label: 'EVM / Solidity',
    chains: [
      { logo: '/svg/icons/eth.svg', name: 'Ethereum' },
      { logo: '/images/launchpad/chains/polygon.png', name: 'Polygon' },
      { logo: '/images/launchpad/chains/bnb.png', name: 'BNB Chain' },
      { logo: '/images/launchpad/chains/arbitrum.png', name: 'Arbitrum' },
      { logo: '/images/launchpad/chains/base.png', name: 'Base' },
    ],
  },
  {
    id: 'solana',
    label: 'Solana / Rust',
    note: 'SPL token launches and presale mechanics',
  },
  {
    id: 'chainlink',
    label: 'Chainlink price feeds',
    note: 'for USD-denominated presales',
  },
  {
    id: 'graph',
    label: 'The Graph',
    note: 'real-time presale and vesting indexing',
  },
];
