import { CustomSection, SectionHeader } from '~/components/common';
import { Arrow } from '~/components/svg';
import { buttonVariants } from '~/components/ui';
import { cn } from '~/utils';

const ACADEMY_LINK = 'https://academy.redduck.io';

export function Academy() {
  return (
    <CustomSection id="blockchainAcademy" className="flex flex-col bg-black">
      <SectionHeader className="border-t">
        _Our Blockchain Academy
      </SectionHeader>

      <div className="grid h-min flex-1 grid-rows-[min-content_min-content] lg:grid-cols-[calc(50%-1px)_50%] lg:divide-x">
        <div className="4xl:p-20 flex items-center justify-center border-b p-5 md:p-10 lg:row-span-2">
          <div className="relative flex size-full min-h-[300px] overflow-hidden sm:min-h-[400px] md:min-h-[550px]">
            <div className="absolute left-0 top-0 z-10 h-[60px] w-1/3 bg-black" />

            <img
              loading="lazy"
              src="/images/landing/academy.webp"
              alt="Mark and Vitalik Buterin discussing blockchain"
              className="absolute top-1/2 h-full w-full -translate-y-1/2 object-cover"
            />

            <div className="absolute bottom-0 right-0 h-[50px] w-1/4 bg-black" />
          </div>
        </div>

        <div
          className={cn(
            'flex flex-col justify-between',
            '4xl:px-[40px] 4xl:py-[60px] space-y-10 p-[20px]',
            'border-b',
          )}
        >
          <p className="text-base leading-tight 2xl:text-xl">
            <span className="block h-[10px] w-[10px] bg-white" />
            <br />
            At RedDuck, we run internal Blockchain and DeFi academy programs
            that are frequently updated to ensure our team stays ahead of Web3
            industry best practices.
            <br />
            <br />
            This academy also serves as the career foundation for every newcomer
            to our team. We guarantee that all developers are well-versed in
            top-tier development standards before they are onboarded to a
            project.
          </p>
        </div>

        <div className="4xl:px-[40px] 4xl:py-[30px] flex items-center justify-center gap-5 p-[20px]">
          <a
            href={ACADEMY_LINK}
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-full w-full items-center justify-center gap-5 border p-[20px]"
          >
            <p className="text-[14px] uppercase leading-[20px] sm:text-[20px] sm:leading-[30px] 2xl:text-[24px]">
              <span className="text-red underline">ACADEMY.REDDUCK.IO</span>
            </p>
            <span
              className={cn(
                buttonVariants({ variant: 'link', size: 'link' }),
                'border-white bg-black hover:rotate-45',
                'max-sm:hidden',
              )}
            >
              <Arrow fill="white" />
            </span>
          </a>
        </div>
      </div>
    </CustomSection>
  );
}

export default Academy;
