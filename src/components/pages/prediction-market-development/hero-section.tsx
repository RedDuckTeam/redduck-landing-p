import {
  Breadcrumb,
  CustomSection,
  LandingHeader,
  TextWithDot,
} from '~/components/common';
import { buttonVariants } from '~/components/ui';
import { cn } from '~/utils';

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
  { label: 'Prediction Market Development_' },
];

export function HeroSection() {
  return (
    <CustomSection className="[&>div]:!border-concrete bg-black text-white *:flex *:flex-col *:!py-0">
      <LandingHeader className="relative" />
      <Breadcrumb items={BREADCRUMB_ITEMS} mutedClassName="text-[#9B9B9B]" />

      <div className="border-concrete grid grid-cols-1 lg:grid-cols-3">
        <div className="border-concrete col-span-2 flex flex-col border-b lg:border-b-0 lg:border-r">
          <div className="border-concrete flex-1 border-b px-5 py-10 2xl:p-[60px]">
            <h1
              className={cn(
                'ibm-plex-mono font-medium uppercase leading-[100%]',
                '3xl:text-[120px] text-[34px] md:text-[56px] lg:text-[78px]',
              )}
            >
              PREDICTION MARKET <br /> DEVELOPMENT
              <span className="textCursor">_</span>
            </h1>
          </div>

          <div className="flex flex-col gap-[30px] px-5 py-10 2xl:gap-[40px] 2xl:p-[60px]">
            <TextWithDot className="!p-0 [&>div]:!text-base [&>div]:!leading-[140%] [&>div]:!text-white lg:[&>div]:!text-xl [&>svg]:fill-white">
              The category went from niche to $240B projected volume in 2026 —
              we build the infrastructure behind it
            </TextWithDot>
            <a
              href="#getInTouch"
              className={cn(
                buttonVariants(),
                '!h-[60px] !max-h-[60px] w-fit !px-[40px] text-center !text-[20px] font-normal uppercase text-white',
              )}
            >
              Get a Free Consultation
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center p-5 md:p-10 2xl:p-[60px]">
          <img
            src="/images/prediction-market/hero.webp"
            alt="Prediction Market Development illustration"
            className="h-auto w-full max-w-[600px] object-contain"
            loading="eager"
          />
        </div>
      </div>
    </CustomSection>
  );
}

export default HeroSection;
