import Reviews from './reviews';

import { CustomSection, DuckInFrame } from '~/components/common';
import { Arrow } from '~/components/svg';
import { Button } from '~/components/ui';
import { LINKS } from '~/constants';

export function About() {
  return (
    <CustomSection id="expertise" className="border-border bg-black *:!py-0">
      <Reviews className="!border-border border-y" hideCarousel />
    </CustomSection>
  );
}

export function ReviewsCarousel() {
  return (
    <CustomSection className="border-border bg-black *:!pb-[20px] *:!pt-0 md:*:!pb-[40px] md:*:!pt-[20px] 2xl:*:!pb-[60px] 2xl:*:!pt-[20px]">
      <Reviews className="!border-border border-b" hideHeader />

      <div className="ml-auto flex h-[160px] w-full border-b lg:w-[calc(50%+1px)] lg:border-l">
        <div className="aspect-square h-full border-r max-xl:hidden">
          <DuckInFrame className="h-full w-full" />
        </div>

        <div className="flex flex-1 flex-row items-center justify-center gap-5">
          <p className="text-xl">SEE CASES ON CLUTCH</p>
          <Button
            variant={'link'}
            size={'link'}
            className="min-h-[56px] border-white bg-black hover:rotate-45"
            asChild
          >
            <a
              href={LINKS.Clutch}
              target="_blank"
              rel="noreferrer"
              aria-label="View RedDuck profile on Clutch"
            >
              <Arrow fill="white" />
            </a>
          </Button>
        </div>
      </div>
    </CustomSection>
  );
}

export default About;
