import Cookies from 'js-cookie';

export const CONSENT_VERSION = 1;
export const CONSENT_COOKIE = 'CookieConsent';

export type ConsentState = {
  v: number;
  ts: number;
  analytics: boolean;
  marketing: boolean;
};

const subscribers = new Set<(s: ConsentState) => void>();

// Multi-label public suffixes: for `*.pages.dev` the last two labels are
// themselves a public suffix, so a naive eTLD+1 would mis-compute the
// registrable domain and no-op cookie removal on preview hosts.
const KNOWN_PUBLIC_SUFFIXES = ['pages.dev', 'workers.dev'];

const getRegistrableDomain = (hostname: string): string => {
  if (!hostname.includes('.')) {
    return hostname;
  }

  for (const suffix of KNOWN_PUBLIC_SUFFIXES) {
    if (hostname === suffix || hostname.endsWith(`.${suffix}`)) {
      const suffixLabels = suffix.split('.').length;
      const labels = hostname.split('.');
      return labels.slice(-(suffixLabels + 1)).join('.');
    }
  }

  const labels = hostname.split('.');
  return labels.slice(-2).join('.');
};

// null = no valid decision yet (legacy string, bad JSON, or version mismatch)
// → re-prompt. No grandfathering of pre-versioned consent.
export function getConsent(): ConsentState | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = Cookies.get(CONSENT_COOKIE);
  if (raw === undefined) {
    return null;
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }

  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    !('v' in parsed) ||
    !('ts' in parsed) ||
    !('analytics' in parsed) ||
    !('marketing' in parsed)
  ) {
    return null;
  }

  const candidate = parsed as Record<string, unknown>;
  if (
    typeof candidate.v !== 'number' ||
    typeof candidate.ts !== 'number' ||
    typeof candidate.analytics !== 'boolean' ||
    typeof candidate.marketing !== 'boolean'
  ) {
    return null;
  }

  if (candidate.v !== CONSENT_VERSION) {
    return null;
  }

  return {
    v: candidate.v,
    ts: candidate.ts,
    analytics: candidate.analytics,
    marketing: candidate.marketing,
  };
}

// Synchronous on purpose: callers (and the banner's accept/decline) rely on
// getConsent() being correct immediately after, with no await/defer.
export function setConsent(input: {
  analytics: boolean;
  marketing: boolean;
}): void {
  if (typeof window === 'undefined') {
    return;
  }

  const state: ConsentState = {
    v: CONSENT_VERSION,
    ts: Date.now(),
    analytics: input.analytics,
    marketing: input.marketing,
  };

  Cookies.set(CONSENT_COOKIE, JSON.stringify(state), {
    expires: 365,
    sameSite: 'lax',
    secure:
      typeof window !== 'undefined'
        ? window.location.protocol === 'https:'
        : true,
  });

  emit(state);
}

export function hasAnalytics(): boolean {
  return getConsent()?.analytics ?? false;
}

export function hasMarketing(): boolean {
  return getConsent()?.marketing ?? false;
}

export function clearGoogleCookies(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const names = new Set<string>(['_ga', '_gcl_au']);

  for (const pair of document.cookie.split(';')) {
    const name = pair.split('=')[0]?.trim();
    if (name && name.startsWith('_ga_')) {
      names.add(name);
    }
  }

  const hostname = window.location.hostname;
  const registrable = getRegistrableDomain(hostname);

  // js-cookie no-ops unless domain/path match how GA set the cookie, so try
  // every plausible variant. Cross-subdomain removal is best-effort.
  for (const name of names) {
    Cookies.remove(name, { path: '/' });
    Cookies.remove(name, { domain: hostname, path: '/' });
    Cookies.remove(name, { domain: `.${registrable}`, path: '/' });
  }
}

export function applyConsentToGtag(state: ConsentState): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.gtag?.('consent', 'update', {
    analytics_storage: state.analytics ? 'granted' : 'denied',
    ad_storage: state.marketing ? 'granted' : 'denied',
    ad_user_data: state.marketing ? 'granted' : 'denied',
    ad_personalization: state.marketing ? 'granted' : 'denied',
    security_storage: 'granted',
  });

  if (state.analytics || state.marketing) {
    window.loadGtag?.();
  }
}

export function onConsentChange(cb: (s: ConsentState) => void): () => void {
  subscribers.add(cb);
  return () => {
    subscribers.delete(cb);
  };
}

function emit(state: ConsentState): void {
  for (const cb of subscribers) {
    cb(state);
  }
}
