import { Highlight } from "@/components/ui/Highlight";
import { FloatingAvatar } from "@/components/ui/FloatingAvatar";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { heroAvatars } from "@/data/site";
import { useParallax } from "@/hooks/use-parallax";

export function Hero() {
  const squiggleRef = useParallax<HTMLDivElement>(0.18);
  const blobRef = useParallax<HTMLDivElement>(0.1);

  return (
    <section
      id="home"
      className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-10 pt-14 md:overflow-visible md:px-10 md:pb-20 md:pt-24"
    >
      {/* Ambient glow blobs */}
      <div
        ref={blobRef}
        className="deco-blob h-96 w-96 -left-32 top-0"
        style={{ background: "var(--mint)", opacity: 0.15 }}
        aria-hidden
      />
      <div
        className="deco-blob h-72 w-72 right-0 top-1/4"
        style={{ background: "var(--purple)", opacity: 0.12 }}
        aria-hidden
      />
      <div
        className="deco-blob h-56 w-56 left-1/3 bottom-0"
        style={{ background: "var(--electric)", opacity: 0.10 }}
        aria-hidden
      />

      {/* Spinning orbit decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[8%] hidden md:block"
      >
        <div className="spin-slow relative h-28 w-28">
          <svg viewBox="0 0 112 112" fill="none" className="h-full w-full">
            <circle cx="56" cy="56" r="50" stroke="var(--mint)" strokeWidth="1" strokeDasharray="4 8" opacity="0.5" />
            <circle cx="56" cy="6" r="5" fill="var(--mint)" opacity="0.9" />
          </svg>
        </div>
      </div>

      <div
        ref={squiggleRef}
        className="deco-squiggle right-[18%] top-[5%] hidden md:block"
        aria-hidden
        style={{ color: "var(--brush)", opacity: 0.6 }}
      >
        <svg viewBox="0 0 200 40" className="h-9 w-44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M2 20 Q 20 2, 40 20 T 80 20 T 120 20 T 160 20 T 198 20" />
        </svg>
      </div>

      <div className="relative">
        {/* Floating avatars — desktop only */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          {heroAvatars.map((a, i) => (
            <div
              key={i}
              className="pointer-events-auto reveal-up"
              style={{ animationDelay: `${280 + i * 80}ms` }}
            >
              <FloatingAvatar
                src={a.src}
                alt={a.name}
                className={a.className}
                delay={`${i * 380}ms`}
              />
            </div>
          ))}
        </div>

        {/* Eyebrow */}
        <div className="reveal-up mb-8 flex items-center gap-2" style={{ animationDelay: "0ms" }}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: "var(--mint)" }} />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: "var(--mint)" }} />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--mint)" }}>
            Independent studio — SF + Remote
          </span>
        </div>

        {/* Headline */}
        <h1 className="reveal-up relative z-20 max-w-5xl font-display text-5xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-6xl md:text-[5rem] lg:text-[5.5rem]" style={{ color: "var(--foreground)" }}>
          A studio of{" "}
          <Highlight variant="marker">thinkers</Highlight>{" "}
          and doers{" "}
          <span className="gradient-text">changing</span>{" "}
          <span className="font-normal italic" style={{ color: "var(--muted-foreground)" }}>the</span>{" "}
          <Highlight variant="pill">status quo</Highlight>
        </h1>

        <p
          className="reveal-up relative z-20 mt-8 max-w-lg text-base leading-relaxed md:text-lg"
          style={{ animationDelay: "160ms", color: "var(--muted-foreground)" }}
        >
          We partner with ambitious teams to design brand systems, digital products,
          and the moments in between — built to outlast the trend cycle.
        </p>

        <div
          className="reveal-up relative z-20 mt-10 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <ArrowButton label="Start a project" variant="filled" />
          <a
            href="#services"
            className="rounded-full px-5 py-2.5 text-sm font-medium underline-offset-4 transition-all duration-300 hover:underline"
            style={{ color: "var(--muted-foreground)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
          >
            See our work ↓
          </a>
        </div>

        {/* Stats bar */}
        <div className="reveal-up relative z-20 stats-bar" style={{ animationDelay: "360ms" }}>
          {[
            { num: "140+", label: "Projects shipped" },
            { num: "8 yrs", label: "Studio experience" },
            { num: "96%", label: "Client retention" },
          ].map((s, i) => (
            <div key={i} className="stats-bar-item group cursor-default">
              <div className="stats-bar-num transition-all duration-300 group-hover:scale-110" style={{ color: "var(--mint)" }}>{s.num}</div>
              <div className="stats-bar-label" style={{ color: "var(--muted-foreground)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mobile avatar band */}
        <div
          className="reveal-up relative z-10 mt-10 md:hidden"
          style={{ animationDelay: "300ms" }}
        >
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {heroAvatars.map((a, i) => (
              <div
                key={i}
                className="float-slow relative h-20 w-20 shrink-0 snap-start overflow-hidden rounded-full ring-4 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)]"
                style={{ animationDelay: `${i * 200}ms`, ringColor: "var(--border)" }}
              >
                <img src={a.src} alt={a.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop spacer */}
        <div className="hidden h-44 md:block" aria-hidden />
      </div>
    </section>
  );
}
