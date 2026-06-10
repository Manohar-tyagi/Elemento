import { ArrowUpRight } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "default" | "filled";
}

/** Pill CTA with an arrow that travels on hover. */
export function ArrowButton({
  label = "Read more",
  variant = "default",
  className = "",
  ...rest
}: ArrowButtonProps) {
  if (variant === "filled") {
    return (
      <button
        {...rest}
        className={`group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold tracking-[0.02em] text-background transition-all duration-500 ease-out hover:bg-brick hover:scale-[1.04] hover:tracking-[0.07em] ${className}`}
      >
        <span>{label}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    );
  }

  return (
    <button
      {...rest}
      className={`group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium tracking-[0.02em] text-foreground transition-all duration-500 ease-out hover:tracking-[0.07em] hover:border-foreground hover:bg-foreground hover:text-background ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
    </button>
  );
}
