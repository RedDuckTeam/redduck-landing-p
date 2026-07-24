import { Link } from '@tanstack/react-router';

import { LandingMobileContent, LandingPcContent } from './landing-content';

import { cn } from '~/utils';

export function LandingHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        'bg-gray flex flex-row items-center justify-between bg-none',
        'h-[44px] overflow-auto px-[16px] sm:px-[24px] md:h-[70px] md:px-[60px] 2xl:h-[96px]',
        className,
      )}
    >
      <Link to="/">
        <img
          src="/svg/header/logo.svg"
          alt="RedDuck Logo"
          width={218}
          height={28}
          className="select-none max-2xl:w-[170px] max-md:w-[125px]"
        />
      </Link>

      <LandingPcContent />
      <LandingMobileContent />
    </header>
  );
}
