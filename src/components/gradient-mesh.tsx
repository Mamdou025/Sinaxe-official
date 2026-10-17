// Same soft-blurred-blob technique as Stripe's WebGL hero, but recolored:
// the orange/purple/magenta version read as playful/consumer-startup.
// This uses muted ink and a restrained hint of the accent blue instead —
// a quiet charcoal/graphite glow suited to a serious, established brand.
export function GradientMesh({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 [filter:blur(70px)] opacity-60">
        <div className="animate-drift-a absolute -top-1/4 left-1/3 h-[60%] w-[60%] rounded-full bg-ink/15" />
        <div className="animate-drift-b absolute top-1/4 -right-1/4 h-[55%] w-[55%] rounded-full bg-ink-soft/15" />
        <div className="animate-drift-c absolute bottom-0 left-0 h-[50%] w-[50%] rounded-full bg-accent/10" />
        <div className="animate-drift-b absolute -bottom-1/4 right-1/4 h-[45%] w-[45%] rounded-full bg-ink/10" />
      </div>
      <div className="absolute inset-0 bg-white/50" />
    </div>
  );
}
