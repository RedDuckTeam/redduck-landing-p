import { lazy } from 'react';

import { BookACall } from './book-a-call';
import { CaseStudy } from './case-study';
import { DiscussGovernance } from './discuss-governance';
import Faq from './faq';
import { HeroSection } from './hero-section';
import { HowWeWork } from './how-we-work';
import { Technology } from './technology';
import WhatWeBuild from './what-we-build';
import { WhenNeedDao } from './when-need-dao';
import { WhyTrust } from './why-trust';

import { SafeSection } from '~/components/common';
import ReadyToTokenize from '~/components/common/ready-to-tokenize';
import Footer from '~/components/pages/home/footer';

const GetInTouch = lazy(() => import('~/components/pages/home/get-in-touch'));

export function DaoDevelopmentPage() {
  return (
    <>
      <HeroSection />
      <SafeSection name="dao-development-sections">
        <WhyTrust />
        <WhenNeedDao />
        <WhatWeBuild />
        <DiscussGovernance />
        <CaseStudy />
        <Technology />
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
