import RevealOnScroll from "../ui/RevealOnScroll";
import MediaImage from "../ui/MediaImage";

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
    <section id="experience" className="relative overflow-hidden bg-charcoal py-section">
      <MediaImage
        src="/images/intro-old-kashi.jpg"
        alt="A lane in Old Kashi"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,8,0.5)_0%,rgba(11,10,8,0.92)_70%)]" />

      <div className="section-shell relative">
        <RevealOnScroll>
          <h2 className="font-display text-display-md italic text-balance text-ivory">
            Some cities are visited.
            <br />
            Kashi is experienced.
          </h2>
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
