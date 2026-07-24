export const FAQ_DATA = [
  {
    question:
      "What's the difference between custodial and non-custodial wallet development?",
    answer:
      'Custodial: your platform holds the keys. Non-custodial: the user holds the keys. The development complexity is different, the security model is different, and the regulatory exposure is different. We build both and will advise on which fits your product in discovery',
  },
  {
    question: 'Do you build Bitcoin multisig wallets specifically?',
    answer:
      "Yes - including native Bitcoin Script multisig, P2SH and P2WSH structures, PSBT-based co-signer flows, and Taproot. This is more specialized than EVM multisig and most teams don't have this depth.",
  },
  {
    question: 'What on-ramp providers do you work with?',
    answer:
      "MoonPay, Transak, Coinbase Onramp, Privy, and Ramp. We've integrated all of them in production and know where each breaks under edge cases",
  },
  {
    question: 'How long does it take to ship a wallet?',
    answer:
      'MVP with core flows (key management, send/receive, single chain): 6–10 weeks. Full-featured multi-chain mobile wallet with on-ramp and DeFi integrations: 12–20 weeks. We define this with a clear breakdown in the first call',
  },
  {
    question: 'Can you work on an existing wallet codebase?',
    answer:
      "Yes. We've done both greenfield builds and integrations on top of existing wallet infrastructure. If you have a codebase, we'll review it before scoping.",
  },
  {
    question: 'Do you handle App Store submission?',
    answer:
      'Yes - including Apple and Google Play submission, review process navigation, and compliance requirements for financial apps.',
  },
];
