import { footerColumns } from "@/data/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", background: "var(--background)" }}
    >
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full"
        style={{ background: "var(--purple)", opacity: 0.08, filter: "blur(60px)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 bottom-0 h-48 w-48 rounded-full"
        style={{ background: "var(--mint)", opacity: 0.06, filter: "blur(50px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a
              href="#home"
              className="font-display text-3xl font-bold tracking-tight transition-opacity hover:opacity-80"
              style={{ color: "var(--foreground)" }}
            >
              Elementum<span style={{ color: "var(--mint)" }}>.</span>
            </a>
            <p
              className="mt-3 max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              An independent studio crafting brands and digital products that last.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {["𝕏", "in", "▲", "◎"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300 hover:scale-110"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    color: "var(--muted-foreground)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "var(--mint)";
                    e.currentTarget.style.borderColor = "color-mix(in oklab, var(--mint) 40%, var(--border))";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "var(--muted-foreground)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-4 md:max-w-3xl">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4
                  className="font-display text-sm font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--foreground)" }}
                >
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-colors duration-300"
                        style={{ color: "var(--muted-foreground)" }}
                        onMouseEnter={e => { e.currentTarget.style.color = "var(--foreground)"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = "var(--muted-foreground)"; }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-14 pt-6 text-center"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            © {new Date().getFullYear()} Elementum Studio. All rights reserved.
            {" "}·{" "}
            <span className="gradient-text font-semibold">Made with intention.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
