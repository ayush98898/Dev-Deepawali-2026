"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { policySections } from "@/lib/content";

export default function Policy() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-charcoal py-section">
      <div className="section-shell">
        <SectionHeading eyebrow="Booking Policy" title="Terms, Plainly Stated" />

        <p className="mt-6 max-w-prose text-sm text-ivory-faint">
          The categories below reflect the terms this trip is governed by. Wandermate will confirm the
          full legal and financial wording for each before this page goes live.
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
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="pb-5 text-sm italic text-ivory-dim">{section.content}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
