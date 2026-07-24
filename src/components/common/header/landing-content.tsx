import { Link, useMatch, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import type { MouseEvent } from 'react';
import { useState } from 'react';

import { LinkItem } from './link-item';

import { Squares } from '../squares';

import { TelegramIcon } from '~/components/svg/icons';
import {
  buttonVariants,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui';
import {
  ANALYTICS_EVENTS,
  LandingHeaderLinks,
  LINKS,
  Route,
} from '~/constants';
import { useBreakpoint, useEnableScroll } from '~/hooks';
import { cn, trackEvent } from '~/utils';

const servicesNavItem = LandingHeaderLinks.find(
  (item) => item.name === 'Services',
);

function useContactUsClick() {
  const isHome = useMatch({ from: '/', shouldThrow: false });

  return (e: MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      document
        .getElementById('getInTouch')
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };
}

export function LandingPcContent() {
  const handleContactClick = useContactUsClick();

  return (
    <div className="flex h-full flex-row items-center gap-[20px] font-mono max-2xl:hidden">
      {servicesNavItem && (
        <LinkItem
          headerItem={servicesNavItem}
          className="hover:bg-[#e0cdc6dd]"
        />
      )}

      <a
        href={Route.AboutUs.Memorandum}
        target="_blank"
        rel="noreferrer"
        className={cn(
          'relative flex h-full items-center overflow-hidden px-[30px] text-xl uppercase text-black transition-colors duration-200 hover:bg-[#e0cdc6dd]',
          '[&>.clue]:!translate-y-[125%] [&>.clue]:hover:!translate-y-[80%]',
        )}
      >
        Memo
        <span
          className={cn(
            'clue block transition-all duration-100',
            '!bg-red absolute size-[20px] rotate-45',
            'bottom-0 left-1/2 -translate-x-1/2',
          )}
        />
      </a>

      <Link
        to="/"
        hash="getInTouch"
        onClick={handleContactClick}
        className={cn(
          buttonVariants({}),
          'h-[60px] w-[260px] text-[24px] font-normal',
        )}
      >
        Contact Us
      </Link>

      <a
        href={LINKS.Telegram}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on Telegram"
        onClick={() => trackEvent(ANALYTICS_EVENTS.TelegramClick)}
        className="flex h-full items-center px-[30px] text-xl uppercase text-black transition-colors duration-200 hover:bg-[#e0cdc6dd]"
      >
        <TelegramIcon className="size-6" />
      </a>
    </div>
  );
}

const mobileNavLinkBase =
  'flex h-[66px] items-center border-b px-[30px] text-xl uppercase text-black transition-colors duration-200 hover:bg-[#e0cdc6dd]';
const mobileNavLinkActive = 'bg-[#e0cdc6dd] font-medium';

function getMobileNavLinkClassName(pathname: string, href: string) {
  return cn(
    mobileNavLinkBase,
    pathname === href ? mobileNavLinkActive : undefined,
  );
}

export function LandingMobileContent() {
  const [open, setOpen] = useState(false);
  const handleContactClick = useContactUsClick();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const { disableScroll, enableScroll } = useEnableScroll();
  const isMd = useBreakpoint('md');
  const isSm = useBreakpoint('sm');
  let sideOffset = 23;

  if (!isMd) {
    sideOffset = isSm ? 10 : 4;
  }

  const handleLinkClick = () => {
    enableScroll();
    setOpen(false);
  };

  const handleTelegramClick = () => {
    handleLinkClick();
    trackEvent(ANALYTICS_EVENTS.TelegramClick);
  };

  return (
    <Popover
      open={open}
      onOpenChange={(val) => {
        if (val) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          disableScroll();
        } else {
          enableScroll();
        }

        setOpen(val);
      }}
    >
      <PopoverTrigger
        asChild
        className="cursor-pointer text-black 2xl:hidden"
        color="black"
      >
        <button aria-label={open ? 'Close menu' : 'Open menu'} type="button">
          {open ? <X /> : <Menu />}
        </button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={sideOffset}
        className={cn(
          'h-[calc(100dvh-42px)] w-screen md:h-[calc(100dvh-68px)]',
          'flex !border-0 !border-t p-0 max-sm:translate-y-[6px] 2xl:hidden',
          'relative overflow-hidden',
        )}
      >
        <div
          className={cn(
            'flex flex-1 flex-col overflow-y-auto',
            'bg-[right_bottom] bg-no-repeat max-sm:bg-contain sm:bg-right-bottom',
          )}
        >
          <Link
            to={Route.Services.DEFI}
            onClick={handleLinkClick}
            className={getMobileNavLinkClassName(pathname, Route.Services.DEFI)}
          >
            DeFi Development
          </Link>

          <Link
            to={Route.Services.RWA}
            onClick={handleLinkClick}
            className={getMobileNavLinkClassName(pathname, Route.Services.RWA)}
          >
            RWA Tokenization
          </Link>

          <Link
            to={Route.Services.WALLET}
            onClick={handleLinkClick}
            className={getMobileNavLinkClassName(
              pathname,
              Route.Services.WALLET,
            )}
          >
            Wallet Development
          </Link>

          <Link
            to={Route.Services.SMART_CONTRACTS}
            onClick={handleLinkClick}
            className={getMobileNavLinkClassName(
              pathname,
              Route.Services.SMART_CONTRACTS,
            )}
          >
            Smart Contract Development
          </Link>

          <Link
            to={Route.Services.DEFI_SECURITY}
            onClick={handleLinkClick}
            className={getMobileNavLinkClassName(
              pathname,
              Route.Services.DEFI_SECURITY,
            )}
          >
            DeFi Security & Audit Readiness
          </Link>

          <Link
            to={Route.Services.PREDICTION_MARKET}
            onClick={handleLinkClick}
            className={getMobileNavLinkClassName(
              pathname,
              Route.Services.PREDICTION_MARKET,
            )}
          >
            Prediction Market Development
          </Link>

          <Link
            to={Route.Services.DAO}
            onClick={handleLinkClick}
            className={getMobileNavLinkClassName(pathname, Route.Services.DAO)}
          >
            DAO Development
          </Link>

          <Link
            to={Route.Services.LAUNCHPAD}
            onClick={handleLinkClick}
            className={getMobileNavLinkClassName(
              pathname,
              Route.Services.LAUNCHPAD,
            )}
          >
            Launchpad & Token Launch Infrastructure
          </Link>

          <Link
            to={Route.Services.ZK}
            onClick={handleLinkClick}
            className={getMobileNavLinkClassName(pathname, Route.Services.ZK)}
          >
            ZK Development
          </Link>

          <Link
            to={Route.Services.GAMEFI}
            onClick={handleLinkClick}
            className={getMobileNavLinkClassName(
              pathname,
              Route.Services.GAMEFI,
            )}
          >
            GameFi &amp; GambleFi Development
          </Link>

          <a
            href={Route.AboutUs.Memorandum}
            target="_blank"
            rel="noreferrer"
            onClick={handleLinkClick}
            className="flex h-[66px] items-center border-b px-[30px] text-xl uppercase text-black transition-colors duration-200 hover:bg-[#e0cdc6dd]"
          >
            Memo
          </a>

          <a
            href={LINKS.Telegram}
            target="_blank"
            rel="noreferrer"
            onClick={handleTelegramClick}
            className="flex h-[66px] items-center gap-3 border-b px-[30px] text-xl uppercase text-black transition-colors duration-200 hover:bg-[#e0cdc6dd]"
          >
            <TelegramIcon className="size-5" />
            Telegram
          </a>

          <div className="p-5">
            <Link
              to="/"
              hash="getInTouch"
              onClick={(e) => {
                handleLinkClick();
                handleContactClick(e);
              }}
              className={cn(
                buttonVariants({}),
                'w-full text-[20px] font-normal uppercase',
              )}
            >
              Contact Us
            </Link>
          </div>

          <div className="min-h-[100px] flex-1">
            <Squares
              moveScale={0.5}
              scaleX={0.12}
              scaleY={0.12}
              speed={0.005}
              squareSize={isSm ? 35 : 20}
              approximateSquareSize
              fadingColour="#e0deda"
              fadeY={4}
              className="size-full"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
