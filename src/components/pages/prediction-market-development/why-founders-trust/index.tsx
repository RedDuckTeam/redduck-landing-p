import { FOUNDERS_TRUST_DATA } from './data';

import { WhyFoundersChoose as WhyFoundersChooseShared } from '~/components/common';

export function WhyFoundersTrust() {
  return (
    <WhyFoundersChooseShared
      items={FOUNDERS_TRUST_DATA}
      title="_THE MARKET RIGHT NOW"
    />
  );
}

export default WhyFoundersTrust;
