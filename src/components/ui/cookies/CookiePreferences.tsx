import { useEffect, useState } from 'react';

import { cn } from '~/utils';
import {
  applyConsentToGtag,
  clearGoogleCookies,
  getConsent,
  setConsent,
} from '~/utils/consent';

// Footer "Cookie Settings" and banner "Manage preferences" dispatch this event.
const OPEN_EVENT = 'open-cookie-settings';

export default function CookiePreferences() {
  const [visible, setVisible] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const onOpen = () => {
      const current = getConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setVisible(true);
    };

    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  const persist = (next: { analytics: boolean; marketing: boolean }) => {
    const prev = getConsent();

    setConsent(next);

    const applied = getConsent();
    if (applied) {
      applyConsentToGtag(applied);
    }

    const revokedAnalytics = (prev?.analytics ?? false) && !next.analytics;
    const revokedMarketing = (prev?.marketing ?? false) && !next.marketing;
    if (revokedAnalytics || revokedMarketing) {
      clearGoogleCookies();
    }

    setVisible(false);
  };

  const acceptAll = () => persist({ analytics: true, marketing: true });
  const rejectAll = () => persist({ analytics: false, marketing: false });
  const saveChoices = () => persist({ analytics, marketing });

  if (!visible) {
    return null;
  }

  return (
    // Centered via absolute+translate, NOT flex: app.scss `body > div {
    // display:block !important }` would override flex on this body-child overlay.
    <div className={cn('fixed inset-0 z-[1000] bg-black/60')}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie preferences"
        className={cn(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
          'flex w-[calc(100%-32px)] max-w-[400px] flex-col',
          'max-h-[90vh] overflow-y-auto',
          'bg-gray border text-black',
        )}
      >
        <div className="p-[24px]">
          <p className="mb-[6px] text-[20px] uppercase leading-[26px]">
            cookie preferences
          </p>
          <p className="mb-[18px] text-[13px] leading-[19px]">
            Choose which cookies you allow. Necessary cookies are always on.
          </p>

          <div className="flex flex-col gap-[14px]">
            <CategoryRow
              title="Necessary"
              description="Required for the site to function. Always active."
              checked
              disabled
            />
            <CategoryRow
              title="Analytics"
              description="Helps us understand how the site is used."
              checked={analytics}
              onChange={setAnalytics}
            />
            <CategoryRow
              title="Marketing"
              description="Used to measure and improve advertising."
              checked={marketing}
              onChange={setMarketing}
            />
          </div>
        </div>

        <div className="flex w-full border-t *:text-[14px] *:text-black *:transition-all *:duration-100 hover:*:!opacity-[90%]">
          <button
            type="button"
            onClick={rejectAll}
            className={cn('bg-dark-gray h-[48px] w-full border-r')}
          >
            Reject all
          </button>
          <button
            type="button"
            onClick={saveChoices}
            className={cn('bg-gray h-[48px] w-full border-r')}
          >
            Save
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className={cn('bg-red h-[48px] w-full')}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

type CategoryRowProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
};

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: CategoryRowProps) {
  return (
    <label
      className={cn(
        'flex items-start justify-between gap-[16px]',
        disabled ? 'cursor-default opacity-70' : 'cursor-pointer',
      )}
    >
      <span className="flex flex-col">
        <span className="text-[14px] uppercase leading-[20px]">{title}</span>
        <span className="text-[12px] leading-[17px] opacity-80">
          {description}
        </span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="accent-red mt-[2px] size-[18px] shrink-0"
        aria-label={title}
      />
    </label>
  );
}
