export function Newsletter() {
  return (
    <section className="px-5 pb-20 md:px-10">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 py-20 text-center md:py-28"
        style={{
          background: "linear-gradient(135deg, oklch(0.14 0.025 260), oklch(0.12 0.030 290), oklch(0.11 0.020 200))",
          border: "1px solid color-mix(in oklab, var(--mint) 20%, var(--border))",
        }}
      >
        {/* Decorative orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full morphing-blob"
          style={{ background: "var(--mint)", opacity: 0.12, filter: "blur(40px)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full morphing-blob"
          style={{ background: "var(--purple)", opacity: 0.10, filter: "blur(32px)", animationDelay: "4s" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full"
          style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--electric) 8%, transparent), transparent 70%)" }}
        />

        {/* Icon */}
        <div className="relative z-10 mb-6 flex justify-center">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl pulse-glow"
            style={{
              background: "linear-gradient(135deg, var(--mint), var(--electric))",
              color: "oklch(0.09 0.010 260)",
            }}
          >
            ✦
          </div>
        </div>

        <h2
          className="shimmer-text relative z-10 mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
        >
          Get studio notes,<br className="hidden md:block" /> every other Friday.
        </h2>
        <p
          className="relative z-10 mx-auto mt-5 max-w-xl text-base md:text-lg"
          style={{ color: "var(--muted-foreground)" }}
        >
          Short, no-fluff dispatches on craft, brand, and the projects we're
          shipping. Unsubscribe in one click.
        </p>

        {/* Email form */}
        <div className="relative z-10 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
            className="w-full max-w-xs rounded-full px-5 py-3 text-sm outline-none transition-all duration-300 sm:w-auto"
            style={{
              background: "color-mix(in oklab, var(--foreground) 8%, transparent)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
            onFocus={e => { e.currentTarget.style.borderColor = "var(--mint)"; e.currentTarget.style.boxShadow = "0 0 0 3px color-mix(in oklab, var(--mint) 20%, transparent)"; }}
            onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
          />
          <button
            onClick={(e) => e.preventDefault()}
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-500 ease-out hover:scale-[1.04]"
            style={{
              background: "linear-gradient(135deg, var(--mint), var(--electric))",
              color: "oklch(0.09 0.010 260)",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 30px 8px color-mix(in oklab, var(--mint) 35%, transparent)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
          >
            Subscribe Now
            <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1">→</span>
          </button>
        </div>

        <p className="relative z-10 mt-6 text-xs" style={{ color: "color-mix(in oklab, var(--muted-foreground) 60%, transparent)" }}>
          No spam. Cancel anytime. ~1,200 readers.
        </p>
      </div>
    </section>
  );
}
