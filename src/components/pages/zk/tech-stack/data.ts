export interface ZkTechItem {
  number: string;
  logo: string;
  alt: string;
  label: string;
}

export const ZK_TECH_ROW_1: ZkTechItem[] = [
  {
    number: '01',
    logo: '/images/zk/logos/circom.svg',
    alt: 'Circom',
    label: 'ZK circuit development',
  },
  {
    number: '02',
    logo: '/images/zk/logos/noir.svg',
    alt: 'Noir',
    label: 'developer-friendly ZK circuits for EVM',
  },
  {
    number: '03',
    logo: '/images/zk/logos/halo2.svg',
    alt: 'Halo2',
    label: 'recursive proofs and high-performance proving',
  },
  {
    number: '04',
    logo: '/images/zk/logos/snarkjs.svg',
    alt: 'snarkjs',
    label: 'proof generation and Groth16/PLONK verifier contracts',
  },
];

export const ZK_TECH_ROW_2: ZkTechItem[] = [
  {
    number: '05',
    logo: '/images/zk/logos/solidity.svg',
    alt: 'Solidity',
    label: 'on-chain verifier contract deployment',
  },
  {
    number: '06',
    logo: '/images/zk/logos/zksync.svg',
    alt: 'zkSync / StarkNet / Polygon zkEVM',
    label: 'L2 deployment environments',
  },
  {
    number: '07',
    logo: '/images/zk/logos/rust.svg',
    alt: 'Rust',
    label: 'high-performance proof generation backends',
  },
];
