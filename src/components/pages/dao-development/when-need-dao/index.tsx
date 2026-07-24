import { GridBar } from '~/components/common';
import { cn } from '~/utils';

export function WhenNeedDao() {
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
                  <span className="text-red">WHEN DO YOU ACTUALLY</span>
                  <br />
                  NEED A DAO
                </h2>
              </div>
              <div className="hidden lg:block" />
            </div>

            <div className="border-concrete text-light-gray flex w-full flex-col gap-6 border-b px-5 py-10 text-[20px] leading-[150%] 2xl:px-[60px] 2xl:py-[60px]">
              <p>
                A DAO makes sense when you have something worth governing — a
                treasury, a protocol, a community with real stake in decisions.
              </p>
              <p>
                It <span className="text-red">doesn&apos;t</span> make sense as
                a marketing move or a way to appear decentralized while keeping
                control centralized.
              </p>
              <p>
                We&apos;ll tell you in the first call if your project needs a
                DAO or something simpler. If it doesn&apos;t, we&apos;ll
                recommend the right architecture instead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhenNeedDao;
