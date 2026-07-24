export interface BuildItem {
  number: string;
  title: string;
  description: string;
}

export const BUILD_LEAD: BuildItem = {
  number: '01',
  title: 'P2E Game Infrastructure',
  description:
    'on-chain game logic, battle mechanics, season and leaderboard systems, reward distribution built to retain players past week one, not just attract them at launch',
};

export const BUILD_LEFT: BuildItem[] = [
  {
    number: '02',
    title: 'NFT Game Assets',
    description:
      'character and item NFTs, trait and ability systems, upgrade mechanics, on-chain rarity assets that have real utility inside the game, not just collectible value',
  },
  {
    number: '03',
    title: 'In-Game Economy Design',
    description:
      'token sinks, reward loops, staking mechanics tied to gameplay the difference between a game that sustains itself and one that inflates into irrelevance in 60 days',
  },
];

export const BUILD_RIGHT: BuildItem[] = [
  {
    number: '04',
    title: 'GambleFi Protocol Development',
    description:
      'on-chain betting logic, provably fair randomness (VRF), house edge mechanics, liquidity pool management regulatory-aware architecture, we design the protocol logic with the constraints of the space in mind',
  },
  {
    number: '05',
    title: 'Whitelabel Solutions',
    description:
      'ready-to-deploy GameFi and GambleFi platforms: fully branded, customizable, production-ready NFT marketplace, battle game framework, presale and staking infrastructure fastest path from idea to live product',
  },
];

export const BUILD_BOTTOM: BuildItem[] = [
  {
    number: '06',
    title: 'Smart Contracts - Full Stack',
    description:
      'ERC-20/ERC-721/ERC-1155 token contracts, game logic contracts, staking vaults, prize pool distribution, randomness integration (Chainlink VRF)',
  },
  {
    number: '07',
    title: 'Frontend & Game Interface',
    description:
      "game UI, battle screens, inventory management, leaderboards, staking dashboard we've built the full stack on DigiToads, contracts to game interface",
  },
];
