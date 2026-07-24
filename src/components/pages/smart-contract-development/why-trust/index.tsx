import { TRUST_DATA } from './trust-data';

import { WhyFoundersChoose as WhyFoundersChooseShared } from '~/components/common';

export function WhyTrust() {
  return (
    <WhyFoundersChooseShared
      items={TRUST_DATA}
      title="_WHY FOUNDERS TRUST REDDUCK"
    />
  );
}

export default WhyTrust;
