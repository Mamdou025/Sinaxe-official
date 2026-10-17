import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <Reveal
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span
        className={`text-xs font-medium uppercase tracking-[0.12em] ${dark ? "text-white/50" : "text-muted-foreground"}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-balance text-3xl font-light tracking-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-balance text-base sm:text-lg ${dark ? "text-white/60" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function BadgeRow({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`px-3.5 py-1.5 text-xs font-medium ${
            dark ? "bg-white/10 text-white/70" : "bg-surface text-ink-soft"
          }`}
        >
          {item}
        </span>
      ))}
    </Reveal>
  );
}
