// Single source of truth for factual copy on the Dev Deepawali 2026 site.
// Everything here is transcribed from the Wandermate brief. Nothing about
// pricing, timings, inclusions, contacts or testimonials is invented —
// where the brief did not supply specifics (e.g. legal policy language),
// that is marked explicitly instead of being filled in.

export const contact = {
  whatsappDisplay: "+91 92143 13559",
  whatsappDigits: "919214313559",
  phones: ["+91 92143 13559", "+91 84004 37772", "+91 80819 53302"],
  website: "wandermate.in",
  email: "info@wandermate.in",
};

export const eventDates = {
  range: "23–25 NOVEMBER 2026",
  duration: "2N / 3D · ALL INCLUSIVE",
};

export type IncludedPackage = {
  id: "premium" | "luxury";
  name: string;
  price: string;
  unit: string;
  duration: string;
  featured: boolean;
  inclusions: string[];
  cta: string;
};

export const packages: IncludedPackage[] = [
  {
    id: "premium",
    name: "Premium",
    price: "₹39,999",
    unit: "/ person",
    duration: "2 Nights / 3 Days",
    featured: false,
    inclusions: [
      "Premium 3-star hotel",
      "Private sedan transfers",
      "WanderMate guide",
      "Ganga Aarti",
      "Akashganga Festival",
      "Food Walk",
      "Ganga Cruise",
      "Festival Night Dinner",
    ],
    cta: "CHOOSE PREMIUM",
  },
  {
    id: "luxury",
    name: "Luxury",
    price: "₹59,999",
    unit: "/ person",
    duration: "2 Nights / 3 Days",
    featured: true,
    inclusions: [
      "5-star hotel",
      "Luxury vehicle / SUV",
      "Dedicated personal guide",
      "Personalized experience",
      "Akashganga Festival",
      "Ganga Cruise",
      "Ramnagar Fort Special Fine Dining",
    ],
    cta: "CHOOSE LUXURY",
  },
];

export type InclusionCategory = {
  title: string;
  detail: string;
};

export const inclusionCategories: InclusionCategory[] = [
  { title: "Stay", detail: "2 nights accommodation" },
  { title: "Transfers", detail: "Airport / railway station + private local transport" },
  { title: "Guide", detail: "WanderMate guide / personal guide depending on package" },
  { title: "Festival", detail: "Akashganga 7-hour experience" },
  { title: "Cruise", detail: "4-hour Dev Deepawali Ganga Cruise" },
  { title: "Food", detail: "Breakfast + curated Banarasi experiences" },
  { title: "Support", detail: "24×7 on-trip support" },
  { title: "Essentials", detail: "Entry fees, permits and logistics" },
];

export const exclusions: string[] = [
  "Airfare / train fare",
  "Certain lunches",
  "Personal expenses",
  "Alcoholic beverages",
  "Travel insurance",
  "Camera / video fees where applicable",
  "Unlisted activities",
  "Medical expenses beyond first-response cruise support",
  "Visa charges",
  "Force majeure-related costs",
  "Early check-in / late check-out",
  "Anything not specifically listed under inclusions",
];

export type TimelineEntry = {
  time: string;
  title: string;
  description?: string;
};

export const nightBecomesLight: TimelineEntry[] = [
  { time: "4:30 PM", title: "Cruise Boarding" },
  { time: "Golden Hour", title: "The ghats begin to glow" },
  { time: "Dusk", title: "Thousands of diyas appear" },
  { time: "Night", title: "The 84 ghats become a continuous line of fire" },
  { time: "8:30 PM", title: "Return to Ramnagar Fort" },
];

export type ItineraryDay = {
  day: string;
  title: string;
  summary: string;
  events: TimelineEntry[];
};

export const itinerary: ItineraryDay[] = [
  {
    day: "Day 01",
    title: "Arrival · Old Kashi · Ganga Aarti",
    summary: "Your first evening in Kashi — arrival, settling in, and a first taste of the old city after dark.",
    events: [
      { time: "", title: "Airport / railway pickup" },
      { time: "", title: "Premium hotel check-in" },
      { time: "", title: "Welcome kit" },
      { time: "", title: "Kashi companion briefing" },
      { time: "", title: "Chowk & Old City night food walk" },
      { time: "", title: "Ganga Aarti" },
      { time: "", title: "Diya floating" },
      { time: "", title: "Kulhad chai" },
    ],
  },
  {
    day: "Day 02",
    title: "Dev Deepawali — The Main Event",
    summary: "The centrepiece of the journey — Akashganga, the private cruise, and the illumination of all 84 ghats.",
    events: [
      { time: "10:30 AM", title: "Departure for Ramnagar Fort" },
      { time: "11:00 AM", title: "Akashganga Festival begins" },
      { time: "11:00 – 12:15", title: "Ramnagar Fort Museum Walk" },
      { time: "12:15 – 1:30", title: "Handicraft Workshop & Cultural Exhibition" },
      { time: "1:30 – 2:30", title: "Banaras Hi-Tea" },
      { time: "2:30 – 3:45", title: "Classical Music & Kathak" },
      { time: "3:45 PM", title: "Lantern & Fireworks Celebration" },
      { time: "4:00 PM", title: "Private Ghat Transfer" },
      { time: "4:30 PM", title: "Cruise Boarding" },
      { time: "Golden Hour", title: "Ganga Experience" },
      { time: "Dusk – 8:30 PM", title: "Full Dev Deepawali Illumination" },
      { time: "8:30 PM", title: "Dinner at Ramnagar Fort" },
      { time: "10:30 – 11:00 PM", title: "Return to Hotel" },
    ],
  },
  {
    day: "Day 03",
    title: "Blessings & Departure",
    summary: "A slower morning — Assi Ghat at first light, the university town, and a fond farewell.",
    events: [
      { time: "", title: "Assi Ghat" },
      { time: "", title: "Subah-e-Banaras atmosphere" },
      { time: "", title: "Ghat walk" },
      { time: "", title: "Heritage stories" },
      { time: "", title: "Farewell chai" },
      { time: "", title: "Banarasi breakfast" },
      { time: "", title: "BHU Campus" },
      { time: "", title: "New Vishwanath Temple" },
      { time: "", title: "Departure" },
    ],
  },
];

export type Highlight = {
  title: string;
  detail: string;
};

export const highlights: Highlight[] = [
  { title: "Ganga Aarti", detail: "Premium riverside seating" },
  { title: "Akashganga Festival", detail: "Exclusive QR-based entry" },
  { title: "Ramnagar Fort", detail: "Museum + heritage + cultural experiences" },
  { title: "Banarasi Culture", detail: "Weaving, zardozi, classical music and Kathak" },
  { title: "Private Ganga Cruise", detail: "4-hour Dev Deepawali river experience" },
  { title: "Fort Dinner", detail: "Banarasi buffet / luxury fine dining" },
  { title: "Old Kashi", detail: "Food walk through Chowk and ancient lanes" },
  { title: "BHU", detail: "Campus + New Vishwanath Temple" },
];

export const akashganga = {
  eyebrow: "AKASHGANGA",
  title: "An Exclusive Festival Experience",
  items: [
    "Exclusive QR-based entry",
    "Ramnagar Fort Museum Walk",
    "Handicraft Workshop",
    "Cultural Exhibition",
    "Banaras Hi-Tea",
    "Classical Music",
    "Kathak",
    "Lantern Celebration",
    "Fireworks",
    "Professional event photographer",
    "Security & event management",
    "Curated return gift",
  ],
};

export const cruise = {
  eyebrow: "4-HOUR PRIVATE DEV DEEPAWALI CRUISE",
  title: "On the Ganga. Under a Sky of Fire.",
  items: [
    "Private ghat boarding",
    "QR-based fast boarding",
    "Comfortable seating",
    "On-board washroom",
    "Refreshments",
    "Dedicated medical support",
    "Guide & storyteller",
    "Full 84-ghat view",
  ],
};

export type Ghat = {
  name: string;
  note: string;
};

// General, well-established descriptive notes for orientation only —
// not sourced from the brief's package-specific material.
export const ghats: Ghat[] = [
  { name: "Dashashwamedh", note: "Varanasi's principal ghat, home to the nightly Ganga Aarti" },
  { name: "Manikarnika", note: "One of the oldest and most sacred cremation ghats" },
  { name: "Kedar", note: "Marked by the striped Kedareshwar temple above the steps" },
  { name: "Harishchandra", note: "An ancient cremation ghat, quieter than Manikarnika" },
  { name: "Assi", note: "The southern-most ghat, known for its calm morning rhythm" },
];

export type Testimonial = {
  quote: string;
  attribution: string;
};

// Verbatim guest feedback provided in the brief. No names, cities or
// packages were supplied alongside these quotes, so none are invented.
export const testimonials: Testimonial[] = [
  {
    quote: "I had recently visited Varanasi and the entire trip was beautifully organised from start to finish.",
    attribution: "Verified traveler",
  },
  {
    quote: "Banaras ghumo toh bs inke sath ghumo. Maza aa gya BEST",
    attribution: "Verified traveler",
  },
  {
    quote: "I cannot thank this team enough for making my Kashi trip so special.",
    attribution: "Verified traveler",
  },
];

export type BookingStep = {
  index: string;
  title: string;
  description: string;
};

export const bookingSteps: BookingStep[] = [
  { index: "01", title: "Enquire", description: "Contact us via WhatsApp / Instagram / website" },
  { index: "02", title: "Customise", description: "Adjust arrival time, stay duration or additional experiences" },
  { index: "03", title: "Confirm", description: "Pay the required advance to confirm" },
  { index: "04", title: "Travel", description: "Arrive in Varanasi. We handle the rest." },
];

export type PolicySection = {
  title: string;
  // Marked as pending because the brief named these categories without
  // supplying the binding legal/financial text — see content rule.
  content: string;
};

export const policySections: PolicySection[] = [
  { title: "Booking & Payment", content: "Full terms to be confirmed by Wandermate before publishing." },
  { title: "Pricing", content: "Full terms to be confirmed by Wandermate before publishing." },
  { title: "Cancellation & Refund", content: "Full terms to be confirmed by Wandermate before publishing." },
  { title: "Rescheduling", content: "Full terms to be confirmed by Wandermate before publishing." },
  { title: "Force Majeure", content: "Full terms to be confirmed by Wandermate before publishing." },
  { title: "Itinerary Changes", content: "Full terms to be confirmed by Wandermate before publishing." },
  { title: "Guest Conduct & Safety", content: "Full terms to be confirmed by Wandermate before publishing." },
  { title: "Identification", content: "Full terms to be confirmed by Wandermate before publishing." },
  { title: "Liability", content: "Full terms to be confirmed by Wandermate before publishing." },
];

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Journey", href: "#journey" },
  { label: "Packages", href: "#packages" },
  { label: "Inclusions", href: "#inclusions" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];
