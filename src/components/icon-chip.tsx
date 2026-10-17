import type { ReactNode } from "react";

// The tech/law tone distinction still exists in the data (see callers),
// but every chip renders the same neutral treatment regardless of tone —
// color is reserved for the few places it carries real meaning (the
// headline highlight, the card-hover corner accent), not for decorating
// every icon on the page. Revisit toneClass if the tech/law chip coloring
// comes back.
export type IconTone = "orange" | "purple" | "neutral";

const toneClass: Record<IconTone, string> = {
  orange: "border border-border-strong bg-surface",
  purple: "border border-border-strong bg-surface",
  neutral: "border border-border-strong bg-surface",
};

export function IconChip({
  icon,
  tone = "neutral",
  size = "md",
  gradient = false,
}: {
  icon: ReactNode;
  tone?: IconTone;
  size?: "sm" | "md";
  /** Render the icon in the purple→orange gradient (needs a weight="fill"
   *  icon to look right) instead of flat ink — a trial of a more premium
   *  icon treatment, applied selectively while we gauge it. */
  gradient?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center text-ink ${
        size === "sm" ? "h-10 w-10" : "h-12 w-12"
      } ${toneClass[tone]}`}
    >
      {gradient ? <span className="gradient-icon">{icon}</span> : icon}
    </div>
  );
}
