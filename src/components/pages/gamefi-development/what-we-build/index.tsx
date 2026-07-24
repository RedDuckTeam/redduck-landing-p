import {
  BUILD_BOTTOM,
  BUILD_LEAD,
  BUILD_LEFT,
  BUILD_RIGHT,
  type BuildItem,
} from './data';

import { GridBar } from '~/components/common';
import { Duck } from '~/components/svg';
import { cn } from '~/utils';

function CornerNumber({ number }: { number: string }) {
  const leg = 'border-red absolute size-[18px]';
  return (
    <div className="relative size-[64px] shrink-0 2xl:size-[80px]">
      <span className={cn(leg, 'left-0 top-0 border-l border-t')} />
      <span className={cn(leg, 'right-0 top-0 border-r border-t')} />
      <span className={cn(leg, 'bottom-0 left-0 border-b border-l')} />
      <span className={cn(leg, 'bottom-0 right-0 border-b border-r')} />
      <span className="text-red ibm-plex-mono absolute inset-0 flex items-center justify-center text-[34px] leading-none 2xl:text-[45px]">
        {number}
      </span>
    </div>
  );
}

function BuildCard({
  item,
  horizontal,
  className,
}: {
  item: BuildItem;
  horizontal?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex p-5 md:p-8 2xl:p-[40px]',
        horizontal
          ? 'flex-col gap-6 md:flex-row md:items-center md:gap-10'
          : 'flex-col gap-6',
        className,
      )}
    >
      <CornerNumber number={item.number} />
      <div className="flex flex-col gap-4">
        <h3 className="ibm-plex-mono text-[18px] font-medium uppercase leading-[130%] 2xl:text-[24px]">
          {item.title}
        </h3>
        <p className="text-[16px] leading-[140%] text-[#e0deda] 2xl:text-[18px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

/**
 * Central emblem plus the PCB-style connector traces, matching the Figma design
 * 1:1. Coordinates are in the middle block's own space (1800×684) so the traces
 * line up with the surrounding cards; the SVG stretches to the block. Faint grey
 * lines (#9B9B9B @ 24%) with red dots/stubs (#ED4A38); the emblem frame is
 * concrete grey with a red duck. Desktop only — it lives in the center gutter.
 */
function CircuitDecor() {
  return (
    <>
      <svg
        aria-hidden
        viewBox="0 0 1800 684"
        preserveAspectRatio="none"
        fill="none"
        className="pointer-events-none absolute inset-0 hidden size-full lg:block"
      >
        <g stroke="#9B9B9B" strokeOpacity="0.24">
          {/* up to the _01 divider */}
          <line x1="899" y1="5" x2="899" y2="194" />
          {/* brackets to 02 / 04 */}
          <path d="M739 155H863V221" />
          <path d="M1061 155H937V221" />
          {/* brackets to 03 / 05 (mirror of the top — arms point up) */}
          <path d="M739 529H863V463" />
          <path d="M1061 529H937V463" />
          {/* staple down to 06 / 07 */}
          <path d="M899 491V597" />
          <path d="M739 597H1062" />
          <line x1="739" y1="597" x2="739" y2="647" />
          <line x1="1062" y1="597" x2="1062" y2="647" />
        </g>

        <g stroke="#ED4A38">
          <line x1="899" y1="6" x2="899" y2="42" />
          <line x1="899" y1="108" x2="899" y2="193" />
          <line x1="739" y1="155" x2="775" y2="155" />
          <line x1="863" y1="185" x2="863" y2="221" />
          <line x1="1061" y1="155" x2="1025" y2="155" />
          <line x1="937" y1="185" x2="937" y2="221" />
          <line x1="739" y1="529" x2="775" y2="529" />
          <line x1="863" y1="499" x2="863" y2="463" />
          <line x1="1061" y1="529" x2="1025" y2="529" />
          <line x1="937" y1="499" x2="937" y2="463" />
          <line x1="899" y1="492" x2="899" y2="581" />
          <line x1="739" y1="643" x2="739" y2="679" />
          <line x1="1062" y1="643" x2="1062" y2="679" />
        </g>

        <g fill="#ED4A38">
          <circle cx="899" cy="6" r="6" />
          <circle cx="899" cy="192" r="6" />
          <circle cx="739" cy="155" r="6" />
          <circle cx="863" cy="221" r="6" />
          <circle cx="1061" cy="155" r="6" />
          <circle cx="937" cy="221" r="6" />
          <circle cx="739" cy="529" r="6" />
          <circle cx="863" cy="463" r="6" />
          <circle cx="1061" cy="529" r="6" />
          <circle cx="937" cy="463" r="6" />
          <circle cx="899" cy="492" r="6" />
          <circle cx="739" cy="678" r="6" />
          <circle cx="1062" cy="678" r="6" />
        </g>
      </svg>

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden size-[120px] -translate-x-1/2 -translate-y-1/2 bg-black lg:block 2xl:size-[160px]"
      >
        <div className="border-concrete relative flex size-full items-center justify-center border">
          <span className="border-concrete absolute left-4 top-4 size-[18px] border-l border-t" />
          <span className="border-concrete absolute right-4 top-4 size-[18px] border-r border-t" />
          <span className="border-concrete absolute bottom-4 left-4 size-[18px] border-b border-l" />
          <span className="border-concrete absolute bottom-4 right-4 size-[18px] border-b border-r" />
          <Duck className="fill-red w-[100px] 2xl:w-[132px]" />
        </div>
      </div>
    </>
  );
}

export function WhatWeBuild() {
  return (
    <section className="bg-black text-white">
      <div className="border-concrete 5xl:border-x mx-auto w-full max-w-[1920px]">
        {/* grid bar above the header — left/right full-width dividers plus a
            short center divider, matching the Figma "grid" frame */}
        <GridBar position="top" variant="concrete" />

        <header className="border-concrete flex h-[100px] items-center border-b px-5 lg:px-[40px] 2xl:h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
            _WHAT WE BUILD
          </h2>
        </header>

        <div className="px-5 lg:px-[40px] 2xl:px-[60px]">
          <div className="border-concrete border-x">
            {/* gap between the header and the content — the side borders
                continue down each edge so the block reads as one frame */}
            <div className="border-concrete h-[40px] border-b" />

            <BuildCard item={BUILD_LEAD} horizontal />

            <div className="border-concrete relative grid grid-cols-1 border-b lg:grid-cols-[1fr_18.6%_1fr]">
              {/* border-t on the columns (not the gutter) leaves the divider
                  broken across the center, where the top trace dot sits */}
              <div className="border-concrete flex flex-col border-t">
                <BuildCard
                  item={BUILD_LEFT[0]}
                  className="border-concrete flex-1 border-b"
                />
                <BuildCard item={BUILD_LEFT[1]} className="flex-1" />
              </div>

              {/* Center gutter that holds the emblem + traces on desktop */}
              <div className="hidden lg:block" aria-hidden />

              <div className="border-concrete flex flex-col border-t">
                <BuildCard
                  item={BUILD_RIGHT[0]}
                  className="border-concrete flex-1 border-b"
                />
                <BuildCard item={BUILD_RIGHT[1]} className="flex-1" />
              </div>

              <CircuitDecor />
            </div>

            <div className="border-concrete grid grid-cols-1 border-b lg:grid-cols-2">
              <BuildCard
                item={BUILD_BOTTOM[0]}
                className="border-concrete border-b lg:border-b-0 lg:border-r"
              />
              <BuildCard item={BUILD_BOTTOM[1]} />
            </div>

            {/* matching gap below the content, side borders continuing */}
            <div className="h-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeBuild;
