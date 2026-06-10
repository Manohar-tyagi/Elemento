/**
 * Continuous scrolling ticker with capability/service keywords.
 */
const items = [
  "Brand Identity",
  "Digital Products",
  "Motion & Animation",
  "Design Systems",
  "Strategy & Positioning",
  "UI / UX",
  "Creative Direction",
  "Prototyping",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div
      aria-hidden
      className="overflow-hidden py-4"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        background: "color-mix(in oklab, var(--mint) 5%, transparent)",
      }}
    >
      <div className="flex w-max marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 px-8 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--foreground)" }}
          >
            {item}
            <span style={{ color: "var(--mint)", opacity: 0.8 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
