import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { nightBecomesLight } from "@/lib/content";

export default function NightBecomesLight() {
  return (
    <section id="journey" className="relative overflow-hidden bg-charcoal py-section">
      {/* Luminosity increases toward the base of the section, echoing dusk to full illumination */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,8,0)_0%,rgba(201,105,31,0.05)_45%,rgba(231,200,115,0.16)_100%)]"
      />

      <div className="section-shell relative">
        <SectionHeading eyebrow="The Main Event" title="The Night Kashi Becomes Light" />

        <div className="relative mt-16 flex flex-col gap-0">
          <div aria-hidden className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-ivory/15 via-gold/40 to-gold-bright sm:left-[11px]" />

          {nightBecomesLight.map((step, i) => (
            <RevealOnScroll key={step.time} delay={i * 90} className="relative flex gap-6 py-7 sm:gap-10">
              <span
                aria-hidden
                className="relative z-10 mt-1.5 h-3.5 w-3.5 flex-none rounded-full border border-gold-bright/70 bg-charcoal shadow-[0_0_14px_3px_rgba(231,200,115,0.35)]"
                style={{ opacity: 0.5 + (i / (nightBecomesLight.length - 1)) * 0.5 }}
              />
              <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
                <span className="w-28 flex-none text-xs uppercase tracking-widest2 text-gold-bright/90 sm:text-sm">
                  {step.time}
                </span>
                <p className="font-display text-xl text-ivory sm:text-2xl">{step.title}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
