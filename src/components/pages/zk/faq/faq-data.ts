import type { FaqEntry } from '~/components/common/faq';

export const FAQ_DATA: FaqEntry[] = [
  {
    question: 'Do I need ZK or just encryption?',
    answer:
      "different tools, different problems encryption hides data in storage and transit. ZK proves a statement about hidden data without revealing it if you need to verify something on-chain without exposing the underlying data, that's ZK",
  },
  {
    question: 'How expensive is ZK proof verification on-chain?',
    answer:
      "depends on the proof system and circuit complexity Groth16 verification is relatively cheap on EVM (~300k gas) PLONK and Halo2 have higher verification costs but don't require a trusted setup we model the gas costs during architecture, not after deployment",
  },
  {
    question: "What's a trusted setup and do we need one?",
    answer:
      'Groth16 requires a trusted setup ceremony, a one-time process that produces public parameters if the ceremony is compromised, proofs can be forged we advise on whether to use a proof system that requires a setup (Groth16) or one that doesn’t (PLONK, Halo2) based on your trust model',
  },
  {
    question: 'How long does ZK development take?',
    answer:
      'simple ZK verifier integration: 3 to 6 weeks custom circuit with on-chain verification: 8 to 16 weeks ZK rollup architecture: scoped on first call',
  },
  {
    question: 'Is ZK ready for production?',
    answer:
      'yes - zkSync, StarkNet, Polygon zkEVM, and Scroll are live with real volume the tooling has matured significantly in the last 18 months the engineering depth required is still rare, but we have it',
  },
];
