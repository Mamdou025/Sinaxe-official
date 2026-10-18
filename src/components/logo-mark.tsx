// The Sinaxe mark as 7 discrete blocks (coordinates lifted directly from
// the source PNG via connected-component analysis), each given its own
// solid fill — orange for the top-right blocks, purple for the
// bottom-left ones — with only the center block carrying an actual
// gradient between them. A single diagonal gradient across the whole
// icon (the earlier approach) muddied into one flat color at this size
// because the "S" shape doesn't give a smooth gradient room to show both
// ends; per-block color does.
const blocks: { x: number; y: number; w: number; h: number; fill: string }[] = [
  { x: 180, y: 43, w: 144, h: 74, fill: "var(--color-brand-orange)" },
  { x: 332, y: 43, w: 144, h: 74, fill: "var(--color-brand-orange)" },
  { x: 35, y: 137, w: 144, h: 73, fill: "var(--color-brand-orange)" },
  { x: 187, y: 216, w: 144, h: 74, fill: "url(#sinaxe-mark-gradient)" },
  { x: 332, y: 300, w: 144, h: 73, fill: "var(--color-brand-purple)" },
  { x: 35, y: 394, w: 144, h: 73, fill: "var(--color-brand-purple)" },
  { x: 187, y: 394, w: 144, h: 73, fill: "var(--color-brand-purple)" },
];

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="25 33 461 444"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient id="sinaxe-mark-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-brand-orange)" />
          <stop offset="100%" stopColor="var(--color-brand-purple)" />
        </linearGradient>
      </defs>
      {blocks.map((b) => (
        <rect
          key={`${b.x}-${b.y}`}
          x={b.x}
          y={b.y}
          width={b.w}
          height={b.h}
          rx={10}
          fill={b.fill}
        />
      ))}
    </svg>
  );
}
