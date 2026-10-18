import Image from "next/image";
import { LogoMark } from "./logo-mark";

// Icon + wordmark as two separate elements with real, controllable
// spacing — replaces the old single flattened logo.png, where the mark
// (itself S-shaped) sat flush against "Sinaxe" and read like a double S.
// The wordmark is a cropped image of the original artwork (not live text)
// so it keeps the exact original typeface. The icon mark is per-block
// colored (see logo-mark.tsx) regardless of light/dark context; the
// wordmark stays flat black/white as before.
export function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-[27px] shrink-0" />
      <Image
        src={dark ? "/brand/sinaxe-wordmark-white.png" : "/brand/sinaxe-wordmark.png"}
        alt="Sinaxe"
        width={1366}
        height={255}
        priority
        className="h-5 w-auto"
      />
    </span>
  );
}
