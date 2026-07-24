import { DEFAULT_HORIZONTAL_CUBES_LOADER, LOADER_COLOUR } from './constants';
import { randomizedSequence } from './helpers';

import { FRAME_RATE } from '../../../constants/workers';
import type { Point } from '../../../types';
import { isDefined } from '../../../utils/lib';

export type LoaderEngineConfig = {
  initialSquareSize?: number;
  approximateSquareSize: boolean;
  duration: number;
  initialDelay?: number;
  duckScale?: number;
};

export type LoaderEngineCallbacks = {
  onAnimationStarted: () => void;
  onAnimationStopped: () => void;
};

type EngineCanvas = OffscreenCanvas | HTMLCanvasElement;
type EngineContext =
  | OffscreenCanvasRenderingContext2D
  | CanvasRenderingContext2D;

export function createLoaderEngine(
  canvas: EngineCanvas,
  callbacks: LoaderEngineCallbacks,
) {
  let context: EngineContext | null = null;

  let requestAnimation: number | null = null;
  let initialDelayTimer: ReturnType<typeof setTimeout> | null = null;

  let currentSquareSize = 0;
  let numSquaresX = 0;
  let numSquaresY = 0;

  let squareVisibility: boolean[][] = [];
  let randomizedSequencePoints: Point[] = [];

  let initialSquareSizeS: number | undefined;
  let approximateSquareSizeS = false;
  let durationS = 0;
  let initialDelayS = 0;
  let duckScaleS = 1;

  const timeBetweenUpdates = 1000 / FRAME_RATE;
  let lastUpdateTime = 0;
  let timeBetweenPoints = 0;
  let lastPointTime = 0;

  function skipFrame(skipTimings?: boolean): boolean {
    if (!skipTimings) {
      const currentTime = performance.now();

      if (
        timeBetweenUpdates > 0 &&
        currentTime - lastUpdateTime < timeBetweenUpdates
      ) {
        return true;
      }

      lastUpdateTime = currentTime;
    }

    return false;
  }

  function drawDuck() {
    if (!context) return;

    context.fillStyle = '#FFFFFF';
    context.strokeStyle = '#FFFFFF';
    context.lineWidth = 2;

    const offsetX = canvas.width / 2 - (70 * duckScaleS) / 2;
    const offsetY = canvas.height / 2 - (28 * duckScaleS) / 2;

    context.beginPath();
    context.moveTo(0 * duckScaleS + offsetX, 7 * duckScaleS + offsetY);
    context.lineTo(14 * duckScaleS + offsetX, 7 * duckScaleS + offsetY);
    context.lineTo(14 * duckScaleS + offsetX, 14 * duckScaleS + offsetY);
    context.lineTo(42 * duckScaleS + offsetX, 14 * duckScaleS + offsetY);
    context.lineTo(42 * duckScaleS + offsetX, 0 * duckScaleS + offsetY);
    context.lineTo(56 * duckScaleS + offsetX, 0 * duckScaleS + offsetY);
    context.lineTo(56 * duckScaleS + offsetX, 7 * duckScaleS + offsetY);
    context.lineTo(70 * duckScaleS + offsetX, 7 * duckScaleS + offsetY);
    context.lineTo(70 * duckScaleS + offsetX, 14 * duckScaleS + offsetY);
    context.lineTo(49 * duckScaleS + offsetX, 14 * duckScaleS + offsetY);
    context.lineTo(49 * duckScaleS + offsetX, 28 * duckScaleS + offsetY);
    context.lineTo(7 * duckScaleS + offsetX, 28 * duckScaleS + offsetY);
    context.lineTo(7 * duckScaleS + offsetX, 14 * duckScaleS + offsetY);
    context.lineTo(0 * duckScaleS + offsetX, 14 * duckScaleS + offsetY);
    context.closePath();

    context.stroke();

    const duckSquaresXStart = Math.floor(offsetX / currentSquareSize) - 1;
    const duckSquaresYStart = Math.floor(offsetY / currentSquareSize) - 1;
    const duckSquaresXEnd =
      Math.ceil((offsetX + 70 * duckScaleS) / currentSquareSize) + 1;
    const duckSquaresYEnd =
      Math.ceil((offsetY + 28 * duckScaleS) / currentSquareSize) + 1;

    for (let x = duckSquaresXStart; x < duckSquaresXEnd; x++) {
      for (let y = duckSquaresYStart; y < duckSquaresYEnd; y++) {
        if (squareVisibility[x]?.[y] === false) {
          context.clearRect(
            x * currentSquareSize,
            y * currentSquareSize,
            currentSquareSize,
            currentSquareSize,
          );
        }
      }
    }
  }

  function drawGrid() {
    if (!context) return;

    context.fillStyle = LOADER_COLOUR;
    context.strokeStyle = LOADER_COLOUR;

    context.beginPath();

    for (let x = 0; x < numSquaresX; x++) {
      for (let y = 0; y < numSquaresY; y++) {
        if (isDefined(squareVisibility[x]) && squareVisibility[x][y]) {
          const xPos = x * currentSquareSize;
          const yPos = y * currentSquareSize;
          context.rect(xPos, yPos, currentSquareSize, currentSquareSize);
        }
      }
    }

    context.fill();
    context.stroke();
  }

  function updatePointsVisibility() {
    const currentTime = performance.now();

    if (
      (timeBetweenPoints > 0 &&
        currentTime - lastPointTime < timeBetweenPoints) ||
      randomizedSequencePoints.length === 0
    ) {
      return;
    }

    const diff = currentTime - lastPointTime;

    lastPointTime = currentTime;

    const pointsToHide = Math.floor(diff / timeBetweenPoints);

    for (
      let i = 0;
      i < pointsToHide && randomizedSequencePoints.length > 0;
      i++
    ) {
      let success = false;

      while (!success && randomizedSequencePoints.length > 0) {
        const point = randomizedSequencePoints.pop();

        if (isDefined(point)) {
          const [x, y] = point;
          squareVisibility[x][y] = false;
          success = true;
        }
      }
    }
  }

  function draw(skipTimings?: boolean) {
    if (!context) return;
    if (skipFrame(skipTimings)) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    updatePointsVisibility();

    drawGrid();
    drawDuck();
  }

  function animationStep() {
    draw();
    requestAnimation = requestAnimationFrame(animationStep);

    if (randomizedSequencePoints.length === 0) {
      stopAnimationLoop();
    }
  }

  function startAnimationLoop() {
    if (!isDefined(requestAnimation) && isDefined(context)) {
      initialDelayTimer = setTimeout(() => {
        initialDelayTimer = null;

        lastUpdateTime = performance.now();
        lastPointTime = performance.now();

        draw(true);

        requestAnimation = requestAnimationFrame(animationStep);

        callbacks.onAnimationStarted();
      }, initialDelayS);
    }
  }

  function stopAnimationLoop() {
    if (requestAnimation) {
      cancelAnimationFrame(requestAnimation);
      requestAnimation = null;

      callbacks.onAnimationStopped();
    }
  }

  function resize(width: number, height: number) {
    if (!isDefined(context)) {
      return;
    }

    canvas.width = width;
    canvas.height = height;

    let newSquareSize =
      initialSquareSizeS || canvas.width / DEFAULT_HORIZONTAL_CUBES_LOADER;

    if (approximateSquareSizeS === true && isDefined(initialSquareSizeS)) {
      const amountOfHorizontalCubes = Math.floor(
        canvas.width / initialSquareSizeS,
      );
      newSquareSize = canvas.width / amountOfHorizontalCubes;
    }
    currentSquareSize = newSquareSize;

    const newNumSquaresX = Math.ceil(canvas.width / newSquareSize) + 1;
    const newNumSquaresY = Math.ceil(canvas.height / newSquareSize) + 1;

    if (numSquaresX !== newNumSquaresX || numSquaresY !== newNumSquaresY) {
      numSquaresX = newNumSquaresX;
      numSquaresY = newNumSquaresY;

      randomizedSequencePoints = randomizedSequence(numSquaresX, numSquaresY);
      squareVisibility = Array.from({ length: numSquaresX }, () =>
        Array(numSquaresY).fill(true),
      );

      timeBetweenPoints = durationS / randomizedSequencePoints.length;
    }

    if (requestAnimation !== null || initialDelayS === 0) {
      draw(true);
    }
  }

  return {
    init(config: LoaderEngineConfig) {
      initialSquareSizeS = config.initialSquareSize;
      approximateSquareSizeS = config.approximateSquareSize;
      durationS = config.duration * 1000;
      initialDelayS = (config.initialDelay || 0) * 1000;
      if (isDefined(config.duckScale)) {
        duckScaleS = config.duckScale;
      }
    },

    start(width: number, height: number) {
      const ctx = canvas.getContext('2d') as EngineContext | null;

      if (!isDefined(ctx)) {
        return;
      }

      context = ctx;

      resize(width, height);
      startAnimationLoop();
    },

    resize(width: number, height: number) {
      resize(width, height);
    },

    updateState(config: LoaderEngineConfig) {
      let needsResize = false;

      if (initialSquareSizeS !== config.initialSquareSize) {
        initialSquareSizeS = config.initialSquareSize;
        needsResize = true;
      }

      if (approximateSquareSizeS !== config.approximateSquareSize) {
        approximateSquareSizeS = config.approximateSquareSize;
        needsResize = true;
      }

      if (durationS !== config.duration * 1000) {
        durationS = config.duration * 1000;
        needsResize = true;
      }

      if (isDefined(config.duckScale) && duckScaleS !== config.duckScale) {
        duckScaleS = config.duckScale;
        needsResize = true;
      }

      if (needsResize) {
        resize(canvas.width, canvas.height);
      }
    },

    destroy() {
      if (requestAnimation) {
        cancelAnimationFrame(requestAnimation);
        requestAnimation = null;
      }
      if (initialDelayTimer) {
        clearTimeout(initialDelayTimer);
        initialDelayTimer = null;
      }
    },
  };
}

export type LoaderEngine = ReturnType<typeof createLoaderEngine>;
