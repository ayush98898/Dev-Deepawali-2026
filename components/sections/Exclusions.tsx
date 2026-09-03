import RevealOnScroll from "../ui/RevealOnScroll";
import { exclusions } from "@/lib/content";

export default function Exclusions() {
  return (
    <section className="relative bg-charcoal-soft py-20">
      <div className="section-shell">
        <RevealOnScroll className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-20">
          <p className="eyebrow flex-none lg:w-48">Not Included</p>
          <ul className="grid flex-1 gap-x-8 gap-y-3 text-sm text-ivory-dim sm:grid-cols-2">
            {exclusions.map((item) => (
              <li key={item} className="flex items-baseline gap-3">
                <span aria-hidden className="text-ivory-faint">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
