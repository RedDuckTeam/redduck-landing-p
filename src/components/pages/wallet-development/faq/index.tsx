import { FAQ_DATA } from './faq-data';

import { Faq, LogoOnABlock } from '~/components/common';

export default function WalletFaq() {
  return <Faq items={FAQ_DATA} media={<LogoOnABlock variant="duck" />} />;
}
