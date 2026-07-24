import { HOW_WE_WORK_DATA } from './how-we-work-data';

import { GridBar } from '~/components/common';
import { cn } from '~/utils';

export function HowWeWork() {
  return (
    <section id="howWeWork" className="bg-pink">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px]">
        <GridBar position="top" columns={1} />

        <header className="border-dark-gray flex min-h-[100px] items-center border-b px-5 2xl:min-h-[150px] 2xl:px-[60px]">
          <h2 className="font-mono text-[24px] font-medium uppercase leading-[60px] text-black md:text-[30px] 2xl:text-[45px]">
            _HOW DO WE WORK?
          </h2>
        </header>

        <div className="border-dark-gray mx-5 border-l border-r 2xl:mx-[60px]">
          <ol className="divide-dark-gray flex flex-col divide-y">
            {HOW_WE_WORK_DATA.map((text, index) => (
              <li
                key={index}
                className="grid grid-cols-[90px_1fr] items-center md:grid-cols-[180px_1fr] 2xl:grid-cols-[280px_1fr]"
              >
                <div className="border-dark-gray flex h-full items-center justify-center border-r p-4 md:p-6 2xl:p-10">
                  <span
                    className={cn(
                      'ibm-plex-mono text-red font-medium leading-none',
                      'text-[40px] md:text-[64px] 2xl:text-[96px]',
                    )}
                  >
                    /0{index + 1}
                  </span>
                </div>

                <p
                  className={cn(
                    'ibm-plex-mono p-5 uppercase leading-[140%] text-black',
                    'text-[14px] md:text-[18px] 2xl:text-[22px]',
                    'md:p-8 2xl:p-10',
                  )}
                >
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <GridBar position="bottom" />
      </div>
    </section>
  );
}

export default HowWeWork;
