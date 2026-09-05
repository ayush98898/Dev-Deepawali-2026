# Dev Deepawali 2026 — Varanasi

Premium experience website for Wandermate's Dev Deepawali 2026 journey. Next.js (App Router) + TypeScript + Tailwind CSS, no UI/animation dependency beyond React itself.

## Getting started

```bash
npm install
npm run dev
```

Production build: `npm run build && npm start`.

## Structure

- `app/` — route, layout, global styles, SEO/OG metadata
- `components/sections/` — one file per page section (Hero, Itinerary, Packages, …)
- `components/ui/` — shared primitives (`Button`, `SectionHeading`, `RevealOnScroll`)
- `lib/content.ts` — **single source of truth** for all factual copy (pricing, itinerary, contacts, testimonials, inclusions/exclusions). Edit here, not in components.
- `lib/useInView.ts` — lightweight IntersectionObserver hook powering scroll reveals

## Content rule

`lib/content.ts` only contains what was supplied in the brief or the source PDF
(`Dev_Deepawali_2026.pdf`) — nothing invented. `policySections` is now the verbatim
Booking Policies text from that PDF (pages 18–20): Booking & Payment, Pricing,
Cancellation & Refund, Rescheduling, Force Majeure, Itinerary Changes, Guest Conduct &
Safety, Identification, Liability. One thing is still intentionally marked as a gap:
**testimonial attribution** — guest quotes were supplied without names/cities, so they're
shown as "Verified traveler." Update `testimonials` in `lib/content.ts` if that detail
becomes available.

## Images & video

Every section's photo/video slot is wired up (`components/ui/MediaImage.tsx`,
`components/ui/HeroVideo.tsx`). The **hero background video and poster are real** — cut down
from Wandermate's own "Teaser — Akashganga 2026" footage. Every other slot still holds a
**placeholder**: small, original, procedurally-generated art (gradients + silhouette + drifting
diya points), not real photography. **See [`MEDIA.md`](./MEDIA.md) for the exact file path,
dimensions, and notes for every slot** — overwrite any file at its documented path under
`public/images/` or `public/videos/` with real photography/video and it swaps in automatically,
no code changes. If a file is ever removed instead, that slot falls back gracefully to the
underlying CSS atmosphere rather than showing a broken-image icon.

## Design tokens

Colors, type scale, spacing and motion easing live in `tailwind.config.ts`; base styles (selection color, focus ring, grain overlay) live in `app/globals.css`. `prefers-reduced-motion` is respected globally.

## SEO & Google Ads readiness

**Structured data** (`lib/structuredData.ts`, sourced from `lib/content.ts` — nothing hardcoded twice):
- `TravelAgency` (Organization) schema in `app/layout.tsx` — name, address, phone, `sameAs` social links
- `Event` schema in `app/layout.tsx` — Dev Deepawali 2026 dates, location, and an `Offer` per package (Premium/Luxury) with real pricing
- `FAQPage` schema in `components/sections/Policy.tsx` — the booking-policy accordion, each section's `title` paired with a natural-language `question` field in `lib/content.ts`, answered with the same real policy text

Validate any of these anytime at [Google's Rich Results Test](https://search.google.com/test/rich-results) against the live URL.

**Crawlability**: `app/sitemap.ts` and `app/robots.ts` (Next.js's typed conventions — they generate `/sitemap.xml` and `/robots.txt` automatically). `alternates.canonical` is set in `app/layout.tsx`.

**Conversion tracking** (`components/GoogleTag.tsx`, `lib/analytics.ts`) — entirely env-var driven, renders nothing and tracks nothing until configured. Add to `.env.local` (never commit real IDs):

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX          # GA4, optional
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX           # Google Ads, optional
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=AbCdEfG  # Ads conversion action label, optional
```

With `NEXT_PUBLIC_GOOGLE_ADS_ID` and the conversion label both set, `trackConversion()` fires a
Google Ads conversion alongside the GA4 event. It's already wired to every primary CTA — hero
"Book Your Experience"/"Explore the Journey", nav "Book Now" (desktop + mobile), each package's
choose button, and both WhatsApp buttons (`Button`'s `trackEvent` prop, or call
`trackConversion("event_name")` directly for anything not using `Button`).

**Privacy Policy** (`app/privacy/page.tsx`, linked in the footer) — required by Google Ads for
sites running conversion tracking. It's an honest description of what this site actually does
(no on-site forms; WhatsApp/phone/email handle enquiries; optional GA4/Ads cookies) — **have it
reviewed by counsel familiar with India's DPDP Act, 2023 before relying on it commercially**,
per the note at the bottom of the page itself.

**What's not covered here** (Google Ads' own approval process, not code): landing page policy
compliance for the travel vertical, billing setup, keyword/ad copy strategy, and Ads account
verification — those happen inside the Google Ads console, not this repo.
