import Link from "next/link";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-center text-white">
      <div
        aria-hidden
        className="bg-logo-checker-dark pointer-events-none absolute -right-20 -top-20 h-80 w-80 [mask-image:radial-gradient(circle,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="bg-logo-checker-dark pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 [mask-image:radial-gradient(circle,black,transparent_70%)]"
      />
      <Reveal className="relative mx-auto max-w-2xl">
        <h2 className="text-balance text-3xl font-light tracking-tight sm:text-4xl">
          Ready to simplify your team&apos;s workflow?
        </h2>
        <p className="mt-4 text-balance text-white/60">
          Book a demo to see how Taskos helps teams move faster and work
          smarter.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/90"
        >
          Book a Demo
        </Link>
      </Reveal>
    </section>
  );
}
