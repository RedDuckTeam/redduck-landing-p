export interface WhatBreaksSlide {
  title: string;
  problem: string;
  solution: string;
}

export const WhatBreaksInfo: WhatBreaksSlide[] = [
  {
    title: 'Race conditions in presale contracts',
    problem:
      'when hundreds of wallets hit a stage simultaneously, naive implementations oversell allocations or lock funds',
    solution:
      'we use commit-reveal patterns and per-stage caps enforced at the contract level',
  },
  {
    title: 'Vesting edge cases',
    problem:
      "what happens when a vesting beneficiary is a multi-sig and the cliff triggers mid-governance dispute? what happens when someone claims partial vesting and the contract doesn't handle rounding correctly?",
    solution:
      'we write vesting contracts with explicit edge case coverage, not just the happy path',
  },
  {
    title: 'Anti-sniping protection',
    problem:
      'bots monitor the mempool and front-run token launches to capture early price appreciation',
    solution:
      'we implement anti-sniping mechanics at the contract level, transaction limits, launch blocks, bot detection patterns',
  },
  {
    title: 'Liquidity management at TGE',
    problem:
      'adding liquidity and listing simultaneously without creating an exploitable price window',
    solution:
      'we coordinate the execution sequence and test it on fork before mainnet',
  },
];
