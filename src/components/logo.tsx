import Image from "next/image";

// Icon + wordmark as two separate elements with real, controllable
// spacing — replaces the old single flattened logo.png, where the mark
// (itself S-shaped) sat flush against "Sinaxe" and read like a double S.
// The wordmark is a cropped image of the original artwork (not live text)
// so it keeps the exact original typeface.
export function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  const iconFilter = dark
    ? "[filter:brightness(0)_invert(1)]"
    : "[filter:brightness(0)]";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/sinaxe-mark.png"
        alt=""
        width={28}
        height={27}
        priority
        className={`h-7 w-auto ${iconFilter}`}
      />
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
