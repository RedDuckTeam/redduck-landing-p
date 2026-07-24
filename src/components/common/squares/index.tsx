import { useRef, useEffect } from 'react';

import type { SquaresTheme } from './constants';
import { createSquaresEngine, type SquaresEngine } from './squares.engine';
import type { Event } from './types';

import { useInView, useResizeObserver } from '~/hooks';
import type { Prettify } from '~/types';
import { cn, isDefined } from '~/utils';

interface BaseSquaresProps {
  speed?: number;
  scaleX?: number;
  scaleY?: number;
  moveScale?: number;
  cursorRadius?: number;
  hoverReductionSpeed?: number;
  className?: string;
  fadingColour?: string;
  fadeY?: number;
  theme?: SquaresTheme;
}

interface ApproximatedSquares extends BaseSquaresProps {
  approximateSquareSize: true;
  squareSize: number;
}

interface StandardSquares extends BaseSquaresProps {
  approximateSquareSize?: false;
  squareSize?: number;
}

type SquaresProps = Prettify<ApproximatedSquares | StandardSquares>;

export function Squares({
  squareSize: initialSquareSize,
  approximateSquareSize = false,
  speed = 0.005,
  scaleX = 0.01,
  scaleY = 0.01,
  moveScale = 0.5,
  cursorRadius = 2,
  hoverReductionSpeed = 0.05,
  fadeY = 0,
  fadingColour,
  theme = 'light',
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const webWorkerRef = useRef<Worker>(null);
  const engineRef = useRef<SquaresEngine>(null);

  const isInView = useInView(canvasRef);

  // Mount-time snapshot of the worker/engine config; later changes flow
  // through the updateState effect.
  const initConfigRef = useRef({
    approximateSquareSize,
    cursorRadius,
    hoverReductionSpeed,
    initialSquareSize,
    moveScale,
    scaleX,
    scaleY,
    speed,
    isInView,
    fadeY,
    fadingColour,
    theme,
  });

  useEffect(() => {
    if (
      !isDefined(canvasRef.current) ||
      isDefined(webWorkerRef.current) ||
      isDefined(engineRef.current)
    ) {
      return;
    }

    const config = initConfigRef.current;
    const fadeY =
      config.fadingColour && config.fadeY !== undefined ? config.fadeY : 0;

    const width = canvasRef.current.offsetWidth;
    const height = canvasRef.current.offsetHeight;

    // Cap at 2 for perf. Main thread only — workers have no `window`, and at
    // module top this would crash SSR.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const supportsOffscreen =
      typeof canvasRef.current.transferControlToOffscreen === 'function';

    if (supportsOffscreen) {
      try {
        const newWorker = new Worker(
          new URL('./squares.worker.ts', import.meta.url),
          { type: 'module' },
        );

        webWorkerRef.current = newWorker;

        const offscreenCanvas = canvasRef.current.transferControlToOffscreen();

        const initEventData = {
          name: 'init',
          offscreenCanvas,
          width,
          height,
          dpr,
          ...config,
          fadeY,
        } satisfies Event;

        newWorker.postMessage(initEventData, [offscreenCanvas]);

        const startEventData = {
          name: 'start',
          width,
          height,
          dpr,
        } satisfies Event;

        newWorker.postMessage(startEventData);

        // Decorative only — no fallback (canvas already transferred), just tear down.
        const handleWorkerDeath = () => {
          if (webWorkerRef.current) {
            webWorkerRef.current.terminate();
            webWorkerRef.current = null;
          }
        };

        newWorker.onerror = handleWorkerDeath;
        newWorker.onmessageerror = handleWorkerDeath;
      } catch (error) {
        // Decorative — on failure clean up and skip.
        console.error('Squares worker failed, skipping animation:', error);
        if (webWorkerRef.current) {
          webWorkerRef.current.terminate();
          webWorkerRef.current = null;
        }
      }
    } else {
      const engine = createSquaresEngine(canvasRef.current);

      engineRef.current = engine;

      engine.init({
        ...config,
        fadeY,
      });
      engine.start(width, height, dpr);
    }

    return () => {
      if (webWorkerRef.current) {
        webWorkerRef.current.terminate();
        webWorkerRef.current = null;
      }
      if (engineRef.current) {
        engineRef.current.destroy();
        engineRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const updateStateData = {
      name: 'updateState',
      approximateSquareSize,
      cursorRadius,
      hoverReductionSpeed,
      isInView,
      moveScale,
      scaleX,
      scaleY,
      speed,
      initialSquareSize,
      fadeY: fadingColour && fadeY !== undefined ? fadeY : 0,
      fadingColour,
      theme,
    } satisfies Event;

    webWorkerRef.current?.postMessage(updateStateData);
    engineRef.current?.updateState({
      approximateSquareSize,
      cursorRadius,
      hoverReductionSpeed,
      isInView,
      moveScale,
      scaleX,
      scaleY,
      speed,
      initialSquareSize,
      fadeY: fadingColour && fadeY !== undefined ? fadeY : 0,
      fadingColour,
      theme,
    });
  }, [
    approximateSquareSize,
    cursorRadius,
    fadeY,
    fadingColour,
    hoverReductionSpeed,
    initialSquareSize,
    isInView,
    moveScale,
    scaleX,
    scaleY,
    speed,
    theme,
  ]);

  useResizeObserver(canvasRef, () => {
    if (!isDefined(canvasRef.current)) {
      return;
    }

    const width = canvasRef.current.offsetWidth;
    const height = canvasRef.current.offsetHeight;

    // DPR can change when the window moves between monitors.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    if (webWorkerRef.current) {
      const resizeEventData = {
        name: 'resize',
        width,
        height,
        dpr,
      } satisfies Event;

      webWorkerRef.current.postMessage(resizeEventData);
    }

    engineRef.current?.resize(width, height, dpr);
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!isDefined(canvas)) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const mouseMoveData = {
        name: 'mouseMove',
        isOut: false,
        x: mouseX,
        y: mouseY,
      } satisfies Event;

      webWorkerRef.current?.postMessage(mouseMoveData);
      engineRef.current?.mouseMove(false, mouseX, mouseY);
    };

    const handleLeave = () => {
      const mouseMoveData = {
        name: 'mouseMove',
        isOut: true,
        x: 0,
        y: 0,
      } satisfies Event;

      webWorkerRef.current?.postMessage(mouseMoveData);
      engineRef.current?.mouseMove(true, 0, 0);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const t = event.touches[0];
      if (!t) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = t.clientX - rect.left;
      const mouseY = t.clientY - rect.top;

      const mouseMoveData = {
        name: 'mouseMove',
        isOut: false,
        x: mouseX,
        y: mouseY,
      } satisfies Event;

      webWorkerRef.current?.postMessage(mouseMoveData);
      engineRef.current?.mouseMove(false, mouseX, mouseY);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleLeave);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleLeave);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={cn('block size-full', className)} />
  );
}
