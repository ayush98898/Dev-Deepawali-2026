import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { contact } from "@/lib/content";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const title = "Dev Deepawali 2026, Varanasi | Premium Kashi Experience by Wandermate";
const description =
  "A 2-Night, 3-Day journey into the divine illumination of Banaras. Private Ganga cruise, Akashganga Festival, Ramnagar Fort, and the lighting of all 84 ghats. 23–25 November 2026.";

export const metadata: Metadata = {
  metadataBase: new URL("https://wandermate.in"),
  title,
  description,
  keywords: [
    "Dev Deepawali 2026",
    "Dev Deepawali Varanasi",
    "Dev Deepawali package",
    "Varanasi Dev Deepawali",
    "Dev Deepawali Ganga cruise",
    "Varanasi luxury experience",
    "Varanasi travel package",
  ],
  openGraph: {
    title,
    description,
    url: "https://wandermate.in",
    siteName: "Wandermate — Dev Deepawali 2026",
    images: ["/images/og-dev-deepawali.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-dev-deepawali.jpg"],
  },
  alternates: {
    canonical: "https://wandermate.in",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="relative overflow-x-hidden bg-charcoal">
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 grain-overlay opacity-60" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat whatsappDigits={contact.whatsappDigits} />
      </body>
    </html>
  );
}
