import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=120&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=120&h=80&fit=crop&q=80",
];

const ACCENT_COLORS = [
  "var(--mint)",
  "var(--brush)",
  "var(--electric)",
];

export function ServicesList() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div ref={ref} className="reveal-on-scroll">
        <div className="mb-12 max-w-2xl" data-reveal-child style={{ ["--reveal-delay" as string]: "0ms" }}>
          <span
            className="text-xs font-medium uppercase tracking-[0.18em]"
            style={{ color: "var(--mint)" }}
          >
            What we do
          </span>
          <h2
            className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: "var(--foreground)" }}
          >
            Services<span className="gradient-text">.</span>
          </h2>
        </div>

        <ul style={{ borderTop: "1px solid var(--border)" }}>
          {services.map((s, i) => (
            <li
              key={i}
              data-reveal-child
              style={{ ["--reveal-delay" as string]: `${150 + i * 120}ms` }}
            >
              <a
                href="#"
                className="group relative flex items-center justify-between gap-6 overflow-hidden py-8 transition-colors duration-500 md:py-10"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                {/* Color sweep on hover */}
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-0"
                  style={{
                    background: `linear-gradient(90deg, color-mix(in oklab, ${ACCENT_COLORS[i]} 12%, transparent), transparent)`,
                  }}
                />

                <div className="relative z-10 flex items-center gap-6 min-w-0">
                  {/* Thumbnail */}
                  <div
                    className="hidden md:block shrink-0 h-16 w-24 overflow-hidden rounded-xl opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                    style={{ border: `1px solid color-mix(in oklab, ${ACCENT_COLORS[i]} 25%, transparent)` }}
                  >
                    <img
                      src={SERVICE_IMAGES[i]}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      0{i + 1} — {s.subtext}
                    </p>
                    <h3
                      className="mt-2 font-display text-3xl font-semibold tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2 md:text-5xl"
                      style={{ color: "var(--foreground)" }}
                    >
                      {s.title}
                      {s.highlight && (
                        <>
                          {" "}
                          <span className="relative inline-block" style={{ color: ACCENT_COLORS[i] }}>
                            {s.highlight}
                            {s.badge && (
                              <span
                                aria-hidden
                                className="wobble pointer-events-none absolute -right-10 -top-6 hidden h-16 w-16 items-center justify-center rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md md:flex"
                                style={{
                                  background: "var(--mint)",
                                  color: "oklch(0.09 0.010 260)",
                                }}
                              >
                                New<br />2026
                              </span>
                            )}
                          </span>
                        </>
                      )}
                    </h3>
                  </div>
                </div>

                <span
                  className="relative z-10 grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border transition-all duration-500 ease-out group-hover:scale-110 md:h-14 md:w-14"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted-foreground)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.background = ACCENT_COLORS[i];
                    el.style.borderColor = ACCENT_COLORS[i];
                    el.style.color = "oklch(0.09 0.010 260)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.background = "";
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--muted-foreground)";
                  }}
                >
                  <ArrowRight className="h-5 w-5 -translate-x-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                  <ArrowRight className="absolute h-5 w-5 transition-all duration-500 ease-out group-hover:translate-x-8 group-hover:opacity-0" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
