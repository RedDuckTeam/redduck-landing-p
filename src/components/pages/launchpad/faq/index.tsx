import { FAQ_DATA } from './faq-data';

import { Faq } from '~/components/common/faq';

export default function LaunchpadFaq() {
  return (
    <Faq
      items={FAQ_DATA}
      image={{
        src: '/images/launchpad/faq-dice.png',
        alt: 'Pixel-art question mark dice',
      }}
    />
  );
}
