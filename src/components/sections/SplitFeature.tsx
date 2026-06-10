import { ArrowButton } from "@/components/ui/ArrowButton";
import { useReveal } from "@/hooks/use-reveal";

interface SplitFeatureProps {
  title: string;
  description: string;
  image: string;
  alignment?: "left" | "right";
  accentShape?: "square" | "triangle";
  eyebrow?: string;
  stats?: { num: string; label: string }[];
}

export function SplitFeature({
  title,
  description,
  image,
  alignment = "left",
  accentShape = "square",
  eyebrow,
  stats,
}: SplitFeatureProps) {
  const textLeft = alignment === "left";
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div
        ref={ref}
        className="reveal-on-scroll grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20"
      >
        {/* Text column */}
        <div
          data-reveal-child
          style={{ ["--reveal-delay" as string]: "0ms" }}
          className={textLeft ? "order-1" : "order-1 md:order-2"}
        >
          {eyebrow && (
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{
                color: "var(--mint)",
                borderColor: "color-mix(in oklab, var(--mint) 30%, transparent)",
                background: "color-mix(in oklab, var(--mint) 10%, transparent)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--mint)" }} />
              {eyebrow}
            </span>
          )}
          <h2
            className="font-display text-4xl font-bold leading-[1.06] tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: "var(--foreground)" }}
          >
            {title}
          </h2>
          <p
            className="mt-6 max-w-lg text-base leading-relaxed md:text-lg"
            style={{ color: "var(--muted-foreground)" }}
          >
            {description}
          </p>
          {stats && (
            <div className="mt-8 flex gap-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <div
                    className="font-display text-3xl font-bold"
                    style={{ color: i % 2 === 0 ? "var(--mint)" : "var(--brush)" }}
                  >
                    {s.num}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-8">
            <ArrowButton label="Learn more" />
          </div>
        </div>

        {/* Image + accent */}
        <div
          data-reveal-child
          style={{ ["--reveal-delay" as string]: "160ms" }}
          className={`relative ${textLeft ? "order-2" : "order-2 md:order-1"}`}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            {/* Glowing accent shape */}
            {accentShape === "square" ? (
              <div
                className="absolute -bottom-6 -right-6 z-0 h-[75%] w-[75%] rounded-2xl transition-transform duration-700 ease-out"
                style={{
                  background: "linear-gradient(135deg, var(--mint), var(--electric))",
                  opacity: 0.35,
                  filter: "blur(2px)",
                }}
              />
            ) : (
              <div
                className="absolute -bottom-4 -left-4 z-0 h-[60%] w-[60%] rounded-3xl transition-transform duration-700 ease-out"
                style={{
                  background: "linear-gradient(135deg, var(--brush), var(--purple))",
                  opacity: 0.35,
                  filter: "blur(2px)",
                }}
              />
            )}
            {/* Floating tags */}
            <div
              className="absolute -top-4 -right-4 z-20 hidden md:flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow-xl"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--mint)" }} />
              Live & shipping
            </div>
            <img
              src={image}
              alt=""
              loading="lazy"
              className="relative z-10 h-full w-full rounded-3xl object-cover shadow-[0_32px_64px_-28px_rgba(0,0,0,0.7)] transition-all duration-600 ease-out hover:scale-[1.02] hover:shadow-[0_40px_80px_-28px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
