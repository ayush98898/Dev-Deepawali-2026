import RevealOnScroll from "./RevealOnScroll";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "ivory" | "charcoal";
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "left", tone = "ivory" }: Props) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const textColor = tone === "charcoal" ? "text-charcoal" : "text-ivory";
  const subColor = tone === "charcoal" ? "text-charcoal/70" : "text-ivory-dim";

  return (
    <RevealOnScroll className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`text-display-lg text-balance ${textColor}`}>{title}</h2>
      {subtitle && <p className={`max-w-prose text-lg ${subColor}`}>{subtitle}</p>}
    </RevealOnScroll>
  );
}
