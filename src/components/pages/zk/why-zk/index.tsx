import { CornerBox, RedTriangle } from '../marks';

import { GridBar } from '~/components/common';

export function WhyZk() {
  return (
    <section className="bg-pink text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px] border-t">
        <GridBar position="top" variant="dark" columns={2} />

        <header className="border-dark-gray flex h-[100px] items-center border-b px-5 lg:px-[40px] 2xl:h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
            _WHY ZK MATTERS RIGHT NOW?
          </h2>
        </header>

        <div className="px-5 lg:px-[40px] 2xl:px-[60px]">
          <div className="border-dark-gray grid grid-cols-1 border-x lg:grid-cols-[441fr_879fr_480fr]">
            <div className="border-dark-gray relative border-b p-5 lg:border-b-0 lg:border-r 2xl:p-[40px]">
              <p className="text-[18px] leading-[140%] 2xl:text-[20px]">
                ZK is no longer an academic concept, it&apos;s production
                infrastructure
              </p>
              <RedTriangle className="top-[40px]" />
            </div>

            <div className="border-dark-gray border-b p-5 lg:border-b-0 lg:border-r 2xl:p-[40px]">
              <p className="text-[15px] leading-[150%] 2xl:text-[18px]">
                zkSync, StarkNet, Polygon zkEVM, and Scroll are live and
                handling real transaction volume ZK proofs are used in identity
                verification, private DeFi, compliance-preserving onboarding,
                and scalability layers the tooling has matured enough to ship
                production systems, but the engineering depth required is still
                rare
              </p>
            </div>

            <div className="flex items-center justify-center p-5 2xl:p-[40px]">
              <CornerBox
                cornerClassName="border-red"
                className="text-red flex min-h-[150px] w-full max-w-[440px] items-center px-6 py-8"
              >
                <p className="ibm-plex-mono text-[28px] font-medium uppercase leading-[120%] md:text-[34px] 2xl:text-[40px]">
                  we build with that depth
                </p>
              </CornerBox>
            </div>
          </div>
        </div>

        <GridBar position="bottom" variant="dark" columns={2} />
      </div>
    </section>
  );
}

export default WhyZk;
