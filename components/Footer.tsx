import { contact, socialLinks } from "@/lib/content";

const socials = [
  ...(socialLinks.instagram ? [{ label: "Instagram", href: socialLinks.instagram }] : []),
  { label: "TripAdvisor", href: socialLinks.tripAdvisor },
  { label: "Google Reviews", href: socialLinks.googleReviews },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ivory/10 bg-charcoal py-16">
      <div className="section-shell">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg text-ivory">Wandermate Varanasi</p>
            <p className="mt-2 max-w-xs text-sm text-ivory-dim">
              Creating your perfect Varanasi experience.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-ivory-dim">
            {contact.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-gold-bright">
                {phone}
              </a>
            ))}
            <a href={`mailto:${contact.email}`} className="hover:text-gold-bright">
              {contact.email}
            </a>
            <a href={`https://${contact.website}`} className="hover:text-gold-bright">
              {contact.website}
            </a>
            <address className="mt-2 not-italic text-ivory-faint">
              {contact.address.line1}, {contact.address.line2}
              <br />
              {contact.address.city}, {contact.address.state} {contact.address.postalCode}
            </address>
          </div>

          <div className="flex flex-col gap-2 text-sm uppercase tracking-widest2 text-ivory-dim md:items-end">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold-bright">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="divider-line my-12" />

        <p className="text-center font-display text-xl italic text-ivory-dim md:text-2xl">
          Kashi is not just a city.
          <br className="hidden sm:block" /> It is an experience that lives within you long after you leave.
        </p>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-[11px] uppercase tracking-widest2 text-ivory-faint">
          <span>© {new Date().getFullYear()} Wandermate Varanasi. All rights reserved.</span>
          <span aria-hidden>·</span>
          <a href="/privacy" className="hover:text-gold-bright">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
