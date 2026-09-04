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
  image: string;
};

export const highlights: Highlight[] = [
  { title: "Ganga Aarti", detail: "Premium riverside seating", image: "/images/highlight-ganga-aarti.jpg" },
  { title: "Akashganga Festival", detail: "Exclusive QR-based entry", image: "/images/highlight-akashganga.jpg" },
  { title: "Ramnagar Fort", detail: "Museum + heritage + cultural experiences", image: "/images/highlight-ramnagar-fort.jpg" },
  { title: "Banarasi Culture", detail: "Weaving, zardozi, classical music and Kathak", image: "/images/highlight-banarasi-culture.jpg" },
  { title: "Private Ganga Cruise", detail: "4-hour Dev Deepawali river experience", image: "/images/highlight-ganga-cruise.jpg" },
  { title: "Fort Dinner", detail: "Banarasi buffet / luxury fine dining", image: "/images/highlight-fort-dinner.jpg" },
  { title: "Old Kashi", detail: "Food walk through Chowk and ancient lanes", image: "/images/highlight-old-kashi.jpg" },
  { title: "BHU", detail: "Campus + New Vishwanath Temple", image: "/images/highlight-bhu.jpg" },
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
  content: string;
};

// Verbatim from Wandermate's "Dev Deepawali 2026 — Booking Policies" (pages 18-20
// of the supplied brief PDF). Legal/financial text is reproduced as-is rather than
// paraphrased, since rewording could change its meaning.
export const policySections: PolicySection[] = [
  {
    title: "Booking & Payment",
    content:
      "A confirmed booking with WanderMate requires a 50% advance payment at the time of reservation. The remaining 50% balance must be paid no later than 15 days prior to the travel date, or as otherwise communicated by WanderMate at the time of booking. Bookings are confirmed only after the advance payment is realised, and remain subject to availability of Akashganga festival seats, cruise capacity, and hotel rooms. Given the highly limited nature of Akashganga seats and Dev Deepawali cruise capacity, early booking is strongly recommended. If the balance payment is not received by the due date, WanderMate reserves the right to cancel the booking, in which case the advance paid shall stand forfeited as per the cancellation policy below.",
  },
  {
    title: "Pricing",
    content:
      "The package is priced at ₹39,999 per person for the Premium tier and ₹59,999 per person for the Luxury tier, fully inclusive of GST and all applicable government taxes. There are no hidden charges beyond what is explicitly listed under Exclusions. Prices are subject to change for new bookings made closer to the event date, depending on Akashganga and hotel availability.",
  },
  {
    title: "Cancellation & Refund",
    content:
      "This is a strict no-refund booking, owing to the fixed, festival-dated nature of the package and the limited third-party allocations it depends on — Akashganga festival seats, cruise capacity, and hotel block bookings. Once the 50% advance is paid, no cancellation, refund, or partial refund of the advance will be processed under any circumstances, including but not limited to a change in travel plans, illness, visa issues, or personal emergencies. If the balance 50% has also been paid, the full amount remains non-refundable. WanderMate strongly recommends that guests purchase independent travel insurance to cover any unforeseen circumstances.",
  },
  {
    title: "Rescheduling",
    content:
      "Because Dev Deepawali is a fixed annual date tied to the lunar calendar, rescheduling to an alternate date is not possible within the same booking. Name changes or guest substitutions may be considered on a case-by-case basis, subject to approval, and must be requested at least 7 days prior to the event date.",
  },
  {
    title: "Force Majeure",
    content:
      "WanderMate is not liable for cancellations, delays, or itinerary changes caused by circumstances beyond its reasonable control, including but not limited to natural calamities, government restrictions, political disturbances, extreme weather, or partner and vendor cancellations. In such cases, WanderMate will make reasonable efforts to offer an alternative experience of comparable value, though no cash refund will be issued.",
  },
  {
    title: "Itinerary Changes",
    content:
      "The itinerary, including timings, sequence of activities, and specific inclusions, may be modified by WanderMate or its partners — Akashganga and the partner hotels — due to operational, safety, weather, or crowd-related reasons. Any such change will be communicated to guests at the earliest opportunity, and WanderMate will ensure that the overall experience and value remain consistent with what was originally promised.",
  },
  {
    title: "Guest Conduct & Safety",
    content:
      "Guests are expected to follow the timing and instructions provided by WanderMate guides and Akashganga staff, particularly around boarding times for the cruise and entry to the festival, both of which are time-critical and cannot be relaxed once missed. WanderMate is not responsible for guests missing scheduled activities due to late arrival at designated meeting points. Guests with medical conditions are advised to inform WanderMate at the time of booking so that appropriate arrangements can be made in advance.",
  },
  {
    title: "Identification",
    content:
      "Valid government-issued photo identification is mandatory for hotel check-in and may be required for entry to the Akashganga festival and cruise. WanderMate is not responsible for denial of entry due to a guest's failure to carry valid identification.",
  },
  {
    title: "Liability",
    content:
      "WanderMate acts as a facilitator, coordinating accommodation, transport, guide services, and third-party experiences including the Akashganga festival and cruise. WanderMate is not liable for the independent acts, omissions, or service quality of third-party vendors, although all partners are vetted and selected for reliability. Travel is undertaken at the guest's own risk, and WanderMate recommends comprehensive travel insurance for all guests.",
  },
];

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Journey", href: "#journey" },
  { label: "Packages", href: "#packages" },
  { label: "Inclusions", href: "#inclusions" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];
