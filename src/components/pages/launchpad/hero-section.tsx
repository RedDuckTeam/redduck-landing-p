import {
  Breadcrumb,
  CustomSection,
  LandingHeader,
  TextWithDot,
} from '~/components/common';
import { cn } from '~/utils';

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
  { label: 'Launchpad & Token Launch Infrastructure_' },
];

export function HeroSection() {
  return (
    <CustomSection className="bg-black text-white *:flex *:flex-col *:!py-0">
      <LandingHeader className="relative" />
      <Breadcrumb items={BREADCRUMB_ITEMS} mutedClassName="text-concrete" />

      <div>
        <img
          src="/images/launchpad/hero-banner.webp"
          alt="Token launch infrastructure"
          width={1920}
          height={357}
          className="h-[160px] w-full object-cover sm:h-[220px] lg:h-[300px] 2xl:h-[357px]"
        />
      </div>

      <div className="border-dark-gray border-b px-5 py-10 2xl:p-[60px]">
        <h1
          className={cn(
            'ibm-plex-mono font-medium uppercase leading-[100%]',
            '3xl:text-[120px] text-[34px] md:text-[56px] lg:text-[78px]',
          )}
        >
          LAUNCHPAD & TOKEN LAUNCH INFRASTRUCTURE
          <span className="textCursor">_</span>
        </h1>
      </div>

      <div className="border-dark-gray flex flex-col gap-[40px] border-b px-5 py-10 2xl:p-[60px]">
        <TextWithDot className="fill-white stroke-white !p-0 [&>div]:!text-[18px] [&>div]:!leading-[140%] [&>div]:!text-white md:[&>div]:!text-[20px]">
          From presale to TGE, smart contracts, distribution mechanics, and
          launch infrastructure that holds under real load
        </TextWithDot>
        <a
          href="#getInTouch"
          className="bg-red ibm-plex-mono self-start px-[40px] py-[12px] text-sm uppercase text-white transition-transform hover:scale-[1.03] md:text-base 2xl:px-[60px] 2xl:py-[15px] 2xl:text-xl"
        >
          Get a Free Consultation
        </a>
      </div>
    </CustomSection>
  );
}

export default HeroSection;
