export interface WhatMakesHardItem {
  number: string;
  title: string;
  description: string;
}

export const WHAT_MAKES_HARD_DATA: WhatMakesHardItem[] = [
  {
    number: '/01',
    title: 'KEY MANAGEMENT IS NOT A LIBRARY CALL.',
    description:
      "HD derivation, secure storage, backup and recovery, key rotation - every decision here is a security decision. Getting it wrong doesn't produce a bug report, it produces a fund loss",
  },
  {
    number: '/02',
    title: 'MULTI-SIG IS HARDER THAN IT LOOKS ON BITCOIN.',
    description:
      'Native Script multisig, PSBT flows, co-signer coordination, fee management across signers - this is specialized territory. Most EVM-focused teams have never touched it.',
  },
  {
    number: '/03',
    title: 'UX AND SECURITY ARE IN PERMANENT TENSION.',
    description:
      "Every extra confirmation step reduces risk and reduces conversion. Finding the right balance requires having done it before — not figuring it out on your users' funds.",
  },
  {
    number: '/04',
    title: 'ON-RAMP INTEGRATIONS BREAK IN PRODUCTION.',
    description:
      'Payment failures, pending states, partial fills, KYC edge cases - the happy path is easy. The error handling is where most implementations fall apart.',
  },
];
