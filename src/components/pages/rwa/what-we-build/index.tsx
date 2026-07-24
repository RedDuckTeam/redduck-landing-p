import { SERVICES_DATA } from './services-data';

import { WhatWeBuild } from '~/components/common';

export default function RwaWhatWeBuild() {
  return (
    <WhatWeBuild
      services={SERVICES_DATA}
      description="We work with founders building tokenization platforms — real estate, private credit, funds, commodities, treasury strategies, and other asset classes. Full-cycle delivery means you get one team from architecture to mainnet."
      gridClassName="mx-0 px-5 py-[40px] 2xl:mx-0 2xl:px-[60px]"
      showBottomGridBar
    />
  );
}
