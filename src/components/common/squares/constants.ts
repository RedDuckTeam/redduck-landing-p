export const LIGHT_COLOUR_GRADATION = [
  '#e0cdc6',
  '#e8b5a9',
  '#e0ac9f',
  '#ed4937',
  '#f22e1a',
];

export const DARK_COLOUR_GRADATION = [
  '#000000',
  '#964D3E',
  '#B6422B',
  '#ED4937',
  '#F22E1A',
];

// Reds matched to the red CTA background so the grid reads as a subtle texture.
export const RED_COLOUR_GRADATION = [
  '#ed4937',
  '#d8402e',
  '#c33828',
  '#a8341f',
  '#8a2a1d',
];

export type SquaresTheme = 'light' | 'dark' | 'red';

export const COLOUR_GRADATIONS: Record<SquaresTheme, readonly string[]> = {
  light: LIGHT_COLOUR_GRADATION,
  dark: DARK_COLOUR_GRADATION,
  red: RED_COLOUR_GRADATION,
};

export const COLOUR_GRADATION = LIGHT_COLOUR_GRADATION;

export const NOISE_THRESHOLDS = {
  LOW: 0.9,
  MID_LOW: 1.125,
  MID: 1.3,
  MID_HIGH: 1.6,
};
export const MAX_NOISE_VALUE = 2;
export const MIN_NOISE_VALUE = 0;

export const DEFAULT_HORIZONTAL_CUBES = 30;
export const HOVER_MULTIPLIER = 0.8;
