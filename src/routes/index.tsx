import { createFileRoute } from "@tanstack/react-router";
import feature1 from "@/assets/feature-1.jpg";
import feature2 from "@/assets/feature-2.jpg";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { ServicesList } from "@/components/sections/ServicesList";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";
import { SnakeLine } from "@/components/ui/SnakeLine";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elementum — A studio of thinkers and doers" },
      {
        name: "description",
        content:
          "Elementum is an independent studio crafting brand systems, digital products, and the moments in between.",
      },
      { property: "og:title", content: "Elementum — A studio of thinkers and doers" },
      {
        property: "og:description",
        content:
          "We partner with ambitious teams to design brand systems and digital products built to outlast the trend cycle.",
      },
    ],
  }),
  component: Index,
});

const WORK_ITEMS = [
  {
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80",
    tag: "Brand Identity",
    title: "Northwind Rebrand",
    year: "2025",
    color: "var(--mint)",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
    tag: "Digital Product",
    title: "Flux Dashboard",
    year: "2024",
    color: "var(--brush)",
  },
  {
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop&q=80",
    tag: "Design System",
    title: "Arc Design Tokens",
    year: "2025",
    color: "var(--electric)",
  },
];

function WorkSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="studio" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div ref={ref} className="reveal-on-scroll">
        <div
          className="mb-12 flex items-end justify-between"
          data-reveal-child
          style={{ ["--reveal-delay" as string]: "0ms" }}
        >
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: "var(--brush)" }}>
              Selected work
            </span>
            <h2
              className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl"
              style={{ color: "var(--foreground)" }}
            >
              Recent projects<span className="gradient-text-warm">.</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
            style={{ color: "var(--muted-foreground)" }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--foreground)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--muted-foreground)"; }}
          >
            View all work →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {WORK_ITEMS.map((item, i) => (
            <a
              key={i}
              href="#"
              className="group block overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
              data-reveal-child
              style={{
                ["--reveal-delay" as string]: `${100 + i * 120}ms`,
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `color-mix(in oklab, ${item.color} 40%, var(--border))`;
                e.currentTarget.style.boxShadow = `0 20px 60px -20px color-mix(in oklab, ${item.color} 25%, transparent)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                    style={{
                      background: `color-mix(in oklab, ${item.color} 15%, transparent)`,
                      color: item.color,
                    }}
                  >
                    {item.tag}
                  </span>
                  <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>{item.year}</span>
                </div>
                <h3
                  className="mt-3 font-display text-xl font-bold transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Navbar />
      <main className="relative">
        <SnakeLine />
        <Hero />
        <Marquee />
        <WorkSection />

        <SplitFeature
          eyebrow="Our promise"
          title="Tomorrow should be better than today."
          description="We design for the long arc — brand systems, product surfaces, and operating rhythms that compound. Less noise, more signal, season after season."
          image={feature1}
          alignment="left"
          accentShape="square"
          stats={[
            { num: "140+", label: "Projects" },
            { num: "8 yrs", label: "Experience" },
          ]}
        />

        <SplitFeature
          eyebrow="How we work"
          title="See how we can help you progress."
          description="A small senior team works with you end-to-end — from positioning and identity to interface and launch — with the candor of an in-house partner."
          image={feature2}
          alignment="right"
          accentShape="triangle"
          stats={[
            { num: "96%", label: "Retention" },
            { num: "24h", label: "Response" },
          ]}
        />

        <ServicesList />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
