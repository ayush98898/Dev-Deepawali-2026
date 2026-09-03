import RevealOnScroll from "../ui/RevealOnScroll";

const threads = [
  "Old Kashi",
  "Ganga Aarti",
  "Ramnagar Fort",
  "Akashganga Festival",
  "Classical music",
  "Kathak",
  "Lanterns",
  "Fireworks",
  "Private Ganga cruise",
  "The illumination of all 84 ghats",
  "Banarasi food",
  "BHU",
  "New Vishwanath Temple",
];

export default function IntroStatement() {
  return (
    <section id="experience" className="relative bg-charcoal py-section">
      <div className="section-shell">
        <RevealOnScroll>
          <p className="font-display text-display-md italic text-balance text-ivory">
            Some cities are visited.
            <br />
            Kashi is experienced.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={150} className="mt-10 max-w-prose">
          <p className="text-lg text-ivory-dim">
            This is not sightseeing. It is an intentionally curated journey through the city that has
            watched the Ganga flow for thousands of years — woven from these threads:
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={250} className="mt-10">
          <ul className="flex flex-wrap gap-x-3 gap-y-3 text-sm sm:text-base">
            {threads.map((thread, i) => (
              <li key={thread} className="flex items-center gap-3 text-ivory-dim">
                <span>{thread}</span>
                {i < threads.length - 1 && <span aria-hidden className="text-gold-dim">·</span>}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
