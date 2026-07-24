import { GridBar } from '../grid-bar';

import { cn } from '~/utils';

export interface FoundersChooseItem {
  number: string;
  value: string;
  description: string;
}

interface WhyFoundersChooseProps {
  items: FoundersChooseItem[];
  title?: string;
}

const LG_COLS_CLASS: Record<number, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
};

export function WhyFoundersChoose({
  items,
  title = '_WHY FOUNDERS CHOOSE REDDUCK',
}: WhyFoundersChooseProps) {
  const count = items.length;
  const lgColsClass = LG_COLS_CLASS[count] ?? 'lg:grid-cols-5';

  return (
    <section className="bg-pink text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px]">
        <GridBar position="top" columns={1} />

        <header className="border-dark-gray flex h-[100px] items-center border-b px-5 md:h-[100px] 2xl:h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
            {title}
          </h2>
        </header>

        <div
          className={cn(
            'border-dark-gray mx-5 grid grid-cols-1 border-l border-r 2xl:mx-[60px]',
            lgColsClass,
          )}
        >
          {items.map((item, index) => {
            const isLast = index === count - 1;
            return (
              <div
                key={item.number}
                className={cn(
                  'flex flex-col p-5 md:p-8 2xl:px-[30px] 2xl:py-[30px]',
                  'border-dark-gray min-h-[260px] 2xl:min-h-[360px]',
                  !isLast && 'border-b lg:border-b-0 lg:border-r',
                )}
              >
                <span className="ibm-plex-mono text-red mb-[60px] text-[60px] font-medium leading-[100%] md:text-[90px] 2xl:mb-[100px]">
                  {item.number}
                </span>
                <div className="flex flex-col gap-[12px] 2xl:gap-[20px]">
                  <p className="ibm-plex-mono text-base font-bold uppercase 2xl:text-[24px] 2xl:leading-[100%]">
                    {item.value}
                  </p>
                  <p className="ibm-plex-mono text-sm uppercase 2xl:text-[20px] 2xl:leading-[140%]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <GridBar position="bottom" />
      </div>
    </section>
  );
}

export default WhyFoundersChoose;
