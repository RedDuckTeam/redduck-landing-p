import { lazy } from 'react';

import { BookACall } from './book-a-call';
import { CaseStudy } from './case-study';
import { DiscussArchitecture } from './discuss-architecture';
import Faq from './faq';
import { HeroSection } from './hero-section';
import { HowWeWork } from './how-we-work';
import { WhatMakesHard } from './what-makes-hard';
import WhatWeBuild from './what-we-build';
import { WhyFoundersChoose } from './why-founders-choose';

import { SafeSection } from '~/components/common';
import { ReadyToTokenize } from '~/components/common/ready-to-tokenize';
import { Footer } from '~/components/pages/home/footer';

const GetInTouch = lazy(() => import('~/components/pages/home/get-in-touch'));

export function WalletDevelopmentPage() {
  return (
    <>
      <HeroSection />
      <SafeSection name="wallet-development-sections">
        <WhyFoundersChoose />
        <WhatWeBuild />
        <DiscussArchitecture />
        <WhatMakesHard />
        <CaseStudy />
        <HowWeWork />
        <BookACall />
        <Faq />
        <ReadyToTokenize />
        <GetInTouch />
        <Footer />
      </SafeSection>
    </>
  );
}
