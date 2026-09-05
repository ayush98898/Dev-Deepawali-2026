import { contact, socialLinks, packages, policySections } from "./content";

const SITE_URL = "https://wandermate.in";

export function organizationJsonLd() {
  const sameAs = [socialLinks.tripAdvisor, socialLinks.googleReviews, socialLinks.instagram].filter(
    (v): v is string => Boolean(v)
  );

  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Wandermate",
    url: SITE_URL,
    image: `${SITE_URL}/images/og-dev-deepawali.jpg`,
    email: contact.email,
    telephone: `+${contact.whatsappDigits}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function eventJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Dev Deepawali 2026 — Varanasi",
    description:
      "A 2-Night, 3-Day journey into the divine illumination of Banaras: private Ganga cruise, the Akashganga Festival, Ramnagar Fort, and the lighting of all 84 ghats.",
    startDate: "2026-11-23",
    endDate: "2026-11-25",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: [`${SITE_URL}/images/hero-poster.jpg`],
    location: {
      "@type": "Place",
      name: "Varanasi, Uttar Pradesh",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "TravelAgency",
      name: "Wandermate",
      url: SITE_URL,
    },
    offers: packages.map((pkg) => ({
      "@type": "Offer",
      name: `${pkg.name} — Dev Deepawali 2026`,
      price: pkg.price.replace(/[^0-9]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/LimitedAvailability",
      url: `${SITE_URL}/#packages`,
      validFrom: "2026-01-01",
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: policySections.map((section) => ({
      "@type": "Question",
      name: section.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: section.content,
      },
    })),
  };
}
