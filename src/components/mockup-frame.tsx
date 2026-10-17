import Image from "next/image";
import type { ReactNode } from "react";

// Drop a real product screenshot in via `src` and it renders inside a
// browser-chrome frame, Stripe-bento style. Without `src`, pass a `graphic`
// (an abstract, hand-built diagram — not a fabricated UI) if one fits the
// card; otherwise it falls back to the brand checker texture as an honest
// empty state. bg-surface lives on the outer wrapper only: .bg-logo-checker's
// own `filter` crushes anything painted on the SAME element (see globals.css
// history), so a second bg-color there would vanish instead of showing
// through.
export function MockupFrame({
  src,
  alt = "",
  graphic,
}: {
  src?: string;
  alt?: string;
  graphic?: ReactNode;
}) {
  return (
    <div className="overflow-hidden border border-border/60 bg-surface shadow-inner">
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-white px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>
      <div className="relative aspect-[16/10] w-full">
        {src ? (
          <Image src={src} alt={alt} fill className="object-cover object-top" />
        ) : graphic ? (
          graphic
        ) : (
          <div className="bg-logo-checker h-full w-full" />
        )}
      </div>
    </div>
  );
}
