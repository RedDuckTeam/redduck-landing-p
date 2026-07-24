import { GridBar } from '~/components/common';
import { QuoteIcon } from '~/components/svg/icons';

export function MarketQuote() {
  return (
    <section className="bg-pink">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px] border-t">
        <div className="border-dark-gray mx-5 flex items-center gap-6 border-l border-r px-5 py-10 md:gap-10 md:px-10 md:py-[60px] 2xl:mx-[60px] 2xl:gap-[60px] 2xl:px-[60px] 2xl:py-[80px]">
          <QuoteIcon className="size-10 shrink-0 text-black md:size-14 2xl:size-[80px]" />

          <p className="ibm-plex-mono flex-1 text-center text-[16px] leading-[150%] text-black md:text-[20px] 2xl:text-[24px]">
            Cboe, Robinhood, Binance all entering the space.
            <br />
            This is not a trend, it&apos;s a new layer of global financial
            infrastructure.
          </p>

          <QuoteIcon className="size-10 shrink-0 rotate-180 text-black md:size-14 2xl:size-[80px]" />
        </div>

        <GridBar position="bottom" />
      </div>
    </section>
  );
}

export default MarketQuote;
