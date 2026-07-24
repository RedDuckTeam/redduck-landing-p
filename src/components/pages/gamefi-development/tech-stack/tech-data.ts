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
    ],
  },
  {
    id: 'solana',
    label: 'Solana / Rust',
    note: 'high-throughput, low-fee game transactions',
  },
  {
    id: 'chainlink',
    label: 'Chainlink VRF',
    note: 'provably fair randomness for GambleFi',
  },
  {
    id: 'nft',
    label: 'ERC-721, ERC-1155',
    note: 'NFT game assets',
  },
  {
    id: 'storage',
    label: 'IPFS / Arweave',
    note: 'decentralized asset storage',
  },
];
