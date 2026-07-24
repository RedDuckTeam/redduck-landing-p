import { GridBar } from '~/components/common';
import { cn } from '~/utils';

const PROBLEMS = [
  {
    n: '01',
    text: 'The smart contract works fine in testnet then 3,000 wallets hit it simultaneously at TGE and something breaks.',
    align: 'start',
  },
  {
    n: '02',
    text: 'Or the vesting logic has an edge case nobody caught until a whale triggers it six months later.',
    align: 'end',
  },
  {
    n: '03',
    text: "Or the presale raises funds but the distribution mechanism doesn't handle refunds cleanly when a stage sells out mid-transaction.",
    align: 'start',
  },
] as const;

function CornerNumber({ n }: { n: string }) {
  return (
    <div className="relative size-[80px] shrink-0">
      <span className="border-red absolute left-0 top-0 size-[18px] border-l border-t" />
      <span className="border-red absolute right-0 top-0 size-[18px] border-r border-t" />
      <span className="border-red absolute bottom-0 left-0 size-[18px] border-b border-l" />
      <span className="border-red absolute bottom-0 right-0 size-[18px] border-b border-r" />
      <span className="text-red ibm-plex-mono absolute inset-0 flex items-center justify-center text-[45px] leading-none">
        {n}
      </span>
    </div>
  );
}

export function CommonProblem() {
  return (
    <section className="bg-gray text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px] border-t pb-5 md:pb-10 2xl:pb-[60px]">
        <GridBar position="top" variant="dark" />

        <div className="border-dark-gray grid grid-cols-1 border-b lg:grid-cols-2">
          <div className="border-dark-gray flex min-h-[160px] items-center border-b px-5 py-8 lg:border-b-0 lg:border-r lg:px-[40px] 2xl:min-h-[202px] 2xl:px-[60px]">
            <h2 className="ibm-plex-mono text-[28px] font-medium uppercase leading-tight md:text-[36px] 2xl:text-[45px] 2xl:leading-[60px]">
              _Common problem with most token launches
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-5 px-5 py-8 lg:px-[40px] 2xl:px-[60px]">
            <span className="block size-[10px] bg-black" />
            <p className="ibm-plex-mono text-[18px] uppercase leading-[1.4] md:text-[20px]">
              we&apos;ve built launch infrastructure that&apos;s been tested
              under real conditions, not just in a dev environment
            </p>
          </div>
        </div>

        <div className="px-5 pt-5 md:pt-10 lg:px-[40px] 2xl:px-[60px] 2xl:pt-[60px]">
          <div className="border-dark-gray grid grid-cols-1 border md:grid-cols-3">
            {PROBLEMS.map((problem, index) => (
              <div
                key={problem.n}
                className={cn(
                  'border-dark-gray flex flex-col md:min-h-[480px] md:border-r last:md:border-r-0 2xl:min-h-[560px]',
                  index < PROBLEMS.length - 1 && 'border-b md:border-b-0',
                )}
              >
                {problem.align === 'end' && (
                  <div className="hidden flex-1 md:block" />
                )}
                <div
                  className={cn(
                    'flex flex-col gap-5 p-[40px]',
                    problem.align === 'start' &&
                      'md:border-dark-gray md:border-b',
                  )}
                >
                  <CornerNumber n={problem.n} />
                  <p className="text-[20px] leading-[1.4]">{problem.text}</p>
                </div>
                {problem.align === 'start' && (
                  <div className="hidden flex-1 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonProblem;
