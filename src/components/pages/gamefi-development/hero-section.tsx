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
  { label: 'GameFi & GambleFi Development_' },
];

export function HeroSection() {
  return (
    <CustomSection className="bg-black text-white *:flex *:flex-col *:!py-0">
      <LandingHeader className="relative" />
      <Breadcrumb items={BREADCRUMB_ITEMS} mutedClassName="text-[#9B9B9B]" />

      <div className="border-concrete grid grid-cols-1 border-b lg:grid-cols-[888fr_1032fr]">
        <div className="border-concrete flex items-center justify-center border-b lg:border-b-0">
          <img
            src="/images/gamefi/hero-gamepad.webp"
            alt="Game controller wired into an on-chain network"
            width={888}
            height={866}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        <div className="flex flex-col">
          <div className="border-concrete flex flex-1 items-center border-b px-5 py-10 2xl:p-[60px]">
            <h1
              className={cn(
                'ibm-plex-mono font-medium uppercase leading-[100%]',
                '3xl:text-[120px] text-[34px] md:text-[56px] lg:text-[78px]',
              )}
            >
              GameFi &amp; GambleFi Development
              <span className="textCursor">_</span>
            </h1>
          </div>

          <div className="border-concrete mb-10 flex flex-col gap-[40px] border px-5 py-10 2xl:mb-[60px] 2xl:p-[60px]">
            <TextWithDot className="!p-0 [&>div]:!text-base [&>div]:!leading-[140%] [&>div]:!text-white lg:[&>div]:!text-xl [&>svg]:fill-white">
              Build on-chain games and betting protocols that actually retain
              players, not just launch and fade
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
      </div>
    </CustomSection>
  );
}

export default HeroSection;
