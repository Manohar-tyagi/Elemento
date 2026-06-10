/**
 * Continuous flowing pink vector that snakes the full page height, tying
 * Hero → Split Features → Services list together. Sits at z-0 with pointer
 * events disabled so it never blocks text selection or clicks.
 */
export function SnakeLine() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        className="absolute left-0 top-0 h-full w-full"
        viewBox="0 0 1440 4200"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M -50 220
            C 240 120, 520 380, 760 280
            S 1280 80, 1500 320
            S 1100 720, 820 760
            S 240 940, 80 1200
            S 360 1620, 720 1560
            S 1280 1380, 1480 1700
            S 1100 2160, 760 2200
            S 220 2380, 120 2680
            S 480 3100, 880 3020
            S 1380 2860, 1500 3180
            S 1100 3640, 720 3700
            S 200 3880, 0 4150
          "
          stroke="var(--brush)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="0"
          opacity="0.42"
        />
        <path
          d="
            M -50 240
            C 240 140, 520 400, 760 300
            S 1280 100, 1500 340
            S 1100 740, 820 780
            S 240 960, 80 1220
          "
          stroke="var(--brush)"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.25"
        />
      </svg>
    </div>
  );
}
