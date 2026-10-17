import { Calculator, Scales } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Card } from "./card";
import { IconChip } from "./icon-chip";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

// Two of the five target-customer segments named in the intake
// questionnaire (2026-10-13), given their own section rather than listed
// together — the two most tax-specific of the five.
const segments = [
  {
    title: "For CPA & Tax Firms",
    body: "Build repeatable, structured workflows around the calculations and filings your team already runs — connected to the spreadsheets you use, not replacing them.",
    icon: <Calculator size={24} weight="fill" />,
  },
  {
    title: "For Law Firms",
    body: "Keep regulatory and compliance work structured and traceable, with the same rigor your practice already holds itself to — less manual reconciliation, not less diligence.",
    icon: <Scales size={24} weight="fill" />,
  },
];

export function BuyerSegments() {
  return (
    <section className="bg-paper px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Who It's For"
          title="One platform, built for two practices."
          subtitle="Sinaxe also works for consultancies, in-house tax teams, and government agencies — these are the two it was built around first."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {segments.map((segment, i) => (
            <Reveal key={segment.title} delay={i * 0.08}>
              <Card className="flex h-full flex-col">
                <IconChip icon={segment.icon} />
                <h3 className="mt-4 text-xl font-light text-ink">
                  {segment.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-ink-soft">
                  {segment.body}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 text-sm font-medium text-ink"
                >
                  Talk to us →
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
