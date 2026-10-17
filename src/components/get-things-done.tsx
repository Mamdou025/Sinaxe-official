import {
  Brain,
  Buildings,
  ChatCircleDots,
  Gauge,
  SquaresFour,
} from "@phosphor-icons/react/dist/ssr";
import { BadgeRow, SectionHeading } from "./section-heading";
import { IconChip } from "./icon-chip";
import { Reveal } from "./reveal";

const badges = [
  "Built with team logic",
  "Adapts as work evolves",
  "Insights without setup",
];

const cards = [
  {
    title: "Dynamic Workload Balancing",
    body: "Tasks are automatically distributed based on each member's bandwidth, so no one's overbooked or underused.",
    icon: <Gauge size={24} weight="fill" />,
  },
  {
    title: "Context-Aware Task Views",
    body: "Switch seamlessly between project views — from team-wide timelines to individual to-dos — all tied to real context.",
    icon: <SquaresFour size={24} weight="fill" />,
  },
  {
    title: "Built-In Decision Intelligence",
    body: "AI analyzes patterns in your team's workflows to recommend next actions, assign owners, and flag inefficiencies.",
    icon: <Brain size={24} weight="fill" />,
  },
  {
    title: "Collaborative Task Canvas",
    body: "Each task has its own collaborative thread with notes, comments, and file sharing — no need to switch tools.",
    icon: <ChatCircleDots size={24} weight="fill" />,
  },
  {
    title: "Enterprise-Ready Structure",
    body: "From small teams to enterprise org charts, structure tasks across departments, assign roles, and maintain clarity.",
    icon: <Buildings size={24} weight="fill" />,
  },
];

export function GetThingsDone() {
  return (
    <section id="features" className="scroll-mt-20 bg-ink px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          dark
          eyebrow="Get Things Done"
          title="Handle complex workflows without the chaos."
          subtitle="Adapts to shifting priorities and real workflows — keeping projects aligned, teams accountable, and decisions clear."
        />
        <BadgeRow dark items={badges} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <div className="border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:bg-white/[0.06]">
                <IconChip icon={card.icon} />
                <h3 className="mt-4 text-lg font-light text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-white/60">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
