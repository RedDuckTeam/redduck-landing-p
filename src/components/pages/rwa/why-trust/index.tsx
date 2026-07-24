import { Lock, Trophy, Star } from 'lucide-react';

import { TRUST_DATA } from './trust-data';

import { GridBar, PacmanScene } from '~/components/common';
import { DollarIcon } from '~/components/svg/icons/rwa';

const TRUST_ICONS = [DollarIcon, Lock, Star, Trophy];

function TrustList() {
  return (
    <div className="border-dark-gray border-x">
      {TRUST_DATA.map((item, index) => {
        const Icon = TRUST_ICONS[index];
        const isLast = index === TRUST_DATA.length - 1;
        return (
          <div
            key={index}
            className={`border-dark-gray flex items-center gap-5 px-5 py-5 2xl:h-[88px] 2xl:px-[40px] 2xl:py-[20px] ${isLast ? '' : 'border-b'}`}
          >
            {Icon && <Icon className="h-6 w-6 shrink-0" />}
            <span className="ibm-plex-mono text-sm font-medium uppercase md:text-base 2xl:text-lg">
              {item.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function WhyTrust() {
  return (
    <section className="bg-pink text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px]">
        <GridBar position="top" />

        <header className="border-dark-gray flex h-[100px] items-center border-b px-5 md:min-h-[100px] 2xl:min-h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
            _WHY FOUNDERS TRUST REDDUCK
          </h2>
        </header>

        <div className="flex flex-col">
          <div className="border-dark-gray mx-5 flex border-b 2xl:mx-[60px]">
            <div className="min-w-0 flex-1">
              <TrustList />
            </div>

            <PacmanScene className="border-dark-gray shrink-0 self-stretch border-r max-lg:hidden" />
          </div>
        </div>

        <GridBar position="none" />
      </div>
    </section>
  );
}

export default WhyTrust;
