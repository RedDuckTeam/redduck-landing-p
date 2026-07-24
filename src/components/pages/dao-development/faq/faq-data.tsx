export const FAQ_DATA = [
  {
    question: 'Does my project need a DAO?',
    answer:
      "Not always. We'll tell you honestly in the first call. If a multi-sig treasury and clear admin roles solve your problem, that's what we'll recommend.",
  },
  {
    question:
      "What's the difference between on-chain and off-chain governance?",
    answer:
      'Off-chain (Snapshot) is cheaper and faster but requires trust in execution — anyone can ignore the vote. On-chain governance is enforced by smart contracts, votes execute automatically through timelocks. Most mature protocols use a hybrid: off-chain for signaling, on-chain for execution.',
  },
  {
    question: 'How do you prevent governance attacks?',
    answer:
      'Timelock delays, quorum requirements, vote delegation design, and economic attack modeling at the architecture stage. Governance attacks are almost always predictable — the defenses need to be designed in, not patched after.',
  },
  {
    question: 'What voting models do you support?',
    answer:
      'Token-weighted, quadratic, conviction, ranked choice, delegation, and custom models if your protocol needs something different.',
  },
  {
    question: 'How long does it take to launch?',
    answer:
      'Governance MVP (contracts + basic UI): 6 to 10 weeks. Full DAO with treasury, custom modules, and governance interface: 12 to 18 weeks.',
  },
];
