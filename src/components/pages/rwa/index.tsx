import { lazy } from 'react';

import { CaseStudy } from './case-study';
import Faq from './faq';
import { HeroSection } from './hero-section';
import { HowWeWork } from './how-we-work';
import { Technology } from './technology';
import WhatWeBuild from './what-we-build';
import { WhyTrust } from './why-trust';

import { SafeSection } from '~/components/common';
import { ReadyToTokenize } from '~/components/common/ready-to-tokenize';
import { Footer } from '~/components/pages/home/footer';

const GetInTouch = lazy(() => import('~/components/pages/home/get-in-touch'));

export function RwaPage() {
  return (
    <>
      <HeroSection />
      <SafeSection name="rwa-sections">
        <WhyTrust />
        <WhatWeBuild />
        <CaseStudy />
        <Technology />
        <HowWeWork />
        <ReadyToTokenize title="_READY TO TOKENIZE?" />
        <Faq />
        <GetInTouch />
        <Footer />
      </SafeSection>
    </>
  );
}
