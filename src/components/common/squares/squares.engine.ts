import { createNoise2D } from 'simplex-noise';

import {
  COLOUR_GRADATION,
  COLOUR_GRADATIONS,
  DEFAULT_HORIZONTAL_CUBES,
  HOVER_MULTIPLIER,
  MAX_NOISE_VALUE,
  MIN_NOISE_VALUE,
  NOISE_THRESHOLDS,
  type SquaresTheme,
} from './constants';
import {
  blendColours,
  colourAt,
  distance,
  getColorByNoiseValue,
} from './helpers';

import { FRAME_RATE } from '../../../constants/workers';
import type { Point } from '../../../types';
import { isDefined } from '../../../utils/lib';

export type SquaresEngineConfig = {
  initialSquareSize?: number;
  approximateSquareSize: boolean;
  scaleX: number;
  scaleY: number;
  moveScale: number;
  cursorRadius: number;
  hoverReductionSpeed: number;
  speed: number;
  isInView: boolean;
  fadeY: number;
  fadingColour: string | undefined;
  theme?: SquaresTheme;
};

type EngineCanvas = OffscreenCanvas | HTMLCanvasElement;
type EngineContext =
  | OffscreenCanvasRenderingContext2D
  | CanvasRenderingContext2D;

export function createSquaresEngine(canvas: EngineCanvas) {
  let context: EngineContext | null = null;

  const noiseTexture = createNoise2D();
  const noiseAngle = createNoise2D();

  const noiseOffset: Point = [0, 0];
  const hoveredSquare: Point = [-1, -1];

  let requestAnimation: number | null = null;

  let currentSquareSize = 0;
  let numSquaresX = 0;
  let numSquaresY = 0;

  // All grid math runs in CSS px; the backing store is logical * dpr with the
  // context scaled once, so grid density doesn't depend on devicePixelRatio.
  let logicalWidth = 0;
  let logicalHeight = 0;
  let dprS = 1;
  const timeBetweenUpdates = 1000 / FRAME_RATE;
  let lastUpdateTime = 0;

  let hoveredArray: number[][] = [[]];
  const fadingColourMap: Map<string, Point[]> = new Map();
  const batchedRectsByColor: Point[][] = Array.from(
    { length: COLOUR_GRADATION.length },
    () => [],
  );

  let initialSquareSizeS: number | undefined;
  let approximateSquareSizeS = false;
  let scaleXS = 0.01;
  let scaleYS = 0.01;
  let moveScaleS = 0.5;
  let cursorRadiusS = 2;
  let maxDistanceForHoverS = distance(0, 0, cursorRadiusS, cursorRadiusS);
  let hoverReductionSpeedS = 0.05;
  let speedS = 0.005;
  let isInViewS = false;
  let fadeYS = 0;
  let fadingColourS: string | undefined;
  let paletteS: readonly string[] = COLOUR_GRADATION;

  function calculateHovered(x: number, y: number, noise: number): number {
    let reduceNoise = false;

    if (hoveredSquare[0] >= 0 && hoveredSquare[1] >= 0) {
      const distanceFromHoveredSquare = distance(
        hoveredSquare[0],
        hoveredSquare[1],
        x,
        y,
      );

      const formattedDistance = Math.abs(
        (distanceFromHoveredSquare * 2) / maxDistanceForHoverS - 2,
      );

      if (distanceFromHoveredSquare < cursorRadiusS + 1) {
        if (hoveredArray[x][y] < formattedDistance) {
          hoveredArray[x][y] = formattedDistance;
        }
      } else {
        reduceNoise = hoveredArray[x][y] > 0;
      }
    } else {
      reduceNoise = hoveredArray[x][y] > 0;
    }

    if (reduceNoise) {
      const difference = 2 - hoveredArray[x][y];

      hoveredArray[x][y] -=
        difference < NOISE_THRESHOLDS.MID_LOW
          ? hoverReductionSpeedS * 2
          : hoverReductionSpeedS;
    }

    const colourIndex = getColorByNoiseValue(
      Math.max(
        Math.min(
          hoveredArray[x][y] * HOVER_MULTIPLIER + noise,
          MAX_NOISE_VALUE,
        ),
        MIN_NOISE_VALUE,
      ),
    );

    return colourIndex;
  }

  function skipFrame(skipTimings?: boolean) {
    if (isInViewS === false) {
      return true;
    }

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

  function calculateFadingColour(
    x: number,
    y: number,
    colourIndex: number,
  ): boolean {
    if (fadeYS > 0 && y < fadeYS && isDefined(fadingColourS)) {
      const resultingColour = blendColours(
        colourAt(colourIndex, paletteS),
        fadingColourS,
        Math.min(0.9, Math.abs(y / fadeYS - 1)),
      );

      if (!fadingColourMap.has(resultingColour)) {
        fadingColourMap.set(resultingColour, []);
      }

      fadingColourMap.get(resultingColour)?.push([x, y]);

      return true;
    }

    return false;
  }

  function drawFadingColour() {
    if (!context) return;
    if (fadeYS <= 0 || fadingColourS === undefined) {
      return;
    }

    const fadingColourKeys = Array.from(fadingColourMap.keys()).sort();

    for (const fadingColourKey of fadingColourKeys) {
      const points = fadingColourMap.get(fadingColourKey);

      if (isDefined(points) && points.length > 0) {
        context.fillStyle = fadingColourKey;
        context.strokeStyle = fadingColourKey;
        context.beginPath();

        for (const point of points) {
          const xPos = point[0] * currentSquareSize;
          const yPos = point[1] * currentSquareSize;
          context.rect(xPos, yPos, currentSquareSize, currentSquareSize);
        }

        context.fill();
        context.stroke();
      }
    }
  }

  function drawRegularColours() {
    if (!context) return;

    for (let c = 0; c < COLOUR_GRADATION.length; c++) {
      const pointsForCurrentColour = batchedRectsByColor[c];

      if (pointsForCurrentColour.length > 0) {
        context.fillStyle = colourAt(c, paletteS);
        context.strokeStyle = colourAt(c, paletteS);
        context.beginPath();

        for (const point of pointsForCurrentColour) {
          const xPos = point[0] * currentSquareSize;
          const yPos = point[1] * currentSquareSize;
          context.rect(xPos, yPos, currentSquareSize, currentSquareSize);
        }

        context.fill();
        context.stroke();
      }
    }
  }

  function updateDirection() {
    const noise =
      noiseAngle(noiseOffset[0] * moveScaleS, noiseOffset[1] * moveScaleS) + 1;

    const baseMove = (currentSquareSize * speedS) / 100;

    const angle = noise * Math.PI;

    const xMove = baseMove * Math.cos(angle);
    const yMove = baseMove * Math.sin(angle) * 0.5;

    noiseOffset[0] += xMove;
    noiseOffset[1] += yMove;
  }

  function drawGrid(skipTimings?: boolean) {
    if (!context) return;
    if (skipFrame(skipTimings)) {
      return;
    }

    // Context is dpr-scaled, so clear in logical (CSS px) coordinates.
    context.clearRect(0, 0, logicalWidth, logicalHeight);

    updateDirection();

    fadingColourMap.clear();
    for (const colorBatch of batchedRectsByColor) {
      colorBatch.length = 0;
    }

    for (let x = 0; x < numSquaresX; x++) {
      for (let y = 0; y < numSquaresY; y++) {
        const pointX = (x + noiseOffset[0]) * scaleXS;
        const pointY = (y + noiseOffset[1]) * scaleYS;
        const noiseVal = noiseTexture(pointX, pointY) + 1;

        const colourIndex = calculateHovered(x, y, noiseVal);

        if (calculateFadingColour(x, y, colourIndex)) {
          continue;
        }

        if (colourIndex >= 0 && colourIndex < COLOUR_GRADATION.length) {
          batchedRectsByColor[colourIndex].push([x, y]);
        }
      }
    }

    drawRegularColours();
    drawFadingColour();
  }

  function animationStep() {
    if (!isInViewS) {
      requestAnimation = null;
      return;
    }

    drawGrid();

    if (isInViewS) {
      requestAnimation = requestAnimationFrame(animationStep);
    } else {
      requestAnimation = null;
    }
  }

  function startAnimationLoop() {
    if (isInViewS && !isDefined(requestAnimation) && isDefined(context)) {
      lastUpdateTime = performance.now();
      requestAnimation = requestAnimationFrame(animationStep);
    }
  }

  function stopAnimationLoop() {
    if (requestAnimation) {
      cancelAnimationFrame(requestAnimation);
      requestAnimation = null;
    }
  }

  function resize(width: number, height: number, dpr: number = dprS) {
    if (!isDefined(context)) {
      return;
    }

    logicalWidth = width;
    logicalHeight = height;
    dprS = dpr;

    // Setting canvas.width/height resets the transform — re-apply the dpr scale.
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(dpr, dpr);

    let newSquareSize =
      initialSquareSizeS || logicalWidth / DEFAULT_HORIZONTAL_CUBES;

    if (approximateSquareSizeS === true && isDefined(initialSquareSizeS)) {
      const amountOfHorizontalCubes = Math.floor(
        logicalWidth / initialSquareSizeS,
      );

      newSquareSize = logicalWidth / amountOfHorizontalCubes;
    }

    currentSquareSize = newSquareSize;

    numSquaresX = Math.ceil(logicalWidth / newSquareSize) + 1;
    numSquaresY = Math.ceil(logicalHeight / newSquareSize) + 1;

    hoveredArray = Array.from({ length: numSquaresX }, () =>
      Array(numSquaresY).fill(0),
    );

    drawGrid(true);
    startAnimationLoop();
  }

  return {
    init(config: SquaresEngineConfig) {
      initialSquareSizeS = config.initialSquareSize;
      approximateSquareSizeS = config.approximateSquareSize;
      scaleXS = config.scaleX;
      scaleYS = config.scaleY;
      moveScaleS = config.moveScale;
      cursorRadiusS = config.cursorRadius;
      maxDistanceForHoverS = distance(0, 0, cursorRadiusS, cursorRadiusS);
      hoverReductionSpeedS = config.hoverReductionSpeed;
      speedS = config.speed;
      isInViewS = config.isInView;
      fadeYS = config.fadeY;
      fadingColourS = config.fadingColour;
      paletteS = COLOUR_GRADATIONS[config.theme ?? 'light'] ?? COLOUR_GRADATION;
    },

    start(width: number, height: number, dpr: number = 1) {
      const ctx = canvas.getContext('2d') as EngineContext | null;

      if (!isDefined(ctx)) {
        return;
      }

      context = ctx;

      resize(width, height, dpr);
      startAnimationLoop();
    },

    resize(width: number, height: number, dpr: number = dprS) {
      resize(width, height, dpr);
    },

    updateState(config: SquaresEngineConfig) {
      approximateSquareSizeS = config.approximateSquareSize;
      scaleXS = config.scaleX;
      scaleYS = config.scaleY;
      moveScaleS = config.moveScale;

      if (cursorRadiusS !== config.cursorRadius) {
        cursorRadiusS = config.cursorRadius;
        maxDistanceForHoverS = distance(0, 0, cursorRadiusS, cursorRadiusS);
      }

      hoverReductionSpeedS = config.hoverReductionSpeed;
      speedS = config.speed;
      fadeYS = config.fadeY;
      fadingColourS = config.fadingColour;
      paletteS = COLOUR_GRADATIONS[config.theme ?? 'light'] ?? COLOUR_GRADATION;

      const oldIsInView = isInViewS;
      isInViewS = config.isInView;

      if (initialSquareSizeS !== config.initialSquareSize) {
        initialSquareSizeS = config.initialSquareSize;

        // Logical dims, not canvas.width/height — those would double-scale.
        resize(logicalWidth, logicalHeight, dprS);
      }

      if (isInViewS && !oldIsInView) {
        startAnimationLoop();
      } else if (!isInViewS && oldIsInView) {
        stopAnimationLoop();
      }
    },

    mouseMove(isOut: boolean, x: number, y: number) {
      if (isOut) {
        hoveredSquare[0] = -1;
        hoveredSquare[1] = -1;
        return;
      }

      hoveredSquare[0] = Math.floor(x / currentSquareSize);
      hoveredSquare[1] = Math.floor(y / currentSquareSize);
    },

    destroy() {
      if (requestAnimation) {
        cancelAnimationFrame(requestAnimation);
        requestAnimation = null;
      }
    },
  };
}

export type SquaresEngine = ReturnType<typeof createSquaresEngine>;
