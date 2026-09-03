import RevealOnScroll from "../ui/RevealOnScroll";
import MediaImage from "../ui/MediaImage";
import { cruise } from "@/lib/content";

export default function Cruise() {
  return (
    <section className="relative overflow-hidden bg-charcoal-soft py-section">
      <MediaImage
        src="/images/cruise-ganga.jpg"
        alt="Private boat on the Ganga during Dev Deepawali"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      {/* Day-to-night gradient sweep across the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(30,51,80,0.45)_0%,rgba(11,10,8,0.3)_28%,rgba(11,10,8,0.3)_65%,rgba(201,105,31,0.26)_100%)]"
      />

      <div className="section-shell relative">
        <RevealOnScroll className="max-w-2xl">
          <span className="eyebrow">{cruise.eyebrow}</span>
          <p className="mt-4 font-display text-display-lg text-balance text-ivory">{cruise.title}</p>
        </RevealOnScroll>

        <div className="mt-16 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {cruise.items.map((item, i) => (
            <RevealOnScroll key={item} delay={i * 70} className="border-t border-ivory/10 pt-5">
              <p className="text-ivory">{item}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
