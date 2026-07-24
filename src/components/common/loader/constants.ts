export const LOADER_COLOUR = '#ED4937';
export const DEFAULT_HORIZONTAL_CUBES_LOADER = 20;

// If no `animationStopped` arrives within this window, assume the worker is
// dead and unlock scroll. Worst-case healthy run is ~1.5s + boot.
export const LOADER_WATCHDOG_MS = 8000;
