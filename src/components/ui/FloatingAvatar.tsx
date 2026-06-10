interface FloatingAvatarProps {
  src: string;
  alt?: string;
  className?: string;
  delay?: string;
}

/**
 * Absolutely-positioned circular portrait that gently bobs in place and
 * gracefully scales on hover. Position + size come from `className`.
 */
export function FloatingAvatar({ src, alt = "", className = "", delay = "0ms" }: FloatingAvatarProps) {
  return (
    <div
      className={`absolute z-10 overflow-hidden rounded-full ring-4 ring-background shadow-[0_12px_30px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:scale-[1.08] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.45)] ${className}`}
      style={{ animationDelay: delay }}
    >
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}
