import { CornerBox } from '../marks';

import { GridBar } from '~/components/common';
import { Duck } from '~/components/svg';
import { cn } from '~/utils';

function WhoStep({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'border-concrete flex items-center p-5 2xl:p-[40px]',
        className,
      )}
    >
      <p className="text-[16px] leading-[140%] 2xl:text-[18px]">{children}</p>
    </div>
  );
}

export function WhoNeeds() {
  return (
    <section className="bg-black text-white">
      <div className="border-concrete 5xl:border-x mx-auto w-full max-w-[1920px] border-t">
        <GridBar position="top" variant="concrete" columns={1} />

        <div className="border-concrete grid grid-cols-1 border-b lg:grid-cols-[1083fr_837fr]">
          <header className="border-concrete flex min-h-[120px] items-center border-b px-5 lg:border-b-0 lg:border-r lg:px-[40px] 2xl:min-h-[144px] 2xl:px-[60px]">
            <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
              _WHO NEEDS ZK DEVELOPMENT
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-[144px_1fr]">
            <div className="border-concrete hidden items-center justify-center border-r sm:flex">
              <CornerBox className="flex size-[104px] items-center justify-center">
                <Duck className="fill-[#F22C1A]" width={56} height={22} />
              </CornerBox>
            </div>
            <div className="flex items-center px-5 py-5 2xl:px-[40px]">
              <p className="ibm-plex-mono whitespace-pre-line text-[14px] uppercase leading-[150%] text-[#E0DEDA] 2xl:text-[18px]">
                {`ZK isn't the right answer for every problem, but when it is, nothing else solves it.\n\nyou need ZK if any of these apply:`}
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 lg:px-[40px] 2xl:px-[60px]">
          <div className="border-concrete grid grid-cols-1 border-x lg:grid-cols-[513fr_600fr_687fr]">
            <div className="border-concrete flex flex-col border-b lg:border-b-0 lg:border-r">
              <WhoStep className="border-b lg:flex-[252]">
                Users need to prove something without revealing the underlying
                data, identity, balance, eligibility, history.
              </WhoStep>
              <WhoStep className="border-b lg:flex-[215]">
                You&apos;re building a regulated product and need compliance
                verification that doesn&apos;t expose personal data on-chain.
              </WhoStep>
              <WhoStep className="lg:flex-[215]">
                You need to scale transaction throughput without sacrificing
                security or decentralization.
              </WhoStep>
            </div>

            <div className="border-concrete hidden items-center justify-center border-b p-8 lg:flex lg:border-b-0 lg:border-r">
              <img
                src="/images/zk/who-needs-duck.webp"
                alt="ZK pixel character"
                loading="lazy"
                className="max-h-[420px] w-auto object-contain"
              />
            </div>

            <div className="flex flex-col">
              <WhoStep className="border-b lg:flex-[252]">
                You want private voting or governance where participation
                doesn&apos;t reveal how someone voted.
              </WhoStep>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex-[430]">
                <WhoStep className="items-start border-b sm:border-b-0 sm:border-r">
                  You&apos;re building in a jurisdiction where on-chain data
                  visibility creates legal or business risk.
                </WhoStep>
                <CornerBox
                  inset="inset-4"
                  cornerClassName="border-white"
                  className="bg-red flex items-start p-5 text-white 2xl:p-[40px]"
                >
                  <p className="ibm-plex-mono text-[14px] uppercase leading-[150%] 2xl:text-[18px]">
                    if your problem doesn&apos;t require any of these,
                    we&apos;ll tell you, and recommend a simpler architecture
                    instead.
                  </p>
                </CornerBox>
              </div>
            </div>
          </div>
        </div>

        <GridBar position="bottom" variant="concrete" columns={1} />
      </div>
    </section>
  );
}

export default WhoNeeds;
