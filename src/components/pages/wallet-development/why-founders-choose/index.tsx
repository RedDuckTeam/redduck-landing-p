import { FOUNDERS_CHOOSE_DATA } from './data';

import { WhyFoundersChoose as WhyFoundersChooseShared } from '~/components/common';

export function WhyFoundersChoose() {
  return <WhyFoundersChooseShared items={FOUNDERS_CHOOSE_DATA} />;
}

export default WhyFoundersChoose;
