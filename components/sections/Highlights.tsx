import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import MediaImage from "../ui/MediaImage";
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
              <div className="group relative flex h-full flex-col justify-between gap-8 overflow-hidden bg-charcoal p-8 transition-colors duration-500 hover:bg-charcoal-panel sm:p-10">
                <MediaImage
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity duration-700 group-hover:opacity-60"
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/10" />
                <span className="relative text-xs text-gold-dim">{String(i + 1).padStart(2, "0")}</span>
                <div className="relative">
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
