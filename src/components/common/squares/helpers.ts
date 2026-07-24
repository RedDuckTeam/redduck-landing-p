import {
  COLOUR_GRADATION,
  MAX_NOISE_VALUE,
  MIN_NOISE_VALUE,
  NOISE_THRESHOLDS,
} from './constants';

import { isDefined } from '../../../utils/lib';

/**
 * Determines the color index based on a given noise value.
 * The noise value is expected to be within a predefined range [MIN_NOISE_VALUE, MAX_NOISE_VALUE].
 * The function maps the noise value to an index based on predefined thresholds.
 *
 * @param noise - The noise value to map to a color index.
 * @returns The color index (0-4) corresponding to the noise value.
 * @throws Error if the noise value is out of the valid range.
 */
export function getColorByNoiseValue(noise: number): number {
  if (noise < MIN_NOISE_VALUE || noise > MAX_NOISE_VALUE) {
    throw new Error(
      `Noise value ${noise} is out of bounds. Valid range is ${MIN_NOISE_VALUE} to ${MAX_NOISE_VALUE}.`,
    );
  }

  if (noise < NOISE_THRESHOLDS.LOW) {
    return 0;
  }

  if (noise < NOISE_THRESHOLDS.MID_LOW) {
    return 1;
  }

  if (noise < NOISE_THRESHOLDS.MID) {
    return 2;
  }

  if (noise < NOISE_THRESHOLDS.MID_HIGH) {
    return 3;
  }

  return 4;
}

/**
 * Retrieves a color string from the given palette at the given index.
 *
 * @param index - The index of the color in the palette.
 * @param palette - The colour palette to use. Defaults to `COLOUR_GRADATION` (light).
 * @returns The color string (hex code).
 * @throws Error if the index is out of bounds for the palette.
 */
export function colourAt(
  index: number,
  palette: readonly string[] = COLOUR_GRADATION,
) {
  const result = palette[index];

  if (!isDefined(result)) {
    throw new Error(
      `Colour index ${index} is out of bounds. Valid range is 0 to ${palette.length - 1}.`,
    );
  }

  return result;
}

/**
 * Calculates the Euclidean distance between two points in a 2D space.
 *
 * @param x1 - The x-coordinate of the first point.
 * @param y1 - The y-coordinate of the first point.
 * @param x2 - The x-coordinate of the second point.
 * @param y2 - The y-coordinate of the second point.
 * @returns The distance between the two points.
 */
export function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export function hexToRgb(colour: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour);

  if (!result) {
    throw new Error(`Invalid hex color: ${colour}`);
  }

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (value: number) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function blendColours(
  colour1: string,
  colour2: string,
  ratio: number,
): string {
  const rgb1 = hexToRgb(colour1);
  const rgb2 = hexToRgb(colour2);

  const r = Math.round(rgb1.r * (1 - ratio) + rgb2.r * ratio);
  const g = Math.round(rgb1.g * (1 - ratio) + rgb2.g * ratio);
  const b = Math.round(rgb1.b * (1 - ratio) + rgb2.b * ratio);

  return rgbToHex(r, g, b);
}
