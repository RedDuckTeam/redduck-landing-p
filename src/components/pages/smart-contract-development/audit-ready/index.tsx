import { Lock, Star, Trophy } from 'lucide-react';

import { GridBar, TextWithDot } from '~/components/common';
import { DuckIcon } from '~/components/svg/icons';
import { DollarIcon } from '~/components/svg/icons/rwa';

const PRINCIPLES = [
  {
    icon: DollarIcon,
    text: '100% branch coverage is our baseline before anything goes to an auditor',
  },
  {
    icon: Lock,
    text: 'Every function documented, every access control decision explicit',
  },
  {
    icon: Star,
    text: 'Modular architecture with clear separation of concerns',
  },
  {
    icon: Trophy,
    text: 'Invariants defined before tests are written',
  },
];

export function AuditReady() {
  return (
    <section className="bg-pink text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px] border-t">
        <GridBar position="top" columns={1} />

        <div className="border-dark-gray grid grid-cols-1 border-b lg:grid-cols-5">
          <header className="border-dark-gray flex min-h-[100px] items-center border-b px-5 lg:col-span-3 lg:border-b-0 lg:border-r 2xl:min-h-[150px] 2xl:px-[60px]">
            <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
              _WHAT AUDIT-READY ACTUALLY MEANS
            </h2>
          </header>
          <TextWithDot className="flex flex-col justify-center !p-5 lg:col-span-2 2xl:!px-[40px] 2xl:!py-[30px] [&>div]:!text-[20px] [&>div]:!leading-[140%]">
            <span className="lg:text-[20px]">
              Most teams treat the audit as a finish line — write contracts,
              ship to audit, get findings, scramble to fix them, slip the
              launch.
            </span>
          </TextWithDot>
        </div>

        <div className="border-dark-gray mx-5 border-x 2xl:mx-[60px]">
          <div className="border-dark-gray flex items-center justify-center gap-4 border-b px-5 py-6 md:gap-8 2xl:py-[40px]">
            <DuckIcon
              aria-hidden
              className="size-8 shrink-0 -scale-x-100 text-[#F22C1A] md:size-16"
            />
            <h3 className="ibm-plex-mono text-center text-[20px] font-medium uppercase leading-[140%] md:text-[24px] 2xl:text-[32px]">
              WE TREAT IT AS A STARTING POINT
            </h3>
            <DuckIcon
              aria-hidden
              className="size-8 shrink-0 text-[#F22C1A] md:size-16"
            />
          </div>

          <div className="border-dark-gray [&>*]:border-dark-gray grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 [&>*:last-child]:border-r-0 [&>*]:border-b [&>*]:border-r">
            {PRINCIPLES.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex flex-col gap-6 p-5 2xl:gap-8 2xl:p-[40px]"
              >
                <Icon className="size-6 shrink-0" />
                <span className="ibm-plex-mono text-sm font-medium uppercase leading-[140%] md:text-base 2xl:text-[20px]">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-4 px-5 py-10 md:gap-8 md:px-[120px] 2xl:py-[80px]">
            <p className="flex-1 px-2 text-center text-base leading-[140%] md:px-12 md:text-lg 2xl:px-24 2xl:text-[20px]">
              We use internal AI-powered review pipelines to challenge
              architecture decisions, detect overengineering, and verify
              implementation logic before code ever reaches auditors.
            </p>
          </div>
        </div>

        <GridBar position="bottom" columns={1} />
      </div>
    </section>
  );
}

export default AuditReady;
