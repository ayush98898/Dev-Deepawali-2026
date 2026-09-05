import Script from "next/script";

/**
 * Loads Google tag (gtag.js) for GA4 and/or Google Ads conversion tracking,
 * driven entirely by env vars so no ID is hardcoded into the repo. Renders
 * nothing if neither is set — safe to ship with no config.
 *
 * Set in .env.local (see README):
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX      (GA4, optional)
 *   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX       (Google Ads, optional)
 */
export default function GoogleTag() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const targets = [gaId, adsId].filter(Boolean);

  if (targets.length === 0) return null;

  const primary = targets[0];

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${primary}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${targets.map((id) => `gtag('config', '${id}');`).join("\n          ")}
        `}
      </Script>
    </>
  );
}
