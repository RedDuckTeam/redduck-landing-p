import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from 'react';

import { useSwipe } from '~/hooks';
import { cn } from '~/utils';

interface SucceedStep {
  label: string;
  text: string;
}

const STEPS: SucceedStep[] = [
  {
    label: 'Launch',
    text: 'The token launches, players farm rewards, the economy inflates, early holders dump, the game dies in 90 days.',
  },
  {
    label: 'Default outcome',
    text: 'This is the default outcome when tokenomics and game design are treated as separate problems.',
  },
  {
    label: 'How we fix it',
    text: 'We design them together — token sinks, reward loops, and staking mechanics built around actual gameplay, not just APY numbers that look good on a landing page.',
  },
  {
    label: 'Provably fair',
    text: "Provably fair randomness matters in GambleFi — if players can't verify the outcome is fair, they won't play long-term. We integrate Chainlink VRF for on-chain verifiable randomness, not a centralized RNG behind an API.",
  },
];

const ADVANCE_MS = 5000;

// PCB-style connector ornaments around the trophy, taken 1:1 from the Figma
// arrow vectors: faint grey lines (#9B9B9B @ 24%) with red dots/stubs (#ED4A38).
const CORNER_R = (
  <>
    <path
      opacity="0.24"
      d="M130 6H130.5V5.5H130V6ZM6 6V6.5H130V6V5.5H6V6ZM130 6H129.5V72H130H130.5V6H130Z"
      fill="#9B9B9B"
    />
    <circle cx="6" cy="6" r="6" fill="#ED4A38" />
    <circle cx="130" cy="72" r="6" fill="#ED4A38" />
    <path d="M6 6H42" stroke="#ED4A38" />
    <path d="M130 72V36" stroke="#ED4A38" />
  </>
);

const CORNER_L = (
  <>
    <path
      opacity="0.24"
      d="M133.819 6H134.319V5.5H133.819V6ZM6.17188 6V6.5H133.819V6V5.5H6.17188V6ZM133.819 6H133.319V72H133.819H134.319V6H133.819Z"
      fill="#9B9B9B"
    />
    <ellipse cx="6.17647" cy="6" rx="6.17647" ry="6" fill="#ED4A38" />
    <ellipse cx="133.817" cy="72" rx="6.17647" ry="6" fill="#ED4A38" />
    <path d="M6.17188 6H43.2307" stroke="#ED4A38" />
    <path d="M133.828 72V36" stroke="#ED4A38" />
  </>
);

const STAPLE = (
  <>
    <path
      opacity="0.24"
      d="M213.171 6.42188H212.671V142.544H213.171H213.671V6.42188H213.171Z"
      fill="#9B9B9B"
    />
    <path
      opacity="0.24"
      d="M7.70312 142.539V142.039H7.20312V142.539H7.70312ZM422.49 142.539H422.99V142.039H422.49V142.539ZM7.70312 142.539V143.039H422.49V142.539V142.039H7.70312V142.539ZM422.49 142.539H421.99V206.748H422.49H422.99V142.539H422.49ZM7.70312 206.748H8.20312V142.539H7.70312H7.20312V206.748H7.70312Z"
      fill="#9B9B9B"
    />
    <circle cx="213.174" cy="7.70502" r="7.70502" fill="#ED4A38" />
    <circle cx="422.49" cy="246.557" r="7.70502" fill="#ED4A38" />
    <path d="M422.492 247.844V201.614" stroke="#ED4A38" />
    <circle cx="7.70502" cy="246.556" r="7.70502" fill="#ED4A38" />
    <path d="M7.70312 247.844L7.70313 201.614" stroke="#ED4A38" />
    <path d="M213.172 122L213.172 7.70889" stroke="#ED4A38" />
  </>
);

function TrophyOrnament() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 900 607"
      preserveAspectRatio="none"
      fill="none"
      className="pointer-events-none absolute inset-0 size-full"
    >
      {/* upper-right */}
      <svg
        x="735.5"
        y="27.5"
        width="136"
        height="78"
        viewBox="0 0 136 78"
        preserveAspectRatio="none"
        overflow="visible"
      >
        {CORNER_R}
      </svg>
      {/* upper-left (flip X) */}
      <svg
        x="27.5"
        y="27.5"
        width="139.994"
        height="78"
        viewBox="0 0 139.994 78"
        preserveAspectRatio="none"
        overflow="visible"
      >
        <g transform="translate(139.994 0) scale(-1 1)">{CORNER_L}</g>
      </svg>
      {/* lower-right (flip Y) */}
      <svg
        x="735.5"
        y="500.5"
        width="136"
        height="78"
        viewBox="0 0 136 78"
        preserveAspectRatio="none"
        overflow="visible"
      >
        <g transform="translate(0 78) scale(1 -1)">{CORNER_R}</g>
      </svg>
      {/* lower-left (flip X and Y) */}
      <svg
        x="27.5"
        y="500.5"
        width="139.994"
        height="78"
        viewBox="0 0 139.994 78"
        preserveAspectRatio="none"
        overflow="visible"
      >
        <g transform="translate(139.994 78) scale(-1 -1)">{CORNER_L}</g>
      </svg>
      {/* central staple */}
      <svg
        x="234.5"
        y="175.5"
        width="430.195"
        height="254.265"
        viewBox="0 0 430.195 254.262"
        preserveAspectRatio="none"
        overflow="visible"
      >
        {STAPLE}
      </svg>
    </svg>
  );
}

function barState(index: number, active: number): 'past' | 'active' | 'future' {
  if (index < active) return 'past';
  if (index === active) return 'active';
  return 'future';
}

function wrapStepIndex(index: number) {
  return (index + STEPS.length) % STEPS.length;
}

export function HowProjectsSucceed() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const go = useCallback((delta: number) => {
    setActive((current) => wrapStepIndex(current + delta));
  }, []);

  const selectStep = useCallback((index: number) => {
    setPaused(true);
    setActive(wrapStepIndex(index));
  }, []);

  // Manual navigation stops the auto-advance, matching the launchpad slider.
  const navigate = useCallback(
    (delta: number) => {
      setPaused(true);
      go(delta);
    },
    [go],
  );

  // Auto-advance, re-armed on every active change so the countdown restarts
  // after a jump. Off once paused or when the user prefers reduced motion.
  useEffect(() => {
    if (paused || reduce) return;
    const id = setTimeout(() => go(1), ADVANCE_MS);
    return () => clearTimeout(id);
  }, [active, paused, reduce, go]);

  const swipedRef = useRef(false);

  const swipe = useSwipe({
    onSwipeLeft: () => {
      swipedRef.current = true;
      navigate(1);
    },
    onSwipeRight: () => {
      swipedRef.current = true;
      navigate(-1);
    },
  });

  // Click the left/right half of the slide to move, same as the launchpad
  // slider. Ignores the synthetic click fired right after a swipe.
  const handleSlideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (swipedRef.current) {
      swipedRef.current = false;
      return;
    }

    const { left, width } = e.currentTarget.getBoundingClientRect();
    navigate(e.clientX < left + width / 2 ? -1 : 1);
  };

  const handleSlideKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') navigate(-1);
    else if (e.key === 'ArrowRight') navigate(1);
  };

  return (
    <section className="bg-pink text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px] border-t">
        <div className="border-dark-gray grid grid-cols-1 border-b lg:grid-cols-2">
          <header className="border-dark-gray flex min-h-[120px] items-center border-b px-5 lg:border-b-0 lg:border-r lg:px-[40px] 2xl:min-h-[150px] 2xl:px-[60px]">
            <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
              _How GameFi projects could succeed
            </h2>
          </header>
          <div className="flex items-center px-5 py-6 lg:px-[40px] 2xl:px-[60px]">
            <span className="block size-[10px] bg-black" />
          </div>
        </div>

        <div className="px-5 lg:px-[40px] 2xl:px-[60px]">
          <div className="border-dark-gray grid grid-cols-1 border-x lg:grid-cols-2">
            <div
              {...swipe}
              role="button"
              tabIndex={0}
              aria-label="How GameFi projects could succeed. Use the left and right arrow keys, click a side, or swipe to move between slides."
              onClick={handleSlideClick}
              onKeyDown={handleSlideKeyDown}
              className="border-dark-gray flex cursor-pointer touch-pan-y flex-col border-b outline-none lg:border-b-0 lg:border-r"
            >
              <div className="border-dark-gray flex flex-col gap-[40px] border-b p-5 lg:p-[40px] 2xl:p-[60px]">
                <div
                  className="flex gap-[10px]"
                  role="tablist"
                  aria-label="GameFi lifecycle"
                >
                  {STEPS.map((item, index) => {
                    const state = barState(index, active);

                    return (
                      <button
                        key={item.label}
                        type="button"
                        role="tab"
                        aria-selected={index === active}
                        aria-label={item.label}
                        onClick={(e) => {
                          e.stopPropagation();
                          selectStep(index);
                        }}
                        className="bg-dark-gray relative h-[8px] flex-1 overflow-hidden"
                      >
                        {state === 'past' && (
                          <span className="bg-red block size-full" />
                        )}
                        {state === 'active' &&
                          (paused || reduce ? (
                            <span className="bg-red block size-full" />
                          ) : (
                            // key restarts the fill animation on each step;
                            // duration is kept in sync with ADVANCE_MS
                            <span
                              key={active}
                              className="animate-succeedFill bg-red block h-full"
                            />
                          ))}
                      </button>
                    );
                  })}
                </div>
                <div className="ibm-plex-mono flex items-start justify-between gap-4 text-[18px] uppercase leading-[30px] md:text-[24px]">
                  <span className="grid">
                    {STEPS.map((item, index) => (
                      <span
                        key={item.label}
                        aria-hidden={index !== active}
                        className={cn(
                          'col-start-1 row-start-1 transition-opacity duration-500',
                          index === active ? 'opacity-100' : 'opacity-0',
                        )}
                      >
                        {item.label}
                      </span>
                    ))}
                  </span>
                  <span className="shrink-0">
                    {active + 1}/{STEPS.length}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-[40px] p-5 lg:p-[40px] 2xl:p-[60px]">
                <span className="block size-[10px] bg-black" />
                <div className="grid">
                  {STEPS.map((item, index) => (
                    <p
                      key={item.label}
                      aria-hidden={index !== active}
                      className={cn(
                        'col-start-1 row-start-1 text-[18px] leading-[1.4] transition-opacity duration-500 md:text-[20px]',
                        index === active
                          ? 'opacity-100'
                          : 'pointer-events-none opacity-0',
                      )}
                    >
                      {item.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center p-8 2xl:p-[60px]">
              <div className="relative flex aspect-[900/607] w-full max-w-[700px] items-center justify-center">
                <TrophyOrnament />
                <img
                  src="/images/gamefi/succeed-trophy.webp"
                  alt="Pixel-art championship trophy"
                  loading="lazy"
                  width={560}
                  height={560}
                  className="relative w-[70%] object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowProjectsSucceed;
