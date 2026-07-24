import {
  Breadcrumb,
  CustomSection,
  LandingHeader,
  TextWithDot,
} from '~/components/common';
import { Squares } from '~/components/common/squares';
import { cn } from '~/utils';

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
  { label: 'RWA Tokenization Development_' },
];

export function HeroSection() {
  return (
    <CustomSection className="bg-gray text-black *:flex *:flex-col *:!py-0">
      <LandingHeader className="relative" />
      <Breadcrumb items={BREADCRUMB_ITEMS} mutedClassName="text-concrete" />

      <div className="px-5 py-10 2xl:p-[60px]">
        <h1
          className={cn(
            'ibm-plex-mono font-medium uppercase leading-[100%]',
            '3xl:text-[120px] text-[34px] md:text-[56px] lg:text-[78px]',
          )}
        >
          RWA TOKENIZATION DEVELOPMENT
          <span className="textCursor">_</span>
        </h1>
      </div>

      <div className="border-dark-gray relative h-[150px] border-t md:h-[200px] lg:hidden">
        <Squares
          moveScale={0.5}
          scaleX={0.12}
          scaleY={0.12}
          speed={0.005}
          squareSize={80}
          approximateSquareSize
          className="absolute"
        />
      </div>

      <div className="border-dark-gray grid grid-cols-1 overflow-hidden border-y lg:grid-cols-2 2xl:h-[278px]">
        <div className="border-dark-gray bg-gray z-[1] flex flex-col justify-between gap-[40px] p-5 lg:border-b-0 lg:border-r 2xl:px-[60px] 2xl:py-[40px]">
          <TextWithDot className="!p-0 [&>div]:!text-[20px] [&>div]:!leading-[140%]">
            Turn real-world assets into on-chain infrastructure — from
            architecture to launch
          </TextWithDot>
          <a
            href="#getInTouch"
            className="ibm-plex-mono self-start bg-black px-[20px] py-[10px] text-sm uppercase text-white transition-transform hover:scale-[1.03] md:px-[40px] md:py-[12px] md:text-base 2xl:px-[60px] 2xl:py-[15px] 2xl:text-xl"
          >
            Get a Free Consultation
          </a>
        </div>

        <div className="relative max-lg:hidden">
          <Squares
            moveScale={0.5}
            scaleX={0.12}
            scaleY={0.12}
            speed={0.005}
            squareSize={80}
            approximateSquareSize
            className="absolute"
          />
        </div>
      </div>
    </CustomSection>
  );
}

export default HeroSection;
