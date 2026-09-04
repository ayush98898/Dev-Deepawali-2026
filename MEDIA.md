# Media manifest

Every path below is wired up via `components/ui/MediaImage.tsx` and `components/ui/HeroVideo.tsx`.
The **hero video and poster are now real** (see below); every other path still holds a
placeholder — small procedurally-generated pieces (gradients + a silhouette motif + drifting
"diya" points, rendered from `art-gen.html` via a headless-browser screenshot, entirely offline),
not photography or stock. **Replace any file with a real one at the same path and it swaps in
automatically on the next page load — no code changes needed.** If a file is ever deleted, that
slot falls back to the underlying CSS atmosphere gracefully rather than showing a broken-image
icon.

Everything lives under `public/images/` and `public/videos/`.

## Hero video — real

| Path | Used for | Notes |
|---|---|---|
| `public/videos/hero-loop.mp4` | Hero background | Real footage, from Wandermate's "Teaser — Akashganga 2026" clip: fireworks over the illuminated ghats. Re-encoded from the original 4K/60fps/64s source to 1920×1080/30fps/muted/H.264, 2-pass at ~2Mbps (~16MB) — full 1080p so it isn't upscaled on desktop, with a bitrate cap so the fireworks scenes (the hardest content to compress) don't balloon the file. An earlier 720p/low-bitrate pass looked visibly soft/blocky; this is the quality floor. |
| `public/images/hero-poster.jpg` | Video poster + still fallback for `prefers-reduced-motion` and slow connections | A frame pulled from the same source clip at the peak of the firework burst, 1920×1080. |

No `.webm` — mp4/H.264 alone already covers every major browser including Safari (which doesn't
support webm/VP9 well), so a second encode wasn't worth the extra file. The video is skipped
entirely (poster shown instead) when the visitor has reduced-motion enabled, and it never
autoplays with sound (always muted, per browser autoplay rules and the brief's "no cheesy
effects" direction). Loops back to the start after the full 64s clip plays through — this is a
narrative teaser rather than a short seamless loop, so the loop point isn't invisible, but that
reads as intentional for a hero this cinematic.

## Section images

| Path | Section | Aspect / notes |
|---|---|---|
| `public/images/ghats-panorama.jpg` | 84 Ghats | Wide panorama, ~2400×900 (2.6:1), the western-bank skyline from the water |
| `public/images/intro-old-kashi.jpg` | "Some cities are visited…" intro | Full-bleed background, any wide landscape from Old Kashi's lanes, shown at low opacity |
| `public/images/night-becomes-light-bg.jpg` | The Night Kashi Becomes Light | Full-bleed background, diyas / illuminated ghats, shown at low opacity behind the timeline |
| `public/images/akashganga-fort.jpg` | Akashganga | 4:3, Ramnagar Fort / festival scene |
| `public/images/cruise-ganga.jpg` | Private Ganga Cruise | Full-bleed background, boat/river at golden hour or night, shown at low opacity |
| `public/images/og-dev-deepawali.jpg` | `<head>` Open Graph / Twitter card (already referenced in `app/layout.tsx`) | 1200×630 exactly — this is what shows up when the link is shared on WhatsApp/social |

## Highlight card thumbnails

Eight small images for the "What You Will Move Through" grid — portrait or square works best
(the cards aren't tall), shown at ~40–60% opacity under a text scrim:

| Path | Highlight |
|---|---|
| `public/images/highlight-ganga-aarti.jpg` | Ganga Aarti |
| `public/images/highlight-akashganga.jpg` | Akashganga Festival |
| `public/images/highlight-ramnagar-fort.jpg` | Ramnagar Fort |
| `public/images/highlight-banarasi-culture.jpg` | Banarasi Culture |
| `public/images/highlight-ganga-cruise.jpg` | Private Ganga Cruise |
| `public/images/highlight-fort-dinner.jpg` | Fort Dinner |
| `public/images/highlight-old-kashi.jpg` | Old Kashi |
| `public/images/highlight-bhu.jpg` | BHU |

## Licensing note

The current files are original generative graphics with no licensing concerns at all — but
they are placeholders, not the finished site. Replace them with photography/video you own the
rights to (Wandermate's own shoot, or a properly licensed stock source).
