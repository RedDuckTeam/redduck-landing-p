import { createSquaresEngine, type SquaresEngine } from './squares.engine';
import type { Event } from './types';

let engine: SquaresEngine | null = null;

// Surface worker failures instead of letting them die silently.
self.onerror = (event) => {
  console.error('squares.worker error:', event);
};

self.onmessageerror = (event) => {
  console.error('squares.worker message error:', event);
};

onmessage = (e: MessageEvent<Event>) => {
  const data = e.data;
  const name = data.name;

  if (name === 'init') {
    engine = createSquaresEngine(data.offscreenCanvas);

    engine.init({
      initialSquareSize: data.initialSquareSize,
      approximateSquareSize: data.approximateSquareSize,
      scaleX: data.scaleX,
      scaleY: data.scaleY,
      moveScale: data.moveScale,
      cursorRadius: data.cursorRadius,
      hoverReductionSpeed: data.hoverReductionSpeed,
      speed: data.speed,
      isInView: data.isInView,
      fadeY: data.fadeY,
      fadingColour: data.fadingColour,
      theme: data.theme,
    });
    return;
  }

  if (!engine) {
    return;
  }

  switch (name) {
    case 'start':
      engine.start(data.width, data.height, data.dpr);
      break;
    case 'resize':
      engine.resize(data.width, data.height, data.dpr);
      break;
    case 'updateState':
      engine.updateState({
        initialSquareSize: data.initialSquareSize,
        approximateSquareSize: data.approximateSquareSize,
        scaleX: data.scaleX,
        scaleY: data.scaleY,
        moveScale: data.moveScale,
        cursorRadius: data.cursorRadius,
        hoverReductionSpeed: data.hoverReductionSpeed,
        speed: data.speed,
        isInView: data.isInView,
        fadeY: data.fadeY,
        fadingColour: data.fadingColour,
        theme: data.theme,
      });
      break;
    case 'mouseMove':
      engine.mouseMove(data.isOut, data.x, data.y);
      break;
    default:
      break;
  }
};
