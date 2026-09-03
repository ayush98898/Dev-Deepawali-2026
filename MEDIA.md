# Media manifest

Every path below is wired up via `components/ui/MediaImage.tsx` and `components/ui/HeroVideo.tsx`,
and every path below **currently holds a placeholder file** — not photography, not stock, but
small procedurally-generated pieces (gradients + a silhouette motif + drifting "diya" points,
rendered from `art-gen.html` via a headless-browser screenshot/recording, entirely offline). They
exist so the site shows *something* right now instead of nothing. **Replace any file with a real
one at the same path and it swaps in automatically on the next page load — no code changes
needed.** If a file is ever deleted, that slot falls back to the underlying CSS atmosphere
gracefully rather than showing a broken-image icon.

Everything lives under `public/images/` and `public/videos/`.

One gap: `public/videos/hero-loop.mp4` does **not** exist — this sandbox's ffmpeg build has no
H.264 encoder, so only the `.webm` (VP8) could be generated. `HeroVideo` tries `.webm` first, so
most browsers (Chrome, Firefox, Edge) already play it; Safari/iOS will fall back to the poster
image until a real `.mp4` is added at that path.

## Hero video

| Path | Used for | Notes |
|---|---|---|
| `public/videos/hero-loop.mp4` | Hero background, primary source | H.264, 1920×1080 or 1280×720, **muted**, 8–20s loop, no hard cuts (it needs to loop invisibly), ideally under ~8MB so it doesn't fight the LCP image. Slow motion or long lens footage of the ghats / diyas / Ganga reads best — avoid handheld shake. |
| `public/videos/hero-loop.webm` | Hero background, preferred source (checked first) | Same content as the mp4, VP9/AV1 for a smaller file. Optional — mp4 alone is enough. |
| `public/images/hero-poster.jpg` | Video poster + still fallback for `prefers-reduced-motion` and slow connections | Same aspect/framing as the video's first frame, 1920×1080. |

The video is skipped entirely (poster shown instead) when the visitor has reduced-motion
enabled, and it never autoplays with sound (it's always muted, per browser autoplay rules
and the brief's "no cheesy effects" direction).

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
