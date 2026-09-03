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

## Images & video

Every section's photo/video slot is wired up (`components/ui/MediaImage.tsx`,
`components/ui/HeroVideo.tsx`) and currently holds a **placeholder** — small, original,
procedurally-generated art (gradients + silhouette + drifting diya points), not real
photography. **See [`MEDIA.md`](./MEDIA.md) for the exact file path, dimensions, and notes
for every slot** — overwrite any file at its documented path under `public/images/` or
`public/videos/` with real photography/video and it swaps in automatically, no code changes.
If a file is ever removed instead, that slot falls back gracefully to the underlying CSS
atmosphere rather than showing a broken-image icon.

## Design tokens

Colors, type scale, spacing and motion easing live in `tailwind.config.ts`; base styles (selection color, focus ring, grain overlay) live in `app/globals.css`. `prefers-reduced-motion` is respected globally.
