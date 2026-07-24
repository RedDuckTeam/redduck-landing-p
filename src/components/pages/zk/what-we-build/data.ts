export interface BentoItem {
  number: string;
  title: string;
  description: string;
  titleVariant?: 'border' | 'pad';
  corners?: boolean;
}

export const BENTO_ITEMS: BentoItem[] = [
  {
    number: '1',
    title: 'ZK Smart Contracts',
    description:
      'smart contracts that verify ZK proofs on-chain Groth16, PLONK, and FFLONK verifier contracts on EVM chains integration with existing protocol logic, ZK as a privacy or scalability layer on top of what you already have',
    titleVariant: 'border',
  },
  {
    number: '2',
    title: 'Privacy-Preserving DeFi',
    description:
      'private transactions, shielded balances, confidential voting ZK proofs that let users prove they meet a condition without revealing the underlying data compliant privacy, prove KYC without exposing personal data on-chain',
    titleVariant: 'border',
  },
  {
    number: '3',
    title: 'ZK Identity & Compliance',
    description:
      'prove age, accreditation, or jurisdiction without revealing identity on-chain verification of off-chain credentials relevant for RWA platforms, regulated DeFi, and institutional products where compliance and privacy are both required',
    corners: true,
  },
  {
    number: '4',
    title: 'ZKP-Based Voting & Governance',
    description:
      'anonymous on-chain voting with verifiable results prove you hold tokens without revealing your wallet quadratic voting and other mechanisms where privacy enables fairer participation',
  },
  {
    number: '5',
    title: 'ZK Rollup & Scaling Architecture',
    description:
      'custom ZK rollup design for projects that need EVM-equivalent scaling without the L1 cost transaction batching, proof generation, on-chain verification layer advisory and architecture for teams evaluating zkSync, StarkNet, or custom rollup implementations',
    titleVariant: 'pad',
    corners: true,
  },
  {
    number: '6',
    title: 'Circuit Development',
    description:
      "custom ZK circuits in Circom, Noir, or Halo2 the low-level engineering that most teams don't have in-house",
    titleVariant: 'border',
  },
];
