import {
  CalendarCheck,
  ClockCounterClockwise,
  Database,
  FileText,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import { BadgeRow, SectionHeading } from "./section-heading";
import { Card } from "./card";
import { IconChip, type IconTone } from "./icon-chip";
import { MockupFrame } from "./mockup-frame";
import { Reveal } from "./reveal";
import { WorkflowDiagram } from "./workflow-diagram";

const badges = [
  "Structured for clarity",
  "Launch-ready in minutes",
  "Clean and focused UX",
  "Scales with complex teams",
];

const cards: {
  slug: string;
  kicker: string;
  title: string;
  body: string;
  icon: ReactNode;
  tone: IconTone;
}[] = [
  {
    slug: "document-intelligence",
    kicker: "Clarity at a glance",
    title: "Document Intelligence",
    body: "Extract, summarize, and structure information from any document seamlessly.",
    icon: <FileText size={24} weight="fill" />,
    tone: "orange",
  },
  {
    slug: "evidence-based-calculations",
    kicker: "Work your way",
    title: "Evidence-Based Calculations",
    body: "Link each value to documents, source lines, user decisions, assumptions, and calculation history.",
    icon: <CalendarCheck size={24} weight="fill" />,
    tone: "orange",
  },
  {
    slug: "ai-assisted-review",
    kicker: "Work your way",
    title: "AI-Assisted Review",
    body: "Use AI to suggest mappings, identify inconsistencies, explain context, and support review without replacing professional judgment.",
    icon: <Sparkle size={24} weight="fill" />,
    tone: "orange",
  },
  {
    slug: "audit-trail",
    kicker: "Work your way",
    title: "Audit Trail",
    body: "Track who changed what, when, why, and from which source.",
    icon: <ClockCounterClockwise size={24} weight="fill" />,
    tone: "purple",
  },
];

export function KeyCapabilities() {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-20 overflow-hidden bg-surface px-6 py-28"
    >
      <div aria-hidden className="bg-grid-lines absolute inset-0" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Key Capabilities"
          title="The workflow layer for tax and fiscal teams."
          subtitle="Sinaxe adds the missing layer around Excel-based work: sources, evidence, context, AI assistance, approvals, and audit history."
        />
        <BadgeRow items={badges} />

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          <Reveal id="workflow-builder" className="scroll-mt-28 lg:col-span-3">
            <Card className="flex h-full flex-col overflow-hidden p-0">
              <div className="p-8 pb-0">
                <IconChip tone="orange" icon={<Database size={24} weight="fill" />} />
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  Right person, right task
                </p>
                <h3 className="mt-3 text-2xl font-light text-ink">
                  Workflow Builder
                </h3>
                <p className="mt-3 max-w-md text-sm text-ink-soft">
                  For fiscal teams to build repeatable processes from
                  sources, calculations, review steps, and outputs.
                </p>
              </div>
              <div className="p-8 pt-6">
                <MockupFrame alt="Workflow Builder" graphic={<WorkflowDiagram />} />
              </div>
            </Card>
          </Reveal>

          <div className="grid gap-5 lg:col-span-2">
            {cards.slice(0, 2).map((card, i) => (
              <Reveal
                key={card.title}
                id={card.slug}
                delay={i * 0.06}
                className="scroll-mt-28"
              >
                <Card className="flex flex-col">
                  <IconChip tone={card.tone} icon={card.icon} />
                  <p className="mt-4 text-sm font-medium text-muted-foreground">
                    {card.kicker}
                  </p>
                  <h3 className="mt-3 text-xl font-light text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-ink-soft">
                    {card.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {cards.slice(2).map((card, i) => (
            <Reveal
              key={card.title}
              id={card.slug}
              delay={i * 0.06}
              className="scroll-mt-28"
            >
              <Card className="flex flex-col">
                <IconChip tone={card.tone} icon={card.icon} />
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  {card.kicker}
                </p>
                <h3 className="mt-3 text-xl font-light text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-ink-soft">
                  {card.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
