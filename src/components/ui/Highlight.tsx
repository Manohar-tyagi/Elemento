import type { ReactNode } from "react";

/**
 * Inline text accents used in expressive display headlines.
 * Each variant maps to a hand-drawn-feeling treatment defined in styles.css.
 */
type Variant = "marker" | "brush" | "pill";

interface HighlightProps {
  variant: Variant;
  children: ReactNode;
  className?: string;
}

export function Highlight({ variant, children, className = "" }: HighlightProps) {
  if (variant === "marker") {
    return <span className={`hl-marker ${className}`}>{children}</span>;
  }
  if (variant === "pill") {
    return <span className={`hl-pill ${className}`}>{children}</span>;
  }
  return (
    <span className={`hl-brush ${className}`}>
      <span className="hl-brush-bg" aria-hidden />
      {children}
    </span>
  );
}
