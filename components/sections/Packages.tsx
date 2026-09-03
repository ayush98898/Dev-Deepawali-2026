import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import Button from "../ui/Button";
import { packages } from "@/lib/content";

export default function Packages() {
  return (
    <section id="packages" className="relative bg-charcoal py-section">
      <div className="section-shell">
        <SectionHeading eyebrow="Choose Your Journey" title="Premium or Luxury" align="center" />

        <p className="mx-auto mt-4 max-w-md text-center text-sm uppercase tracking-widest2 text-gold-dim">
          Limited availability · both packages
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-6">
          {packages.map((pkg, i) => (
            <RevealOnScroll key={pkg.id} delay={i * 120}>
              <div
                className={`flex h-full flex-col justify-between gap-10 border p-10 transition-colors duration-500 sm:p-12 ${
                  pkg.featured
                    ? "border-gold-bright/50 bg-charcoal-panel shadow-[0_0_60px_-15px_rgba(231,200,115,0.25)]"
                    : "border-ivory/10 bg-charcoal-soft"
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-display text-3xl text-ivory">{pkg.name}</p>
                    {pkg.featured && (
                      <span className="text-[10px] uppercase tracking-widest2 text-gold-bright">Recommended</span>
                    )}
                  </div>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-display text-4xl text-gold-bright sm:text-5xl">{pkg.price}</span>
                    <span className="text-sm text-ivory-dim">{pkg.unit}</span>
                  </div>
                  <p className="mt-1 text-sm text-ivory-faint">{pkg.duration}</p>

                  <ul className="mt-8 flex flex-col gap-3">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-baseline gap-3 text-sm text-ivory-dim">
                        <span aria-hidden className="text-gold-bright">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href="#booking" variant={pkg.featured ? "primary" : "secondary"} className="w-full">
                  {pkg.cta}
                </Button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
