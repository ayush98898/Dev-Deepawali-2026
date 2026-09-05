"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { itinerary } from "@/lib/content";

export default function Itinerary() {
  const [active, setActive] = useState(0);
  const day = itinerary[active];
  const isMainEvent = active === 1;

  return (
    <section
      className={`relative py-section transition-colors duration-700 ${
        isMainEvent ? "bg-[#171008]" : "bg-charcoal-soft"
      }`}
    >
      <div className="section-shell">
        <SectionHeading eyebrow="The Itinerary" title="A Journey, Not a Schedule" />

        <div className="mt-12 flex gap-8 border-b border-ivory/10">
          {itinerary.map((d, i) => (
            <button
              key={d.day}
              type="button"
              onClick={() => setActive(i)}
              className={`relative pb-4 text-xs uppercase tracking-widest2 transition-colors ${
                active === i ? "text-gold-bright" : "text-ivory-faint hover:text-ivory-dim"
              }`}
            >
              {d.day}
              {active === i && <span className="absolute inset-x-0 -bottom-px h-px bg-gold-bright" />}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <RevealOnScroll key={`${day.day}-heading`}>
            <h3 className="font-display text-display-sm text-ivory text-balance">{day.title}</h3>
            <p className="mt-4 max-w-xs text-sm text-ivory-dim">{day.summary}</p>
          </RevealOnScroll>

          <div key={`${day.day}-events`} className="relative flex flex-col">
            <div aria-hidden className="absolute bottom-2 left-[3px] top-2 w-px bg-gradient-to-b from-gold-bright/50 via-ivory/15 to-transparent" />
            {day.events.map((event, i) => (
              <RevealOnScroll key={event.title} delay={i * 60} className="relative flex gap-6 py-4 pl-6">
                <span
                  aria-hidden
                  className="absolute left-0 top-6 h-[7px] w-[7px] rounded-full bg-gold-bright"
                />
                {event.time && (
                  <span className="w-28 flex-none text-xs uppercase tracking-wide text-gold-dim sm:w-36">
                    {event.time}
                  </span>
                )}
                <p className={`text-ivory ${event.time ? "" : "text-ivory-dim"}`}>{event.title}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
