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
  { label: 'ZK Development_' },
];

export function HeroSection() {
  return (
    <CustomSection className="bg-black text-white *:flex *:flex-col *:!py-0">
      <LandingHeader className="relative" />
      <Breadcrumb items={BREADCRUMB_ITEMS} mutedClassName="text-[#9B9B9B]" />

      <div className="border-concrete grid grid-cols-1 border-b lg:grid-cols-[min-content_1fr]">
        <div className="border-concrete flex flex-col justify-center border-b px-5 py-10 lg:border-b-0 lg:border-r 2xl:p-[60px]">
          <h1
            className={cn(
              'ibm-plex-mono font-medium uppercase leading-[100%]',
              '3xl:text-[120px] text-[34px] md:text-[56px] lg:text-[78px]',
            )}
          >
            ZK Development
            <span className="textCursor">_</span>
          </h1>
        </div>

        <div className="flex items-start px-5 py-10 lg:items-center 2xl:p-[60px]">
          <TextWithDot className="!p-0 [&>div]:!text-base [&>div]:!leading-[140%] [&>div]:!text-white lg:[&>div]:!text-xl [&>svg]:fill-white">
            Zero-knowledge proofs for privacy, scalability, and verifiable
            computation, production-grade, not research-grade
          </TextWithDot>
        </div>
      </div>

      <div className="border-concrete border-b px-5 py-10 2xl:p-[60px]">
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

      <div>
        <img
          src="/images/zk/hero-network.webp"
          alt="Zero-knowledge network illustration"
          width={1920}
          height={780}
          className="h-auto w-full object-cover"
          loading="eager"
        />
      </div>
    </CustomSection>
  );
}

export default HeroSection;
