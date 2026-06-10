import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQs", href: "#faqs" },
] as const;

export const heroAvatars = [
  // Top-left corner, well clear of headline
  { src: avatar1, name: "Maya",  className: "left-[2%] top-[2%] h-20 w-20 md:h-24 md:w-24 float-slow" },
  // Top-right corner
  { src: avatar2, name: "Ben",   className: "right-[3%] top-[4%] h-16 w-16 md:h-20 md:w-20 float-slower" },
  // Bottom-left, below CTA
  { src: avatar3, name: "Imani", className: "left-[4%] bottom-[2%] h-24 w-24 md:h-28 md:w-28 float-medium" },
  // Bottom-right, below CTA
  { src: avatar4, name: "Kenji", className: "right-[4%] bottom-[6%] h-20 w-20 md:h-24 md:w-24 float-slow" },
  // Far outer edges only on large screens
  { src: avatar5, name: "Eve",   className: "left-[-2%] top-[42%] h-14 w-14 lg:h-16 lg:w-16 float-slower hidden lg:block" },
  { src: avatar6, name: "Diego", className: "right-[-2%] top-[38%] h-12 w-12 lg:h-16 lg:w-16 float-medium hidden lg:block" },
] as const;

export const testimonialAvatars = [
  { src: avatar2, className: "top-[-8%] left-[-2%] h-14 w-14 md:h-20 md:w-20 float-slow" },
  { src: avatar3, className: "bottom-[-6%] left-[6%] h-12 w-12 md:h-16 md:w-16 float-medium" },
  { src: avatar4, className: "top-[-10%] right-[-2%] h-16 w-16 md:h-24 md:w-24 float-slower" },
  { src: avatar5, className: "bottom-[-8%] right-[8%] h-12 w-12 md:h-16 md:w-16 float-slow" },
  { src: avatar1, className: "top-[40%] left-[-6%] h-10 w-10 md:h-14 md:w-14 float-medium hidden lg:block" },
  { src: avatar6, className: "top-[40%] right-[-6%] h-10 w-10 md:h-14 md:w-14 float-slower hidden lg:block" },
] as const;

export type ServiceRow = {
  subtext: string;
  title: string;
  highlight?: string;
  badge?: boolean;
};

export const services: ServiceRow[] = [
  {
    subtext: "Bold ideas, sharper execution",
    title: "Crafting brands that resonate",
  },
  {
    subtext: "Strategy, design and motion under one roof",
    title: "Collaborative studio working within teams",
  },
  {
    subtext: "From early signal to scaled launch",
    title: "Piloting digital",
    highlight: "confidence",
    badge: true,
  },
];

export const footerColumns = [
  {
    title: "Company",
    links: ["About", "Studio", "Careers", "Press", "Journal"],
  },
  {
    title: "Terms & Policies",
    links: ["Terms of use", "Privacy policy", "Cookies", "Licenses", "Imprint"],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "Twitter / X", "LinkedIn", "Dribbble", "YouTube"],
  },
  {
    title: "Contact",
    links: ["hello@elementum.studio", "+1 (415) 555 — 0142", "221B Market St.", "San Francisco, CA"],
  },
] as const;
