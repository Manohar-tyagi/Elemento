import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl shadow-[0_1px_0_var(--color-border)]"
          : "backdrop-blur-md"
      }`}
      style={{
        backgroundColor: scrolled
          ? "color-mix(in oklab, var(--background) 85%, transparent)"
          : "color-mix(in oklab, var(--background) 70%, transparent)",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-tight transition-all duration-300 hover:opacity-80"
          style={{ color: "var(--foreground)" }}
        >
          Elementum<span style={{ color: "var(--mint)" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative text-sm font-medium transition-colors duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--foreground)";
                  (e.currentTarget.querySelector("::after") as any);
                }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--muted-foreground)"; }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-400 ease-out hover:scale-[1.04]"
            style={{
              background: "linear-gradient(135deg, var(--mint), var(--electric))",
              color: "oklch(0.09 0.010 260)",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 24px 4px color-mix(in oklab, var(--mint) 40%, transparent)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
          >
            Start a project ✦
          </a>
          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full transition-colors duration-300 md:hidden"
            style={{ color: "var(--foreground)" }}
          >
            {open ? <X className="h-5 w-5" /> : (
              <>
                <span className="block h-px w-5 transition-all duration-300" style={{ background: "var(--foreground)" }} />
                <span className="block h-px w-5 transition-all duration-300" style={{ background: "var(--foreground)" }} />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-out md:hidden ${
          open ? "max-h-72 border-t" : "max-h-0"
        }`}
        style={{ borderColor: "var(--border)" }}
      >
        <ul className="flex flex-col gap-0.5 px-5 py-3">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-base font-medium transition-colors"
                style={{ color: "var(--foreground)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
