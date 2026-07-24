import type { SquaresTheme } from './constants';

type InitEvent = {
  name: 'init';
  offscreenCanvas: OffscreenCanvas;
  width: number;
  height: number;
  dpr: number;
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
  theme: SquaresTheme;
};

type StartEvent = {
  name: 'start';
  width: number;
  height: number;
  dpr: number;
};

type ResizeEvent = {
  name: 'resize';
  width: number;
  height: number;
  dpr: number;
};

type UpdateStateEvent = {
  name: 'updateState';
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
  theme: SquaresTheme;
};

type MouseMoveEvent = {
  name: 'mouseMove';
  isOut: boolean;
  x: number;
  y: number;
};

export type Event =
  | InitEvent
  | StartEvent
  | ResizeEvent
  | UpdateStateEvent
  | MouseMoveEvent;
