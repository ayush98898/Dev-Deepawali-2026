"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Fires a GA4 event and, if NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL is set,
 * a Google Ads conversion alongside it. No-ops safely if gtag hasn't loaded
 * (no env vars configured) — never throws on a missing tag.
 *
 * Usage: trackConversion("book_click") from a CTA's onClick.
 */
export function trackConversion(eventName: string) {
  if (typeof window === "undefined" || !window.dataLayer) return;

  const gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  gtag("event", eventName);

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (adsId && label) {
    gtag("event", "conversion", { send_to: `${adsId}/${label}` });
  }
}
