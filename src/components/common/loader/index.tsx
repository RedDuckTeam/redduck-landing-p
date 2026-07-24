import { useRef, useEffect, useState } from 'react';

import { LOADER_COLOUR, LOADER_WATCHDOG_MS } from './constants';
import { createLoaderEngine, type LoaderEngine } from './loader.engine';
import { PrerenderedDuck } from './prerendered-duck';
import type { Event } from './types';

import { useEnableScroll, useResizeObserver } from '~/hooks';
import type { Prettify } from '~/types';
import { cn, isDefined } from '~/utils';

interface BaseLoaderProps {
  duration?: number;
  className?: string;
  initialDelay?: number;
  duckScale?: number;
}

interface ApproximatedLoader extends BaseLoaderProps {
  approximateSquareSize: true;
  squareSize: number;
}

interface StandardLoader extends BaseLoaderProps {
  approximateSquareSize?: false;
  squareSize?: number;
}

type LoaderProps = Prettify<ApproximatedLoader | StandardLoader>;

export function Loader({
  className,
  approximateSquareSize = false,
  duration = 1,
  squareSize = 50,
  initialDelay = 0.5,
  duckScale = 7.5,
}: LoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const webWorkerRef = useRef<Worker>(null);
  const engineRef = useRef<LoaderEngine>(null);
  const watchdogRef = useRef<ReturnType<typeof setTimeout>>(null);
  // enableScroll() must run at most once per disableScroll() — the message,
  // watchdog and unmount paths can race.
  const scrollLockedRef = useRef(false);

  const [isActive, setIsActive] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);

  const { enableScroll, disableScroll } = useEnableScroll();

  // Mount-time snapshot of everything the init effect needs (props + the stable
  // scroll callbacks); later prop changes are forwarded by the updateState effect.
  const initConfigRef = useRef({
    approximateSquareSize,
    duration,
    squareSize,
    initialDelay,
    duckScale,
    enableScroll,
    disableScroll,
  });

  useEffect(() => {
    if (
      !isDefined(canvasRef.current) ||
      isDefined(webWorkerRef.current) ||
      isDefined(engineRef.current)
    ) {
      return;
    }

    const {
      approximateSquareSize,
      duration,
      squareSize,
      initialDelay,
      duckScale,
      enableScroll,
      disableScroll,
    } = initConfigRef.current;

    const width = canvasRef.current.offsetWidth;
    const height = canvasRef.current.offsetHeight;

    const clearWatchdog = () => {
      if (isDefined(watchdogRef.current)) {
        clearTimeout(watchdogRef.current);
        watchdogRef.current = null;
      }
    };

    // Clears the watchdog and unlocks scroll exactly once, whichever path
    // (message / error / watchdog) gets here first.
    const releaseScrollLock = () => {
      clearWatchdog();

      if (scrollLockedRef.current) {
        scrollLockedRef.current = false;
        enableScroll();
      }
    };

    const handleAnimationStarted = () => setAnimationStarted(true);
    const handleAnimationStopped = () => {
      setIsActive(false);
      releaseScrollLock();
    };

    // Fallback to the main-thread engine when the worker can't be used.
    const runMainThreadEngine = () => {
      if (!isDefined(canvasRef.current) || isDefined(engineRef.current)) {
        return;
      }

      const engine = createLoaderEngine(canvasRef.current, {
        onAnimationStarted: handleAnimationStarted,
        onAnimationStopped: handleAnimationStopped,
      });

      engineRef.current = engine;

      engine.init({
        approximateSquareSize,
        duration,
        initialSquareSize: squareSize,
        initialDelay,
        duckScale,
      });
      engine.start(width, height);
    };

    // Worker died — make sure scroll isn't left locked.
    const fallbackToMainThread = () => {
      if (webWorkerRef.current) {
        webWorkerRef.current.terminate();
        webWorkerRef.current = null;
      }

      // Canvas already belongs to the dead worker — can't draw, just free scroll.
      releaseScrollLock();
    };

    const supportsOffscreen =
      typeof canvasRef.current.transferControlToOffscreen === 'function';

    if (supportsOffscreen) {
      try {
        const newWorker = new Worker(
          new URL('./loader.worker.ts', import.meta.url),
          { type: 'module' },
        );

        webWorkerRef.current = newWorker;

        const offscreenCanvas = canvasRef.current.transferControlToOffscreen();

        const initEventData = {
          name: 'init',
          approximateSquareSize,
          height,
          width,
          offscreenCanvas,
          duration,
          initialSquareSize: squareSize,
          initialDelay,
          duckScale,
        } satisfies Event;

        newWorker.postMessage(initEventData, [offscreenCanvas]);

        const startEventData = {
          name: 'start',
          height,
          width,
        } satisfies Event;

        newWorker.postMessage(startEventData);

        newWorker.onmessage = (ev: MessageEvent<Event>) => {
          if (ev.data.name === 'animationStarted') {
            handleAnimationStarted();
          }

          if (ev.data.name === 'animationStopped') {
            handleAnimationStopped();
          }
        };

        // A worker error after the canvas transfer would leave scroll locked.
        newWorker.onerror = () => fallbackToMainThread();
        newWorker.onmessageerror = () => fallbackToMainThread();

        // No animationStopped in time → worker is dead, unlock scroll.
        watchdogRef.current = setTimeout(() => {
          fallbackToMainThread();
        }, LOADER_WATCHDOG_MS);
      } catch {
        // Transfer failed — canvas is still ours, render on the main thread.
        if (webWorkerRef.current) {
          webWorkerRef.current.terminate();
          webWorkerRef.current = null;
        }
        runMainThreadEngine();
      }
    } else {
      runMainThreadEngine();
    }

    disableScroll();
    scrollLockedRef.current = true;

    return () => {
      clearWatchdog();

      if (webWorkerRef.current) {
        webWorkerRef.current.terminate();
        webWorkerRef.current = null;
      }
      if (engineRef.current) {
        engineRef.current.destroy();
        engineRef.current = null;
      }

      releaseScrollLock();
    };
  }, []);

  useEffect(() => {
    const updateStateData = {
      name: 'updateState',
      approximateSquareSize,
      duration,
      initialSquareSize: squareSize,
      initialDelay,
      duckScale,
    } satisfies Event;

    webWorkerRef.current?.postMessage(updateStateData);
    engineRef.current?.updateState({
      approximateSquareSize,
      duration,
      initialSquareSize: squareSize,
      initialDelay,
      duckScale,
    });
  }, [approximateSquareSize, duration, initialDelay, squareSize, duckScale]);

  useResizeObserver(canvasRef, () => {
    if (!isDefined(canvasRef.current)) {
      return;
    }

    const width = canvasRef.current.offsetWidth;
    const height = canvasRef.current.offsetHeight;

    if (webWorkerRef.current) {
      const resizeEventData = {
        name: 'resize',
        width,
        height,
      } satisfies Event;

      webWorkerRef.current.postMessage(resizeEventData);
    }

    engineRef.current?.resize(width, height);
  });

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          backgroundColor: !animationStarted ? LOADER_COLOUR : '',
        }}
        className={cn(
          'js-only fixed z-50 block h-screen !w-screen !max-w-none !p-0',
          !isActive && 'hidden',
          className,
        )}
      />
      <PrerenderedDuck duckScale={duckScale} isActive={!animationStarted} />
    </>
  );
}
