import { getIsEU } from '~/server-fns';

const GEO_TIMEOUT_MS = 1500;

// Fail-closed: SSR, timeout, or any error → 'eu' so we never skip gating for a
// potentially-EU visitor. Caller invokes this only when consent is unset.
export async function resolveRegion(): Promise<'eu' | 'non-eu'> {
  if (typeof window === 'undefined') return 'eu';

  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const res = await Promise.race([
      getIsEU(),
      new Promise<never>((_, reject) => {
        timer = setTimeout(
          () => reject(new Error('geo-timeout')),
          GEO_TIMEOUT_MS,
        );
      }),
    ]);
    return res.eu ? 'eu' : 'non-eu';
  } catch {
    return 'eu';
  } finally {
    clearTimeout(timer);
  }
}
