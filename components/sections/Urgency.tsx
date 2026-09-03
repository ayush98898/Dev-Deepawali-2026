import RevealOnScroll from "../ui/RevealOnScroll";

export default function Urgency() {
  return (
    <section className="relative bg-charcoal py-20">
      <div className="section-shell">
        <RevealOnScroll className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="eyebrow">Limited Seats</span>
          <p className="font-display text-2xl text-ivory sm:text-3xl">First come. First served.</p>
          <p className="text-ivory-dim">
            Availability is genuinely limited by the Akashganga festival's seating, the cruise's
            capacity, and the number of hotel rooms held for this dates. Once each fills, it fills.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
