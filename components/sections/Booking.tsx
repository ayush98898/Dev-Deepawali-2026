import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import Button from "../ui/Button";
import { bookingSteps, contact } from "@/lib/content";

export default function Booking() {
  const whatsappHref = `https://wa.me/${contact.whatsappDigits}?text=${encodeURIComponent(
    "Hi Wandermate, I'd like to enquire about the Dev Deepawali 2026 experience."
  )}`;

  return (
    <section id="booking" className="relative overflow-hidden bg-charcoal-panel py-section">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-diya-glow" />

      <div className="section-shell relative">
        <SectionHeading eyebrow="Begin" title="Your Kashi Experience Begins Here." align="center" />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((step, i) => (
            <RevealOnScroll key={step.index} delay={i * 90} className="border-t border-ivory/10 pt-6">
              <span className="font-display text-3xl text-gold-dim">{step.index}</span>
              <p className="mt-3 text-lg text-ivory">{step.title}</p>
              <p className="mt-2 text-sm text-ivory-dim">{step.description}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={200} className="mt-16 flex flex-col items-center gap-8 text-center">
          <Button href={whatsappHref} variant="whatsapp" external className="px-10 py-5 text-sm">
            Enquire on WhatsApp
          </Button>

          <div className="flex flex-col items-center gap-2 text-sm text-ivory-dim">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              {contact.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-gold-bright">
                  {phone}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              <a href={`https://${contact.website}`} className="hover:text-gold-bright">
                {contact.website}
              </a>
              <a href={`mailto:${contact.email}`} className="hover:text-gold-bright">
                {contact.email}
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
