import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { highlights } from "@/lib/content";

// Asymmetric editorial grid — the opening item spans two columns to break
// the generic uniform 3-column card pattern. With 8 items in 3 columns,
// only a single span-2 item (2 + 7×1 = 9 = 3 rows exactly) keeps every row
// full — a second span risks leaving an empty cell depending on how items
// wrap, so restraint here is a layout requirement, not just a style choice.
const spanClasses = (i: number) => (i === 0 ? "sm:col-span-2 lg:col-span-2" : "sm:col-span-1");

export default function Highlights() {
  return (
    <section className="relative bg-charcoal py-section">
      <div className="section-shell">
        <SectionHeading eyebrow="Experience Highlights" title="What You Will Move Through" align="left" />

        <div className="mt-16 grid gap-px overflow-hidden border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 60} className={spanClasses(i)}>
              <div className="group flex h-full flex-col justify-between gap-8 bg-charcoal p-8 transition-colors duration-500 hover:bg-charcoal-panel sm:p-10">
                <span className="text-xs text-gold-dim">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-display text-2xl text-ivory transition-colors group-hover:text-gold-bright">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-ivory-dim">{item.detail}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
