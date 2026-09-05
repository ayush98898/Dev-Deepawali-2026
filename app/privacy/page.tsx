import type { Metadata } from "next";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Wandermate",
  description: "How Wandermate collects, uses, and protects information from visitors to the Dev Deepawali 2026 experience website.",
  alternates: { canonical: "https://wandermate.in/privacy" },
};

const lastUpdated = "5 September 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-charcoal py-section">
      <div className="section-shell max-w-prose">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-display-md text-ivory">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ivory-faint">Last updated: {lastUpdated}</p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ivory-dim">
          <p>
            This policy explains what information this website (wandermate.in) collects when you
            visit, and how it is used. It covers the Dev Deepawali 2026 experience pages and applies
            to Wandermate, {contact.address.city}, {contact.address.state}, India.
          </p>

          <section>
            <h2 className="font-display text-xl text-ivory">Information We Collect</h2>
            <p className="mt-3">
              This site does not run an on-site booking form or account system — enquiries and
              bookings happen through WhatsApp, phone, or email, which you initiate yourself. We do
              not receive or store anything you type into WhatsApp, your phone's dialer, or your
              email client; that conversation happens directly between you and Wandermate through
              those services, governed by their own privacy terms (notably WhatsApp/Meta's).
            </p>
            <p className="mt-3">
              Like most websites, our hosting and analytics tools may automatically log standard
              technical data when you visit — your IP address, browser type, device type, pages
              viewed, and referring site. This is used in aggregate to understand site traffic and
              is not used to identify you personally.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ivory">Cookies &amp; Analytics</h2>
            <p className="mt-3">
              If enabled, this site uses Google Analytics (GA4) and/or Google Ads conversion tracking
              to understand how visitors use the site and how effective advertising is. These
              services may set cookies or similar identifiers in your browser. You can disable
              cookies in your browser settings, or opt out of Google Analytics using{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-bright underline underline-offset-2"
              >
                Google's browser add-on
              </a>
              . We do not use this data to build a profile of you beyond aggregate site analytics.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ivory">Third-Party Services</h2>
            <p className="mt-3">
              This site links out to and embeds functionality from third parties, each governed by
              their own privacy policy: WhatsApp (Meta), Google (Analytics, Ads, Fonts), Instagram,
              TripAdvisor, and Google Reviews. We encourage you to review their policies
              independently.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ivory">How Information Is Used</h2>
            <p className="mt-3">
              Any information you share directly with Wandermate through WhatsApp, phone, or email —
              such as your name, contact details, and travel preferences — is used solely to respond
              to your enquiry, process your booking, and deliver the Dev Deepawali 2026 experience.
              It is not sold to third parties. It may be shared with the specific partners needed to
              deliver your booking (e.g. the hotel you're staying at, or Akashganga for festival
              entry), limited to what's necessary for that purpose.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ivory">Data Retention</h2>
            <p className="mt-3">
              Booking-related communication and records are retained for as long as reasonably
              necessary to fulfil your booking, meet accounting/legal obligations, and handle any
              post-trip queries.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ivory">Your Rights</h2>
            <p className="mt-3">
              You can ask what information Wandermate holds about you, request a correction, or ask
              for it to be deleted (subject to any records we're legally required to keep) by
              contacting us at{" "}
              <a href={`mailto:${contact.email}`} className="text-gold-bright underline underline-offset-2">
                {contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ivory">Children's Privacy</h2>
            <p className="mt-3">
              This site and the experience it describes are intended for adults booking travel. We
              do not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ivory">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this policy from time to time, for example if we add a new analytics or
              booking tool. The "Last updated" date at the top will reflect the latest revision.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ivory">Contact Us</h2>
            <p className="mt-3">
              Questions about this policy or your information can be sent to{" "}
              <a href={`mailto:${contact.email}`} className="text-gold-bright underline underline-offset-2">
                {contact.email}
              </a>{" "}
              or {contact.phones[0]}.
            </p>
          </section>

          <p className="mt-4 border-t border-ivory/10 pt-6 text-xs text-ivory-faint">
            This is a standard-form policy describing the site's actual technical behaviour — it is
            not legal advice. Have it reviewed by counsel familiar with Indian data protection law
            (the DPDP Act, 2023) before relying on it commercially, particularly if the analytics or
            advertising tools referenced above are turned on.
          </p>
        </div>
      </div>
    </div>
  );
}
