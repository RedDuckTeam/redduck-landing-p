import { lazy } from 'react';

import BookACall from './book-a-call';
import CaseStudy from './case-study';
import DiscussArchitecture from './discuss-architecture';
import Exploits from './exploits';
import Faq from './faq';
import { HeroSection } from './hero-section';
import HowWeWork from './how-we-work';
import WhatWeBuild from './what-we-build';
import WhyTrust from './why-trust';

import { SafeSection } from '~/components/common';
import ReadyToTokenize from '~/components/common/ready-to-tokenize';
import Footer from '~/components/pages/home/footer';

const GetInTouch = lazy(() => import('~/components/pages/home/get-in-touch'));

export function DefiSecurityAuditPage() {
  return (
    <>
      <HeroSection />
      <SafeSection name="defi-security-audit-sections">
        <WhyTrust />
        <Exploits />
        <WhatWeBuild />
        <DiscussArchitecture />
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
