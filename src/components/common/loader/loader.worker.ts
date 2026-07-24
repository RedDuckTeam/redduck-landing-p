import { createLoaderEngine, type LoaderEngine } from './loader.engine';
import type { Event } from './types';

let engine: LoaderEngine | null = null;

// Surface worker failures so a dead loader worker is observable.
self.onerror = (event) => {
  console.error('loader.worker error:', event);
};

self.onmessageerror = (event) => {
  console.error('loader.worker message error:', event);
};

onmessage = (e: MessageEvent<Event>) => {
  const data = e.data;
  const name = data.name;

  if (name === 'init') {
    engine = createLoaderEngine(data.offscreenCanvas, {
      onAnimationStarted: () => {
        const event: Event = { name: 'animationStarted' };
        self.postMessage(event);
      },
      onAnimationStopped: () => {
        const event: Event = { name: 'animationStopped' };
        self.postMessage(event);
      },
    });

    engine.init({
      initialSquareSize: data.initialSquareSize,
      approximateSquareSize: data.approximateSquareSize,
      duration: data.duration,
      initialDelay: data.initialDelay,
      duckScale: data.duckScale,
    });
    return;
  }

  if (!engine) {
    return;
  }

  switch (name) {
    case 'start':
      engine.start(data.width, data.height);
      break;
    case 'resize':
      engine.resize(data.width, data.height);
      break;
    case 'updateState':
      engine.updateState({
        initialSquareSize: data.initialSquareSize,
        approximateSquareSize: data.approximateSquareSize,
        duration: data.duration,
        initialDelay: data.initialDelay,
        duckScale: data.duckScale,
      });
      break;
    default:
      break;
  }
};
