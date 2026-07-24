import { SERVICES_DATA } from './services-data';

import { WhatWeBuild } from '~/components/common';

export default function SmartContractWhatWeBuild() {
  return (
    <WhatWeBuild
      services={SERVICES_DATA}
      description={
        <>
          We work with founders building wallets for consumer fintech apps,
          institutional custody solutions, DeFi platforms, and everything in
          between.
          <br />
          <br />
          Full-cycle delivery — from key management architecture to App Store
          launch
        </>
      }
    />
  );
}
