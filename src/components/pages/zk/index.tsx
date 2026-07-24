import { lazy } from 'react';

import ZkFaq from './faq';
import { HeroSection } from './hero-section';
import { HowWeWork } from './how-we-work';
import { Ready } from './ready';
import { TechStack } from './tech-stack';
import ZkWhatWeBuild from './what-we-build';
import { WhoNeeds } from './who-needs';
import { WhyZk } from './why-zk';

import { SafeSection } from '~/components/common';
import { Footer } from '~/components/pages/home/footer';
import { CtaBanner } from '~/components/pages/launchpad/cta-banner';

const GetInTouch = lazy(() => import('~/components/pages/home/get-in-touch'));

export function ZkPage() {
  return (
    <>
      <HeroSection />
      <SafeSection name="zk-sections">
        <WhyZk />
        <ZkWhatWeBuild />
        <CtaBanner
          variant="red"
          title="Discuss your ZK architecture"
          label="Schedule a Consultation"
          calendly
        />
        <WhoNeeds />
        <TechStack />
        <HowWeWork />
        <CtaBanner
          variant="red"
          title="Book a free ZK architecture call"
          label="Schedule a Consultation"
          calendly
        />
        <ZkFaq />
        <Ready />
        <GetInTouch />
        <Footer />
      </SafeSection>
    </>
  );
}

export default ZkPage;
