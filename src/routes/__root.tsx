import { wrapCreateRootRouteWithSentry } from '@sentry/tanstackstart-react';
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import * as React from 'react';
import { toast } from 'sonner';

import appCss from '~/app.scss?url';
import {
  DefaultCatchBoundary,
  ErrorBoundary,
  LazyExternalResources,
  NotFound,
} from '~/components/common';
import { OrganizationJsonLd } from '~/components/common/seo/microformats';
// Eager on purpose
import CookieConsent from '~/components/ui/cookies/CookieConsent';
import CookiePreferences from '~/components/ui/cookies/CookiePreferences';
import Toaster from '~/components/ui/sonner';
import { cn, seo, trackCalendlyClick } from '~/utils';
import {
  CONSENT_COOKIE,
  CONSENT_VERSION,
  applyConsentToGtag,
  clearGoogleCookies,
  getConsent,
  onConsentChange,
  setConsent,
} from '~/utils/consent';
import { resolveRegion } from '~/utils/region';
// Registers ScrollTrigger once, before any consumer builds a timeline.
import '~/utils/gsap-init';

// Synchronous on purpose: setConsent's JSON overwrites the class component's
// string write to the same cookie in the same tick.
function onCookiesAccepted() {
  setConsent({ analytics: true, marketing: true });
  const state = getConsent();
  if (state) {
    applyConsentToGtag(state);
  }
  toast.success('Cookies accepted!');
}

function onCookiesDeclined() {
  setConsent({ analytics: false, marketing: false });
  // Order matters: push the denied consent update before clearing cookies.
  const state = getConsent();
  if (state) {
    applyConsentToGtag(state);
  }
  clearGoogleCookies();
  toast.error('Cookies declined!');
}

const CALENDLY_RESOURCES = [
  {
    type: 'stylesheet' as const,
    href: 'https://assets.calendly.com/assets/external/widget.css',
  },
  {
    type: 'script' as const,
    href: 'https://assets.calendly.com/assets/external/widget.js',
  },
];

// Browser gate: classic (non-module) inline script in <head> that swaps the
// document for an "update your browser" page when a feature below the
// build.target runtime floor is missing (.at / hasOwn / replaceAll / private
// fields). createElement/textContent only — the string must contain no `<`,
// or an embedded `</head>` would split the SSR document.
const browserGateScript = `(function(){if(![].at||!Object.hasOwn||!String.prototype.replaceAll||(function(){try{Function('"use strict";class _C{#m(){return 1}}');return false;}catch(e){return true;}})()){var d=document,r=d.documentElement;while(r.firstChild)r.removeChild(r.firstChild);var b=d.createElement('body');b.setAttribute('style','margin:0;padding:24px;font-family:-apple-system,BlinkMacSystemFont,system-ui,sans-serif;background:#000;color:#e0deda;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center');var h=d.createElement('h1');h.setAttribute('style','font-size:28px;margin:0 0 16px;font-weight:600');h.textContent='Your browser is out of date';var p=d.createElement('p');p.setAttribute('style','font-size:16px;line-height:1.5;max-width:480px;margin:0');p.textContent='Please update your browser to view this site. On iPhone or iPad, update through Settings, General, Software Update. On desktop, please upgrade to the latest Chrome, Safari, Firefox, or Edge.';b.appendChild(h);b.appendChild(p);r.appendChild(b);}})();`;

export const Route = wrapCreateRootRouteWithSentry(
  createRootRouteWithContext,
)()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        name: 'author',
        content: 'Redduck',
      },
      ...seo({
        title: 'Blockchain Web3 Development & Consulting Company | Redduck',
        description: `We’re a team of engineers, product architects, and builders focused on helping Web3 teams launch faster and build smarter.
No over-engineering. No vague buzzwords. No code we’d be ashamed to show.`,
        image: 'https://redduck.io/thumbnail.png',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),

  errorComponent: (props) => (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>Something went wrong</title>
        <link rel="stylesheet" href={appCss} />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f0f0f',
          color: '#f5f5f5',
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <DefaultCatchBoundary {...props} />
      </body>
    </html>
  ),
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  // Gate the MOUNT of the banner (the class ignores external signals after
  // mount). False on SSR + client → no hydration mismatch.
  const [bannerAllowed, setBannerAllowed] = React.useState(false);

  // Global Calendly booking listener — fires Google Ads conversion on all pages
  React.useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (
        e.origin === 'https://calendly.com' &&
        e.data?.event === 'calendly.event_scheduled'
      ) {
        trackCalendlyClick();
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  // Region bootstrap (only when consent is unset). Non-EEA: IN-MEMORY grant,
  // deliberately NO setConsent so a wrong geo result is bounded to the session.
  React.useEffect(() => {
    void (async () => {
      if (getConsent() !== null) return;
      const region = await resolveRegion();
      if (region === 'non-eu') {
        applyConsentToGtag({
          v: CONSENT_VERSION,
          ts: Date.now(),
          analytics: true,
          marketing: true,
        });
      } else {
        setBannerAllowed(true);
      }
    })();
  }, []);

  // Unmount the banner once any consent decision is recorded (incl. via the
  // panel) — the class can't hide itself on an external change.
  React.useEffect(() => onConsentChange(() => setBannerAllowed(false)), []);

  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: browserGateScript }} />
        <HeadContent />
        <OrganizationJsonLd />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Inter:opsz,wght@14..32,400..900&display=swap"
          media="print"
          onLoad={(e) => {
            (e.currentTarget as HTMLLinkElement).media = 'all';
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Inter:opsz,wght@14..32,400..900&display=swap"
          />
        </noscript>

        {/*
          Boot-time consent authority: Consent Mode default-denied first, then a
          tiny cookie parser that loads gtag for a returning consenter. No
          unconditional load listener. CONSENT_VERSION/CONSENT_COOKIE are
          interpolated (not hardcoded) so they can't skew from ~/utils/consent.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { window.dataLayer.push(arguments); }
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                security_storage: 'granted'
              });
              window.loadGtag = function() {
                if (window.__gtagLoaded) return;
                window.__gtagLoaded = true;
                var s = document.createElement('script');
                s.src = 'https://www.googletagmanager.com/gtag/js?id=G-DNC5YVKC74';
                s.async = true;
                document.head.appendChild(s);
                gtag('js', new Date());
                gtag('config', 'G-DNC5YVKC74');
                gtag('config', 'AW-18172241178');
              };
              try {
                var m = document.cookie.match(/(?:^|;\\s*)${CONSENT_COOKIE}=([^;]*)/);
                if (m) {
                  var c = JSON.parse(decodeURIComponent(m[1]));
                  if (c && c.v === ${CONSENT_VERSION} && c.analytics === true) {
                    window.loadGtag();
                    gtag('consent', 'update', {
                      analytics_storage: 'granted',
                      ad_storage: c.marketing ? 'granted' : 'denied',
                      ad_user_data: c.marketing ? 'granted' : 'denied',
                      ad_personalization: c.marketing ? 'granted' : 'denied'
                    });
                  }
                }
              } catch (e) {}
            `,
          }}
        />

        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .js-only {
                  display: none;
                }
              `,
            }}
          />
        </noscript>
      </head>

      <body
        id="body"
        suppressHydrationWarning
        {...{ 'cz-shortcut-listen': 'true' }}
        className="!overflow-x-hidden"
      >
        <noscript>
          <div className="sticky left-0 top-0 z-50 w-full bg-black py-4">
            <p className="text-center text-[16px] leading-[20px]">
              This website requires JavaScript to function correctly. Please
              enable JavaScript in your browser settings and reload the page.
            </p>
          </div>
        </noscript>

        <LazyExternalResources resources={CALENDLY_RESOURCES} />

        <React.Suspense fallback={null}>
          <ErrorBoundary name="toaster" fallback={null}>
            <Toaster />
          </ErrorBoundary>
          {bannerAllowed && (
            <ErrorBoundary name="cookie-consent" fallback={null}>
              <CookieConsent
                location="bottom"
                buttonText="Agree"
                declineButtonText="Decline"
                enableDeclineButton
                onAccept={onCookiesAccepted}
                onDecline={onCookiesDeclined}
                containerClasses={cn(
                  '!bottom-[12px] left-[12px] right-[12px] w-auto',
                  'sm:left-auto sm:right-[24px] sm:!bottom-[24px] sm:w-[380px]',
                  'border bg-gray text-black',
                  'flex flex-col overflow-hidden',
                )}
                buttonWrapperClasses={cn(
                  'flex h-[48px] w-full border-t',
                  '*:text-[15px] *:text-black *:transition-all *:duration-100 hover:*:!opacity-[90%]',
                )}
                buttonClasses={cn('bg-red w-full border-r')}
                // Equal visual mass to Accept (avoids dark-pattern); !text-white
                // overrides the wrapper's *:text-black.
                declineButtonClasses={cn('bg-black w-full !text-white')}
                contentClasses={cn('w-full p-[20px]')}
                flipButtons
              >
                <p className="mb-[6px] text-[18px] uppercase leading-[24px]">
                  cookies
                </p>
                <p className="text-[13px] leading-[19px]">
                  We use cookies for analytics and to measure advertising
                  conversions (third-party provider: Google). See our{' '}
                  <Link
                    to="/privacy-policy"
                    resetScroll
                    className="underline hover:opacity-80"
                  >
                    Privacy Policy
                  </Link>{' '}
                  for details.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent('open-cookie-settings'),
                    )
                  }
                  className="mt-[10px] self-start text-[12px] leading-[18px] underline hover:opacity-80"
                >
                  Manage preferences
                </button>
              </CookieConsent>
            </ErrorBoundary>
          )}
          <ErrorBoundary name="cookie-preferences" fallback={null}>
            <CookiePreferences />
          </ErrorBoundary>
        </React.Suspense>

        {children}
        <Scripts />
      </body>
    </html>
  );
}
