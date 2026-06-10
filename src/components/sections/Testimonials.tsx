import { FloatingAvatar } from "@/components/ui/FloatingAvatar";
import { testimonialAvatars } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";

const LOGOS = [
  { name: "Vercel", abbr: "▲ VERCEL" },
  { name: "Linear", abbr: "● LINEAR" },
  { name: "Notion", abbr: "◆ NOTION" },
  { name: "Figma",  abbr: "⬡ FIGMA" },
  { name: "Stripe", abbr: "⬡ STRIPE" },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div ref={ref} className="reveal-on-scroll">

        {/* Trusted by marquee strip */}
        <div
          data-reveal-child
          style={{ ["--reveal-delay" as string]: "0ms" }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "var(--muted-foreground)" }}>
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {LOGOS.map((l, i) => (
              <span
                key={i}
                className="text-sm font-bold tracking-wider transition-all duration-300 hover:scale-110 cursor-default"
                style={{
                  color: "var(--muted-foreground)",
                  fontFamily: "var(--font-display)",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--foreground)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--muted-foreground)"; }}
              >
                {l.abbr}
              </span>
            ))}
          </div>
        </div>

        {/* Main testimonial */}
        <div className="relative mx-auto max-w-3xl">
          {/* Floating avatars — desktop only */}
          <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
            {testimonialAvatars.map((a, i) => (
              <FloatingAvatar
                key={i}
                src={a.src}
                className={`pointer-events-auto ${a.className}`}
                delay={`${i * 300}ms`}
              />
            ))}
          </div>

          <div
            data-reveal-child
            style={{ ["--reveal-delay" as string]: "100ms" }}
            className="relative z-10 rounded-3xl px-8 py-16 text-center md:px-16 md:py-24"
            style={{
              background: "linear-gradient(135deg, color-mix(in oklab, var(--mint) 12%, var(--card)), color-mix(in oklab, var(--purple) 10%, var(--card)))",
              border: "1px solid color-mix(in oklab, var(--mint) 20%, var(--border))",
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute left-6 top-2 font-display text-[7rem] leading-none md:left-10 md:top-4 md:text-[10rem]"
              style={{ color: "color-mix(in oklab, var(--mint) 25%, transparent)" }}
            >
              &ldquo;
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-[-2rem] right-6 font-display text-[7rem] leading-none md:bottom-[-3rem] md:right-10 md:text-[10rem]"
              style={{ color: "color-mix(in oklab, var(--mint) 25%, transparent)" }}
            >
              &rdquo;
            </span>

            {/* Stars */}
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg" style={{ color: "var(--marker)" }}>★</span>
              ))}
            </div>

            <p
              className="relative mx-auto max-w-2xl font-display text-xl font-medium leading-snug tracking-tight md:text-3xl"
              style={{ color: "var(--foreground)" }}
            >
              Working with Elementum felt less like hiring an agency and more like
              adding a senior team overnight. They shipped a brand system we&rsquo;re
              still building on two years later.
            </p>

            <div className="relative mt-8 flex flex-col items-center gap-1">
              <div
                className="mb-3 h-12 w-12 overflow-hidden rounded-full shadow-sm"
                style={{ ring: "2px solid var(--mint)" }}
              >
                <img
                  src={testimonialAvatars[0].src}
                  alt="Lena Park"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Lena Park</span>
              <span
                className="text-xs uppercase tracking-[0.18em]"
                style={{ color: "var(--muted-foreground)" }}
              >
                Co-founder, Northwind
              </span>
            </div>
          </div>

          {/* Mobile: avatar row */}
          <div
            data-reveal-child
            style={{ ["--reveal-delay" as string]: "120ms" }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:hidden"
          >
            {testimonialAvatars.slice(0, 4).map((a, i) => (
              <div
                key={i}
                className="float-slow h-14 w-14 overflow-hidden rounded-full shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)]"
                style={{ animationDelay: `${i * 220}ms`, outline: "3px solid var(--border)" }}
              >
                <img src={a.src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
