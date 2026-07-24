/**
 * sessionStorage-gated single `location.reload()` for recovering from stale-
 * deploy chunk 404s. The flag prevents an infinite reload loop if the failure
 * persists after reloading.
 *
 * @param key Stable identifier for the failure class (e.g. `'chunk-load'`).
 * @returns `true` if a reload was triggered, `false` if already used this session.
 */
export function reloadOnce(key: string): boolean {
  // SSR / no-DOM guard — reloading is a browser-only concern.
  if (typeof window === 'undefined') {
    return false;
  }

  const storageKey = `reload-once:${key}`;

  try {
    if (window.sessionStorage.getItem(storageKey)) {
      // Already reloaded once for this key this session — do not loop.
      return false;
    }

    window.sessionStorage.setItem(storageKey, '1');
  } catch {
    // sessionStorage can throw (private mode quota, partitioned storage).
    // Without a durable flag we cannot guarantee a single reload, so we bail
    // rather than risk an infinite loop.
    return false;
  }

  window.location.reload();
  return true;
}
