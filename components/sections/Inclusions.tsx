import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { inclusionCategories } from "@/lib/content";
import { ArchIcon, CarIcon, GuideIcon, FlameIcon, BoatIcon, BowlIcon, SupportIcon, ScrollIcon } from "../Icons";

const icons = [ArchIcon, CarIcon, GuideIcon, FlameIcon, BoatIcon, BowlIcon, SupportIcon, ScrollIcon];

export default function Inclusions() {
  return (
    <section id="inclusions" className="relative bg-charcoal-soft py-section">
      <div className="section-shell">
        <SectionHeading eyebrow="Every Detail Handled" title="What's Included" />

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {inclusionCategories.map((cat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <RevealOnScroll key={cat.title} delay={i * 60} className="flex flex-col gap-4">
                <Icon />
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-ivory">{cat.title}</p>
                  <p className="mt-2 text-sm text-ivory-dim">{cat.detail}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
