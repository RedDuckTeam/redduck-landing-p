declare global {
  interface Window {
    // Injected by wallet in-app browsers. Read-only — never assign to these.
    ethereum?: unknown;
    solana?: unknown;
  }
}

/**
 * Capability-based in-app-browser detection: wallet/social WebViews are
 * invisible to UA sniffing but inject a Web3 provider onto `window`, so we key
 * off that. Read-only (never writes to the providers); SSR-safe.
 *
 * Note: MetaMask can inject `window.ethereum` late; for the user-gesture CTA
 * path the provider is reliably present by tap time.
 */
export function isInAppBrowser(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return (
    typeof window.ethereum !== 'undefined' ||
    typeof window.solana !== 'undefined'
  );
}
