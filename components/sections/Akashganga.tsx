import RevealOnScroll from "../ui/RevealOnScroll";
import { akashganga } from "@/lib/content";

export default function Akashganga() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-section">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-diya-glow blur-2xl" />

      <div className="section-shell relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <RevealOnScroll className="flex flex-col gap-6">
          <span className="eyebrow">{akashganga.eyebrow}</span>
          <p className="font-display text-display-md text-balance text-ivory">{akashganga.title}</p>
          <p className="max-w-prose text-ivory-dim">
            Entry is by QR code, not by queue. What follows is curated for a small number of guests —
            an afternoon built around Ramnagar Fort's history, craft, and classical performance.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 border-t border-ivory/10 pt-8 sm:grid-cols-2">
            {akashganga.items.map((item) => (
              <li key={item} className="flex items-baseline gap-3 text-ivory-dim">
                <span aria-hidden className="h-1 w-1 flex-none rounded-full bg-gold-bright" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
