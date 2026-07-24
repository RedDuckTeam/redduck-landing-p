type InitEvent = {
  name: 'init';
  offscreenCanvas: OffscreenCanvas;
  width: number;
  height: number;
  initialSquareSize?: number;
  approximateSquareSize: boolean;
  duration: number;
  initialDelay?: number;
  duckScale?: number;
};

type StartEvent = {
  name: 'start';
  width: number;
  height: number;
};

type ResizeEvent = {
  name: 'resize';
  width: number;
  height: number;
};

type UpdateStateEvent = {
  name: 'updateState';
  initialSquareSize?: number;
  approximateSquareSize: boolean;
  duration: number;
  initialDelay?: number;
  duckScale?: number;
};

type AnimationStartedEvent = {
  name: 'animationStarted';
};

type AnimationStoppedEvent = {
  name: 'animationStopped';
};

export type Event =
  | InitEvent
  | StartEvent
  | ResizeEvent
  | UpdateStateEvent
  | AnimationStartedEvent
  | AnimationStoppedEvent;
