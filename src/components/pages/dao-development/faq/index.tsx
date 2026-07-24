import { FAQ_DATA } from './faq-data';

import { Faq } from '~/components/common';

export default function DaoFaq() {
  return (
    <Faq
      items={FAQ_DATA}
      image={{
        src: '/images/faq_alternative.webp',
        alt: 'Duck with question mark',
      }}
    />
  );
}
