import { lazy } from 'react';

import GameFiFaq from './faq';
import { HeroSection } from './hero-section';
import { HowProjectsSucceed } from './how-projects-succeed';
import { HowWeWork } from './how-we-work';
import { Ready } from './ready';
import { TechStack } from './tech-stack';
import { WhatWeBuild } from './what-we-build';
import { WhatWeveShipped } from './what-weve-shipped';

import { SafeSection } from '~/components/common';
import { Footer } from '~/components/pages/home/footer';
import { CtaBanner } from '~/components/pages/launchpad/cta-banner';

const GetInTouch = lazy(() => import('~/components/pages/home/get-in-touch'));

export function GameFiDevelopmentPage() {
  return (
    <>
      <HeroSection />
      <SafeSection name="gamefi-development-sections">
        <WhatWeveShipped />
        <WhatWeBuild />
        <CtaBanner
          variant="red"
          title="Discuss your game architecture"
          label="Schedule a Consultation"
          calendly
        />
        <HowProjectsSucceed />
        <TechStack />
        <HowWeWork />
        <CtaBanner
          variant="red"
          title="Book a free game architecture call"
          label="Schedule a Consultation"
          calendly
        />
        <GameFiFaq />
        <Ready />
        <GetInTouch />
        <Footer />
      </SafeSection>
    </>
  );
}

export default GameFiDevelopmentPage;
