import { GridBar } from '~/components/common';
import { cn } from '~/utils';

function MetaRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-[180px_1fr] 2xl:grid-cols-[220px_1fr]">
      <span
        className={cn(
          'ibm-plex-mono text-red font-semibold uppercase leading-[120%]',
          'text-[20px] md:text-[22px] 2xl:text-[28px]',
        )}
      >
        {label}
      </span>
      <p className="text-light-gray text-[16px] leading-[150%] md:text-[18px] 2xl:text-[20px]">
        {children}
      </p>
    </div>
  );
}

export function Whitelabel() {
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
            <div className="border-concrete grid grid-cols-1 border-b lg:grid-cols-3">
              <div className="border-concrete flex items-center border-b px-5 py-10 lg:col-span-2 lg:border-b-0 lg:border-r 2xl:px-[60px] 2xl:py-[80px]">
                <h2
                  className={cn(
                    'ibm-plex-mono font-semibold uppercase leading-[110%]',
                    'text-[28px] md:text-[40px] 2xl:text-[58px]',
                  )}
                >
                  <span className="text-red">WHITELABEL & READY-MADE,</span>
                  <br />
                  WHAT THIS MEANS IN PRACTICE
                </h2>
              </div>
              <div className="hidden lg:block" />
            </div>

            <div className="border-concrete text-light-gray flex w-full flex-col gap-6 border-b px-5 py-10 text-[20px] leading-[150%] 2xl:px-[60px] 2xl:py-[60px]">
              <p>
                If you want to launch a prediction market platform fast, you
                don&apos;t need to build the core infrastructure from scratch.
              </p>
              <p>
                <span className="text-red">Our whitelabel solution</span> gives
                you a production-ready platform under your brand — configurable
                market types and resolution logic, your token, your fee
                structure, your verticals. Full source code ownership after
                delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="hidden lg:block" />
              <div className="border-concrete flex flex-col gap-8 px-5 py-10 lg:col-span-2 lg:border-l 2xl:gap-10 2xl:px-[60px] 2xl:py-[60px]">
                <MetaRow label="Timeline:">
                  Significantly faster than custom, scope defined on the first
                  call.
                </MetaRow>
                <MetaRow label="Good for:">
                  Operators entering the space, crypto projects adding a
                  prediction layer, media and sports companies building
                  engagement products.
                </MetaRow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whitelabel;
