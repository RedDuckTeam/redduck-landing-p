import { lazy } from 'react';

import { AuditReady } from './audit-ready';
import { BookACall } from './book-a-call';
import { CaseStudy } from './case-study';
import { DiscussArchitecture } from './discuss-architecture';
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

export function SmartContractDevelopmentPage() {
  return (
    <>
      <HeroSection />
      <SafeSection name="smart-contract-development-sections">
        <WhyTrust />
        <WhatWeBuild />
        <DiscussArchitecture />
        <AuditReady />
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
