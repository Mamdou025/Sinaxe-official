import { Package, PuzzlePiece } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Card } from "@/components/card";
import { IconChip } from "@/components/icon-chip";
import { NavBar } from "@/components/nav-bar";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Pricing — Sinaxe",
  description: "How Sinaxe is priced.",
};

// Content from the intake questionnaire (2026-10-13): no published
// numbers yet — pricing is case by case, scoped in a free quote
// conversation. Two real paths, not invented tiers.
export default function PricingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <section className="relative overflow-hidden bg-paper px-6 pb-16 pt-40">
        <div aria-hidden className="bg-grid-lines absolute inset-0" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Pricing
          </span>
          <h1 className="mt-3 text-balance text-4xl font-light tracking-tight text-ink sm:text-5xl">
            Built around your workflow, priced the same way.
          </h1>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            No fixed tiers yet — every engagement starts with a quick
            conversation so the quote actually matches the work.
          </p>
        </div>
      </section>

      <section className="bg-surface px-6 py-20">
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          <Reveal>
            <Card className="flex h-full flex-col">
              <IconChip icon={<PuzzlePiece size={24} weight="fill" />} />
              <h2 className="mt-4 text-xl font-light text-ink">
                Custom build
              </h2>
              <p className="mt-3 flex-1 text-sm text-ink-soft">
                We scope and build a workflow around your actual process.
                Priced case by case after a short call — there&apos;s no
                standard rate card because the work isn&apos;t standard.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.06}>
            <Card className="flex h-full flex-col">
              <IconChip icon={<Package size={24} weight="fill" />} />
              <h2 className="mt-4 text-xl font-light text-ink">
                Pre-built workflows
              </h2>
              <p className="mt-3 flex-1 text-sm text-ink-soft">
                Ready-made workflows for common tax processes, installed
                and configured for your team — a faster starting point
                than a fully custom build.
              </p>
            </Card>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-5 max-w-3xl" delay={0.1}>
          <Card>
            <h2 className="text-xl font-light text-ink">
              Start with a free quote.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-ink-soft">
              Tell us about one workflow and we&apos;ll build a working
              test automation of it, then give you a free quote for the
              rest — typically inside 30 days.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
            >
              Get a quote
            </Link>
          </Card>
        </Reveal>
      </section>
      <SiteFooter />
    </div>
  );
}
