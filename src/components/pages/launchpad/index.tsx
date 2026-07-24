import { lazy } from 'react';

import { CommonProblem } from './common-problem';
import { CtaBanner } from './cta-banner';
import LaunchpadFaq from './faq';
import { FinalCta } from './final-cta';
import { HeroSection } from './hero-section';
import { HowWeWork } from './how-we-work';
import { Technology } from './technology';
import { WhatBreaks } from './what-breaks';
import LaunchpadWhatWeBuild from './what-we-build';
import { WhatWeveShipped } from './what-weve-shipped';

import { SafeSection } from '~/components/common';
import { Footer } from '~/components/pages/home/footer';

const GetInTouch = lazy(() => import('~/components/pages/home/get-in-touch'));

export function LaunchpadPage() {
  return (
    <>
      <HeroSection />
      <SafeSection name="launchpad-sections">
        <WhatWeveShipped />
        <CommonProblem />
        <LaunchpadWhatWeBuild />
        <CtaBanner
          variant="red"
          title="Discuss your launch infrastructure"
          label="Schedule a Consultation"
          calendly
        />
        <WhatBreaks />
        <Technology />
        <HowWeWork />
        <CtaBanner
          variant="black"
          title="Book a free launch architecture call"
          label="Schedule a Consultation"
          calendly
        />
        <LaunchpadFaq />
        <FinalCta />
        <GetInTouch />
        <Footer />
      </SafeSection>
    </>
  );
}
