import { FAQ_DATA } from './faq-data';

import { Faq } from '~/components/common/faq';

export default function ZkFaq() {
  return (
    <Faq
      items={FAQ_DATA}
      image={{
        src: '/images/zk/faq-media.webp',
        alt: 'Pixel-art question mark cube',
      }}
    />
  );
}
