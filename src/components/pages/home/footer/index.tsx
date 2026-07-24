import { Link } from '@tanstack/react-router';

import { CustomSection, Separator } from '~/components/common';
import { Duck } from '~/components/svg';
import {
  DouIcon,
  LinkedInIcon,
  MediumIcon,
  UpWorkIcon,
} from '~/components/svg/icons';
import { LINKS } from '~/constants';
import { cn } from '~/utils';

export function Footer() {
  return (
    <CustomSection
      as="footer"
      className="[&>div]:!border-concrete bg-black *:!pb-0"
    >
      <div className="grid grid-cols-1 grid-rows-[auto_auto] border-t lg:grid-cols-2 2xl:grid-cols-4">
        <div
          className={cn(
            'p-10 font-mono text-[20px] uppercase 2xl:text-[24px]',
            'border-b max-2xl:border-r',
          )}
        >
          <p>contacts</p>
        </div>

        <div className="row-span-2 border-x max-2xl:hidden"></div>

        <div
          className={cn(
            'flex flex-row items-center justify-center',
            'border-b fill-white 2xl:col-span-2',
            '*:-m-2 *:rounded-md *:p-2 hover:*:bg-white/10',
            'gap-[40px] max-lg:py-[35px] max-md:p-[30px] md:gap-[60px] 2xl:gap-[100px]',
          )}
        >
          <a
            href={LINKS.Medium}
            target="_blank"
            rel="noreferrer"
            aria-label="RedDuck on Medium"
          >
            <MediumIcon className="size-[35px]" />
          </a>
          <a
            href={LINKS.Dou}
            target="_blank"
            rel="noreferrer"
            aria-label="RedDuck on DOU"
          >
            <DouIcon />
          </a>
          <a
            href={LINKS.LinkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label="RedDuck on LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href={LINKS.Upwork}
            target="_blank"
            rel="noreferrer"
            aria-label="RedDuck on Upwork"
          >
            <UpWorkIcon />
          </a>
        </div>

        <address
          className={cn(
            'text-[16px] font-normal not-italic 2xl:text-[20px]',
            'max-2xl:border-r max-lg:border-b max-lg:border-r-0',
            'px-5 py-[40px] sm:py-[66px] lg:px-10',
          )}
        >
          <a href={`mailto:${LINKS.Email}`} className="hover:border-b">
            {LINKS.Email}
          </a>

          <div className="mt-5 flex flex-col gap-[28px] 2xl:gap-[32px]">
            <div className="flex flex-col gap-[4px]">
              <p className="">Cyprus Office:</p>
              <p className="font-medium">Redduck Limited</p>
              <a href="tel:+35796333210" className="w-fit">
                +357 96 333 210
              </a>
              <p className="text-white/80">
                2 Grigori Afxentiou, Akamia Center, office 15 Larnaca 6023
              </p>
            </div>

            <div className="flex flex-col gap-[4px]">
              <p className="">Ukraine Office:</p>
              <a href="tel:+380502147263" className="w-fit">
                +380 50 214 72 63
              </a>
              <p className="text-white/80">Saperne pole 12, Kyiv 01042</p>
            </div>
          </div>
        </address>

        <div className="flex items-end justify-end p-10 max-lg:h-[250px] max-sm:h-[180px] 2xl:col-span-2">
          <Duck className="-scale-x-100 fill-[#F22C1A]" />
        </div>
      </div>

      <Separator className="h-[180px] max-sm:border-x sm:h-[80px] lg:h-[120px]" />

      <div
        className={cn(
          'flex flex-col *:py-[20px] lg:flex-row',
          'text-center text-[16px] 2xl:text-[20px]',
          'max-lg:divide-y lg:divide-x',
        )}
      >
        <p className="flex-1">© Copyright. All rights reserved</p>
        <Link
          to="/privacy-policy"
          resetScroll
          className="flex-1 hover:bg-white/10"
        >
          Privacy Policy
        </Link>
        <button
          type="button"
          className="flex-1 py-[20px] hover:bg-white/10"
          onClick={() =>
            window.dispatchEvent(new CustomEvent('open-cookie-settings'))
          }
        >
          Cookie Settings
        </button>
        {/* <Link to="/" className="flex-1 hover:bg-white/10">
          Terms and Conditions
        </Link> */}
      </div>
    </CustomSection>
  );
}

export default Footer;
