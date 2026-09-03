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

`lib/content.ts` only contains what was supplied in the brief. Two things are intentionally marked as pending rather than invented:

1. **`policySections` content** — the brief named the policy categories (cancellation, force majeure, etc.) but not their binding legal/financial text. Each entry currently reads *"Full terms to be confirmed by Wandermate before publishing"* — replace with real, legally-reviewed copy before launch.
2. **Testimonial attribution** — guest quotes were supplied without names/cities, so they're shown as "Verified traveler." Update `testimonials` in `lib/content.ts` if that detail becomes available.

## Images

No photography assets were supplied, so every section uses a CSS-only atmospheric treatment (gradients, a scattered "diya" glow layer, a grain overlay) rather than stock photography, per the brief's instruction not to invent visuals. To bring in real photography:

- Add files under `public/images/` (e.g. `hero-ganga-diyas.jpg`, `og-dev-deepawali.jpg` — the OG image path is already referenced in `app/layout.tsx`).
- Swap the relevant CSS background layer in a section component for an `next/image` `<Image>` (or a `background-image` if it needs to sit behind the gradient overlays already in place).
- Keep dark overlays only where needed for text contrast, per the brief's image direction.

## Design tokens

Colors, type scale, spacing and motion easing live in `tailwind.config.ts`; base styles (selection color, focus ring, grain overlay) live in `app/globals.css`. `prefers-reduced-motion` is respected globally.
