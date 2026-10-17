import type { Metadata } from "next";
import { CareersList } from "@/components/careers-list";
import { NavBar } from "@/components/nav-bar";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Careers — Sinaxe",
  description: "Open roles at Sinaxe.",
};

export default function CareersPage() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <section className="relative overflow-hidden bg-paper px-6 pb-16 pt-40">
        <div aria-hidden className="bg-grid-lines absolute inset-0" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Careers
          </span>
          <h1 className="mt-3 text-balance text-4xl font-light tracking-tight text-ink sm:text-5xl">
            Help build the workflow layer for tax and fiscal teams.
          </h1>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            We&apos;re a small, cross-disciplinary team — tax, law, data
            engineering, and machine learning working on the same problem.
          </p>
        </div>
      </section>
      <section className="bg-surface px-6 py-20">
        <CareersList />
      </section>
      <SiteFooter />
    </div>
  );
}
