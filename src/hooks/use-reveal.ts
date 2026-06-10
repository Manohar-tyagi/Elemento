import { useEffect, useRef } from "react";

/**
 * Adds an `in-view` class to the element once it enters the viewport.
 * Pair with the `.reveal-on-scroll` utility for the transition.
 * Children with `data-reveal-child` get a staggered transition-delay.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in-view");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          io.disconnect();
        }
      },
      options
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
