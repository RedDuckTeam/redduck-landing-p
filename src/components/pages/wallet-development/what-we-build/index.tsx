import { SERVICES_DATA } from './services-data';

import { WhatWeBuild } from '~/components/common';

const SERVICES = SERVICES_DATA.map((service, index) => ({
  ...service,
  className: index < 3 ? 'xl:col-span-2' : 'xl:col-span-3',
}));

export default function WalletWhatWeBuild() {
  return (
    <WhatWeBuild
      services={SERVICES}
      gridClassName="xl:grid-cols-6"
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
