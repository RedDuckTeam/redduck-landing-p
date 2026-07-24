import { lazy } from 'react';

import DiscussPlatform from './discuss-platform';
import Faq from './faq';
import { HeroSection } from './hero-section';
import HowWeWork from './how-we-work';
import MarketQuote from './market-quote';
import PredictionMarkets from './prediction-markets';
import Technology from './technology';
import WhatWeBuild from './what-we-build';
import Whitelabel from './whitelabel';
import WhyFoundersTrust from './why-founders-trust';

import { SafeSection } from '~/components/common';
import ReadyToTokenize from '~/components/common/ready-to-tokenize';
import Footer from '~/components/pages/home/footer';

const GetInTouch = lazy(() => import('~/components/pages/home/get-in-touch'));

export function PredictionMarketDevelopmentPage() {
  return (
    <>
      <HeroSection />
      <SafeSection name="prediction-market-development-sections">
        <WhyFoundersTrust />
        <MarketQuote />
        <WhatWeBuild />
        <PredictionMarkets />
        <DiscussPlatform />
        <Technology />
        <HowWeWork />
        <Whitelabel />
        <Faq />
        <ReadyToTokenize />
        <GetInTouch />
        <Footer />
      </SafeSection>
    </>
  );
}
