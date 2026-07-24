import { useRef, useState } from 'react';

import { EnemyIcon } from '~/components/svg/icons/rwa';
import { useResizeObserver } from '~/hooks';
import { cn } from '~/utils';

interface PacmanSceneProps {
  className?: string;
}

const VIEW_W = 299;
const VIEW_H = 264;
const CYCLE_DUR = 20;

const TRAIL_COLOR = '#E0CDC6';

const PACMAN_PATH =
  'M69.666 12.1655V38.6102V106.967H15.166V155.865H69.666V251.166H227.666V155.865H285.166V106.967H227.666V12.1655H69.666Z';

const DOT_PATHS = [
  'M94.5323 82.6124V36.919H69.699M94.5323 82.6124H121.021M94.5323 82.6124V108.108M69.699 36.919V108.108H14.4033V131.948M69.699 36.919V13.079H149.166V36.919H121.021V82.6124M69.699 36.919H44.2034M121.021 82.6124H149.166M94.5323 131.948V108.108M94.5323 108.108H149.166M44.2034 36.919H14.4033V12.4167H44.2034V36.919ZM44.2034 36.919V59.7657M44.2034 59.7657V85.5924H14.4033V59.7657H44.2034Z',
  'M203.799 82.6124V36.919H228.633M203.799 82.6124H177.31M203.799 82.6124V108.108M228.633 36.919V108.108H283.928V131.948M228.633 36.919V13.079H149.166V36.919H177.31V82.6124M228.633 36.919H254.128M177.31 82.6124H149.166M203.799 131.948V108.108M203.799 108.108H149.166M254.128 36.919H283.928V12.4167H254.128V36.919ZM254.128 36.919V59.7657M254.128 59.7657V85.5924H283.928V59.7657H254.128Z',
  'M203.799 181.284V226.977H228.633M203.799 181.284H177.31M203.799 181.284V155.788M228.633 226.977V155.788H283.928V131.948M228.633 226.977V250.817H149.166V226.977H177.31V181.284M228.633 226.977H254.128M177.31 181.284H149.166M203.799 131.948V155.788M203.799 155.788H149.166M254.128 226.977H283.928V251.479H254.128V226.977ZM254.128 226.977V204.13M254.128 204.13V178.304H283.928V204.13H254.128Z',
  'M94.5323 181.284V226.977H69.699M94.5323 181.284H121.021M94.5323 181.284V155.788M69.699 226.977V155.788H14.4033V131.948M69.699 226.977V250.817H149.166V226.977H121.021V181.284M69.699 226.977H44.2034M121.021 181.284H149.166M94.5323 131.948V155.788M94.5323 155.788H149.166M44.2034 226.977H14.4033V251.479H44.2034V226.977ZM44.2034 226.977V204.13M44.2034 204.13V178.304H14.4033V204.13H44.2034Z',
];

const GHOST_PINK = '#F1E0D9';
const GHOST_RED = '#ED4A38';
const GHOST_GRAY = '#9B9B9B';

const PINK_PATH = 'M254.128 40 V80';
const RED_PATH = 'M155 181.284 H200';
const GRAY_PATH = 'M94.5323 185 V225';
const DUCK_PATH = 'M115 75 H200';

const GHOST_W = 20;
const GHOST_H = 18;

export function PacmanScene({ className }: PacmanSceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();

  useResizeObserver(ref, () => {
    const el = ref.current;
    if (!el) return;
    setWidth((el.clientHeight * VIEW_W) / VIEW_H);
  });

  return (
    <div
      ref={ref}
      className={cn('pacman-scene-wrapper', className)}
      style={{ width }}
    >
      <svg
        className="pacman-scene"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Pac-man maze illustration"
      >
        <image
          href="/images/pacman-bg.webp"
          x="0"
          y="0"
          width={VIEW_W}
          height={VIEW_H}
          preserveAspectRatio="none"
        />

        <g
          fill="none"
          stroke="#8c8581"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeDasharray="0 2.6"
        >
          {DOT_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        <path
          d={PACMAN_PATH}
          pathLength="100"
          fill="none"
          stroke={TRAIL_COLOR}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="100 100"
          strokeDashoffset="100"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="100;0"
            dur={`${CYCLE_DUR}s`}
            repeatCount="indefinite"
          />
        </path>

        <g>
          <animateMotion
            dur={`${CYCLE_DUR}s`}
            repeatCount="indefinite"
            rotate="auto"
            path={PACMAN_PATH}
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;0.88;1"
              dur="0.4s"
              repeatCount="indefinite"
            />
            <image
              href="/images/pacman.svg"
              x="-10"
              y="-11"
              width="20"
              height="22"
            />
          </g>
        </g>

        <g>
          <animateMotion
            dur={`${CYCLE_DUR}s`}
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
            path={DUCK_PATH}
          />

          <image
            href="/images/duck-pacman.svg"
            x="-15"
            y="2"
            width="30"
            height="14"
          />
        </g>

        <g>
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
            path={PINK_PATH}
          />
          <EnemyIcon
            x={-GHOST_W / 2}
            y={-GHOST_H / 2}
            width={GHOST_W}
            height={GHOST_H}
            style={{ color: GHOST_PINK }}
          />
        </g>

        <g>
          <animateMotion
            dur="3.6s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
            path={RED_PATH}
          />
          <EnemyIcon
            x={-GHOST_W / 2}
            y={-GHOST_H / 2}
            width={GHOST_W}
            height={GHOST_H}
            style={{ color: GHOST_RED }}
          />
        </g>

        <g>
          <animateMotion
            dur="4.4s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
            path={GRAY_PATH}
          />
          <EnemyIcon
            x={-GHOST_W / 2}
            y={-GHOST_H / 2}
            width={GHOST_W}
            height={GHOST_H}
            style={{ color: GHOST_GRAY }}
          />
        </g>
      </svg>
    </div>
  );
}

export default PacmanScene;
