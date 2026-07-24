import { WHAT_MAKES_HARD_DATA } from './data';

import { ProcessSteps } from '~/components/common';

export function WhatMakesHard() {
  return (
    <ProcessSteps
      heading="_WALLET DEVELOPMENT HAS ITS CHALLANGES"
      intro="Most teams underestimate this until they're in it."
      footer="We've shipped all of this in production. The architecture recommendations are based on the best market practises"
      items={WHAT_MAKES_HARD_DATA}
    />
  );
}

export default WhatMakesHard;
