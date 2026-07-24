import { WHY_TRUST_DATA } from './data';

import { WhyFoundersChoose as WhyFoundersChooseShared } from '~/components/common';

export function WhyTrust() {
  return (
    <WhyFoundersChooseShared
      items={WHY_TRUST_DATA}
      title="_WHY FOUNDERS TRUST REDDUCK"
    />
  );
}

export default WhyTrust;
