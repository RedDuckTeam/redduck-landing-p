import { hasMarketing } from './consent';
import { isInAppBrowser } from './iab-detector';

import { ANALYTICS_EVENTS, GOOGLE_ADS } from '../constants/analytics';
import { LINKS } from '../constants/links';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Calendly: any;
  }
}

export const bgImg = (path: string) => {
  return {
    backgroundImage: `url(${path})`,
  };
};

export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== undefined && value !== null;
}

export function shouldBeUnreachable(value: never) {
  return value;
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function clearObject(obj: Record<string, unknown> | object) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => {
      if (!isDefined(v)) {
        return false;
      }

      if (v === '') {
        return false;
      }

      if (Array.isArray(v)) {
        return v.length > 0;
      }

      return true;
    }),
  );
}

export function toRange(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function trackEvent(eventName: string) {
  window?.gtag?.('event', eventName);
}

export function trackConversion(label: string) {
  if (!hasMarketing()) return;
  window?.gtag?.('event', 'conversion', {
    send_to: label,
    value: 1.0,
    currency: 'USD',
  });
}

export function trackCalendlyClick() {
  trackEvent(ANALYTICS_EVENTS.CalendlyClick);
  trackConversion(GOOGLE_ADS.CalendlyConversionLabel);
}

export function trackFormConversion() {
  trackConversion(GOOGLE_ADS.FormConversionLabel);
}

export function openCalendlyPopup(url: string = LINKS.Calendly) {
  if (typeof window === 'undefined') {
    return;
  }

  if (window.Calendly) {
    window.Calendly.showPopupWidget(url);
    return;
  }

  // In-app WebViews swallow window.open(_blank); same-tab navigation from a
  // user gesture still works.
  if (isInAppBrowser()) {
    window.location.href = url;
    return;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
}
