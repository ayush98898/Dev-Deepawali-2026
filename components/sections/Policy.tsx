"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { policySections } from "@/lib/content";
import { faqJsonLd } from "@/lib/structuredData";

export default function Policy() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-charcoal py-section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />
      <div className="section-shell">
        <SectionHeading eyebrow="Booking Policy" title="Terms, Plainly Stated" />

        <p className="mt-6 max-w-prose text-sm text-ivory-faint">
          The terms this trip is governed by, in full — including payment, cancellation, and what
          happens if plans change.
        </p>

        <div className="mt-10 divide-y divide-ivory/10 border-y border-ivory/10">
          {policySections.map((section, i) => {
            const isOpen = openIndex === i;
            return (
              <RevealOnScroll key={section.title} delay={i * 40}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-ivory">{section.title}</span>
                  <span
                    aria-hidden
                    className={`text-gold-bright transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-cinematic ${
                    isOpen ? "max-h-[32rem]" : "max-h-0"
                  }`}
                >
                  <p className="max-w-prose pb-6 text-sm leading-relaxed text-ivory-dim">{section.content}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
