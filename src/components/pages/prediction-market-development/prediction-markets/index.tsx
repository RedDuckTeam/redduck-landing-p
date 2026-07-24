import { GridBar } from '~/components/common';
import { cn } from '~/utils';

const EDGE_CASES = [
  'The edge cases are where platforms fail what happens when an oracle feed is delayed?',
  'When a market resolves ambiguously?',
  'When a user tries to drain liquidity through a sequence of small trades?',
];

export function PredictionMarkets() {
  return (
    <section className="bg-black text-white">
      <div className="border-concrete 5xl:border-x relative mx-auto w-full max-w-[1920px]">
        <img
          src="/images/defi-security-audit/exploits-bg.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 hidden size-full object-cover lg:block"
        />

        <div className="relative z-10">
          <GridBar position="top" variant="concrete" />

          <div className="border-concrete mx-5 border-x border-b 2xl:mx-[60px]">
            <div className="border-concrete grid grid-cols-1 border-b lg:grid-cols-2">
              <div className="border-concrete flex items-center border-b px-5 py-10 lg:border-b-0 2xl:px-[60px] 2xl:py-[80px]">
                <h2
                  className={cn(
                    'ibm-plex-mono font-semibold uppercase leading-[110%]',
                    'text-[28px] md:text-[40px] 2xl:text-[58px]',
                  )}
                >
                  WHY <span className="text-red">PREDICTION MARKETS</span> ARE
                  HARD TO GET RIGHT
                </h2>
              </div>

              <div className="border-concrete flex p-6 lg:border-l 2xl:p-10">
                <div className="relative flex flex-1 items-center justify-center p-8 2xl:p-12">
                  <span className="border-concrete absolute left-0 top-0 size-5 border-l-2 border-t-2 2xl:size-7" />
                  <span className="border-concrete absolute right-0 top-0 size-5 border-r-2 border-t-2 2xl:size-7" />
                  <span className="border-concrete absolute bottom-0 left-0 size-5 border-b-2 border-l-2 2xl:size-7" />
                  <span className="border-concrete absolute bottom-0 right-0 size-5 border-b-2 border-r-2 2xl:size-7" />
                  <img
                    src="/svg/icons/duck.svg"
                    alt=""
                    aria-hidden
                    className="w-[140px]"
                  />
                </div>
              </div>
            </div>

            <div className="border-concrete flex w-full flex-col gap-6 border-b px-5 py-10 text-[20px] leading-[150%] 2xl:px-[60px] 2xl:py-[60px]">
              <p>
                Market resolution is the most underestimated problem. A market
                that resolves incorrectly, even once, destroys trust
                permanently. We design resolution logic, oracle fallbacks, and
                dispute mechanisms before the first market goes live.
              </p>
              <p>
                Liquidity is a cold-start problem. An empty market attracts no
                traders. We design liquidity seeding strategies and market maker
                incentives that make markets usable from day one.
              </p>
              <ul className="flex flex-col gap-3">
                {EDGE_CASES.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 2xl:gap-4"
                  >
                    <span
                      aria-hidden
                      className="bg-red block size-[8px] shrink-0 translate-y-[-2px]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="hidden lg:block" />
              <div
                className={cn(
                  'border-concrete px-5 py-10 text-right font-semibold uppercase leading-[120%] lg:border-l 2xl:px-[60px] 2xl:py-[60px]',
                  'ibm-plex-mono text-[20px] md:text-[28px] 2xl:text-[36px]',
                )}
              >
                <p>
                  WE&apos;VE THOUGHT THROUGH THESE FAILURE MODES. WE BUILD THE
                  GUARDS BEFORE THEY&apos;RE NEEDED
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PredictionMarkets;
