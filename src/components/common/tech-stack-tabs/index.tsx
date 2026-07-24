import { type KeyboardEvent, useRef, useState } from 'react';

import { CustomSection } from '~/components/common/custom-section';
import { Duck } from '~/components/svg';
import { cn, openCalendlyPopup, trackCalendlyClick } from '~/utils';

export interface TechChain {
  logo: string;
  name: string;
}

export interface TechStackTab {
  /** Stable id, also used to derive tab/panel aria ids. */
  id: string;
  label: string;
  /** Logo cards rendered when the tab is active. Takes precedence over `note`. */
  chains?: TechChain[];
  /** Plain text rendered when the tab is active and it has no `chains`. */
  note?: string;
}

export interface TechStackTabsProps {
  tabs: TechStackTab[];
  title?: string;
  /** Copy shown above the CTA. */
  footnote?: string;
  ctaLabel?: string;
}

// Literal class names so Tailwind keeps them at build time.
const TAB_COLUMNS: Record<number, string> = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
};

const CHAIN_COLUMNS: Record<number, string> = {
  1: 'md:grid-cols-1 lg:grid-cols-1',
  2: 'md:grid-cols-2 lg:grid-cols-2',
  3: 'md:grid-cols-3 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
  5: 'md:grid-cols-3 lg:grid-cols-5',
};

const DEFAULT_FOOTNOTE =
  'We provide the most suitable combination of these blockchain application development services for your project.';

function ChainGrid({ chains }: { chains: TechChain[] }) {
  return (
    <div className={cn('grid grid-cols-2', CHAIN_COLUMNS[chains.length])}>
      {chains.map((chain, i) => (
        <div
          key={chain.name}
          className={cn(
            'border-dark-gray flex flex-col items-center justify-center gap-5 p-5 lg:p-[20px]',
            i !== 0 && 'border-l',
          )}
        >
          <img
            src={chain.logo}
            alt={chain.name}
            width={80}
            height={80}
            loading="lazy"
            className="size-[80px] object-contain"
          />
          <span className="ibm-plex-mono text-center text-[20px] uppercase leading-[30px] text-black 2xl:text-[24px]">
            {chain.name}
          </span>
        </div>
      ))}
    </div>
  );
}

function TabNote({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center p-[30px]">
      <p className="ibm-plex-mono text-center text-[20px] uppercase text-black 2xl:text-[24px]">
        {text}
      </p>
    </div>
  );
}

export function TechStackTabs({
  tabs,
  title = '_Tech Stack',
  footnote = DEFAULT_FOOTNOTE,
  ctaLabel = 'Schedule a Consultation',
}: TechStackTabsProps) {
  const [activeId, setActiveId] = useState(() => tabs[0]?.id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  const focusTab = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActiveId(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent, index: number) => {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        focusTab(index + 1);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        focusTab(index - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusTab(0);
        break;
      case 'End':
        event.preventDefault();
        focusTab(tabs.length - 1);
        break;
      default:
        break;
    }
  };

  if (!active) return null;

  return (
    <CustomSection className="bg-gray text-black">
      <div className="border-dark-gray flex items-center border-y px-5 py-[30px] md:py-[45px] lg:px-[40px] 2xl:px-[60px]">
        <h2 className="ibm-plex-mono text-[24px] font-medium uppercase leading-[100%] md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
          {title}
        </h2>
      </div>

      <div className="px-5 lg:px-[40px] 2xl:px-[60px]">
        <div className="border-dark-gray border-x border-b">
          <div
            role="tablist"
            aria-label="Tech stack"
            className={cn('grid grid-cols-2', TAB_COLUMNS[tabs.length])}
          >
            {tabs.map((tab, i) => {
              const selected = tab.id === active.id;
              return (
                <button
                  key={tab.id}
                  ref={(node) => {
                    tabRefs.current[i] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`tech-tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`tech-panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(tab.id)}
                  onKeyDown={(event) => onKeyDown(event, i)}
                  className={cn(
                    'border-dark-gray ibm-plex-mono p-[20px] text-center text-[16px] uppercase leading-[100%] text-black transition-colors 2xl:p-[30px] 2xl:text-[20px]',
                    i !== 0 && 'border-l',
                    selected ? 'bg-pink' : 'bg-gray hover:bg-pink/50',
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`tech-panel-${active.id}`}
            aria-labelledby={`tech-tab-${active.id}`}
            className="border-dark-gray border-t"
          >
            {active.chains ? (
              <ChainGrid chains={active.chains} />
            ) : (
              <TabNote text={active.note ?? ''} />
            )}
          </div>
        </div>

        <div className="border-dark-gray relative flex flex-col gap-[40px] border-x border-b p-[20px] md:p-[40px]">
          <p className="text-[18px] leading-[1.4] text-black 2xl:text-[20px]">
            {footnote}
          </p>
          <button
            type="button"
            onClick={() => {
              trackCalendlyClick();
              openCalendlyPopup();
            }}
            className="bg-red ibm-plex-mono self-start px-[40px] py-[12px] text-sm uppercase text-black transition-transform hover:scale-[1.03] 2xl:px-[60px] 2xl:py-[15px] 2xl:text-xl"
          >
            {ctaLabel}
          </button>
          <Duck
            aria-hidden
            className="fill-red absolute bottom-[20px] right-[20px] md:bottom-[40px] md:right-[40px]"
            width={72}
            height={28}
          />
        </div>
      </div>
    </CustomSection>
  );
}

export default TechStackTabs;
