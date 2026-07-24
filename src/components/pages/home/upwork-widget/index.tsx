import { CustomSection } from '~/components/common';
import { TopRatedBadge, Upwork } from '~/components/svg';
import { LINKS } from '~/constants';

const UPWORK_STATS = [
  { label: 'Total earned', value: '$600K+' },
  { label: 'Total hours', value: '7,292' },
  { label: 'Total jobs', value: '53' },
  { label: 'Member since', value: 'May 26, 2020' },
] as const;

export function UpworkWidget() {
  return (
    <CustomSection className="bg-black *:!py-0">
      <div className="flex flex-col border-b">
        <div className="flex flex-col items-center justify-between gap-5 border-b px-5 py-[20px] sm:flex-row md:py-[40px] 2xl:px-[40px] 2xl:py-[60px]">
          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <a
              href={LINKS.Upwork}
              target="_blank"
              rel="noreferrer"
              aria-label="RedDuck on Upwork"
            >
              <Upwork className="h-[35px] min-h-[25px] [&_path]:fill-white" />
            </a>

            <div className="flex items-center gap-2">
              <TopRatedBadge className="size-6" />
              <span className="text-base uppercase">Top Rated</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-12">
            {UPWORK_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col text-center">
                <span className="text-concrete text-xs uppercase">
                  {stat.label}
                </span>
                <span className="text-base font-medium sm:text-xl">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CustomSection>
  );
}

export default UpworkWidget;
