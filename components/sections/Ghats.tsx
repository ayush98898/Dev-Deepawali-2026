import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { ghats } from "@/lib/content";

export default function Ghats() {
  return (
    <section className="relative bg-charcoal-soft py-section">
      <div className="section-shell">
        <SectionHeading
          eyebrow="The Western Bank"
          title="84 Ghats. One Unbroken View."
          subtitle="From the water, Varanasi's western bank unfolds as a single, uninterrupted line — the private cruise holds that view for the length of the evening."
        />

        {/* Editorial skyline strip standing in for a panoramic photograph */}
        <RevealOnScroll delay={150} className="relative mt-16 h-56 overflow-hidden rounded-sm border border-ivory/10 sm:h-72">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#14110D_0%,#0B0A08_100%)]" />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-2/3 opacity-90"
            style={{
              backgroundImage:
                "repeating-linear-gradient(100deg, rgba(244,239,230,0.05) 0px, rgba(244,239,230,0.05) 2px, transparent 2px, transparent 34px)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-saffron/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex h-2 items-end gap-1 px-4 pb-3 sm:h-3">
            {Array.from({ length: 46 }).map((_, i) => (
              <span
                key={i}
                aria-hidden
                className="h-1 w-1 flex-none animate-flicker rounded-full bg-gold-bright/80"
                style={{ animationDelay: `${(i % 9) * 0.3}s` }}
              />
            ))}
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {ghats.map((ghat, i) => (
            <RevealOnScroll key={ghat.name} delay={i * 80}>
              <p className="font-display text-lg text-gold-bright">{ghat.name}</p>
              <p className="mt-1 text-sm text-ivory-dim">{ghat.note}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
