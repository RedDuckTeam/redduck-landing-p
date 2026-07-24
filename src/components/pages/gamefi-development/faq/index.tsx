import { FAQ_DATA } from './faq-data';

import { Faq } from '~/components/common/faq';

export default function GameFiFaq() {
  return (
    <Faq
      items={FAQ_DATA}
      image={{
        src: '/images/gamefi/faq-cube.webp',
        alt: 'Pixel-art question mark cube',
      }}
    />
  );
}
