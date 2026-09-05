"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="relative bg-charcoal py-section">
      <div className="section-shell">
        <SectionHeading eyebrow="From Guests" title="What Kashi Left With Them" align="center" />

        <RevealOnScroll delay={150} className="mx-auto mt-16 max-w-3xl text-center">
          <blockquote key={index} className="animate-risefade m-0">
            <p className="font-display text-2xl italic text-balance text-ivory sm:text-3xl">&ldquo;{t.quote}&rdquo;</p>
            <cite className="mt-6 block text-xs not-italic uppercase tracking-widest2 text-gold-dim">
              {t.attribution}
            </cite>
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="p-2 text-ivory-dim transition-colors hover:text-gold-bright"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === index ? "bg-gold-bright" : "bg-ivory/25"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="p-2 text-ivory-dim transition-colors hover:text-gold-bright"
            >
              →
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
