"use client";

type Props = {
  whatsappDigits: string;
};

export default function WhatsAppFloat({ whatsappDigits }: Props) {
  const href = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
    "Hi Wandermate, I'd like to enquire about the Dev Deepawali 2026 experience."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-gold-dim/60 bg-[#16281F]/95 px-5 py-3.5 text-xs font-semibold uppercase tracking-widest2 text-ivory shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur transition-all duration-300 hover:border-gold-bright hover:text-gold-bright sm:bottom-8 sm:right-8"
    >
      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.05.28-3.53-.74-2.98-1.23-4.9-4.24-5.05-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.32.4-.45.53-.15.15-.31.32-.13.62.18.3.8 1.32 1.72 2.14 1.18 1.06 2.18 1.39 2.48 1.54.3.15.48.13.66-.08.18-.2.77-.9.98-1.2.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.23.57.35.08.13.08.75-.16 1.43Z" />
      </svg>
      Enquire on WhatsApp
    </a>
  );
}
