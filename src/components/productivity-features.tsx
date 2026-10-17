import { Card } from "./card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const items = [
  {
    kicker: "help AI understand the workflow context",
    body: "Easily track reasoning, sources, decisions, and steps behind the work.",
  },
  {
    kicker: "Built for fast-moving teams.",
    body: "Collaborate in real time with live edits and comments.",
  },
  {
    kicker: "preserve audit trails across sessions",
    body: "Turn recurring tax processes into reusable workflows that can be shared,",
  },
  {
    kicker: "track sources, evidence, and work history",
    body: "Help new team members understand not only the final numbers, but the reasoning, sources, decisions, and steps behind the work.",
  },
];

export function ProductivityFeatures() {
  return (
    <section className="bg-paper px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Productivity Features"
          title="Made for how your team actually works."
          subtitle="Tax work is still trapped across spreadsheets, emails, documents, and people's heads."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.kicker} delay={i * 0.08}>
              <Card>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.kicker}
                </p>
                <p className="mt-3 text-base text-ink-soft">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
