import {
  ArrowsClockwise,
  Bell,
  CalendarCheck,
  CloudCheck,
  HeartStraight,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import { SectionHeading } from "./section-heading";
import { Card } from "./card";
import { IconChip, type IconTone } from "./icon-chip";
import { Reveal } from "./reveal";

const cards: { title: string; body: string; icon: ReactNode; tone?: IconTone }[] = [
  {
    title: "Zero Overlap Planning",
    body: "Prevent task conflicts with built-in smart scheduling.",
    icon: <CalendarCheck size={24} weight="fill" />,
  },
  {
    title: "Click-to-Act Notifications",
    body: "Act fast with alerts—no clutter or missed updates.",
    icon: <Bell size={24} weight="fill" />,
  },
  {
    title: "Offline-Ready Sync",
    body: "Stay synced—updates auto-load once you're online.",
    icon: <CloudCheck size={24} weight="fill" />,
  },
  {
    title: "Built-In Audit Trail",
    body: "Track every edit and action with built-in transparency.",
    icon: <ShieldCheck size={24} weight="fill" />,
    tone: "purple",
  },
  {
    title: "Smart Recurring Tasks",
    body: "Automate with flexible task logic and helpful reminders.",
    icon: <ArrowsClockwise size={24} weight="fill" />,
  },
  {
    title: "Human-Centered Design",
    body: "Built for clarity, ease, and real-world user needs and habits.",
    icon: <HeartStraight size={24} weight="fill" />,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="scroll-mt-20 bg-surface px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Teams Choose Us"
          title="Boost clarity, speed, and team flow."
          subtitle="Packed with thoughtful features that help teams stay aligned, avoid confusion, and move fast — without the chaos."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.05}>
              <Card className="bg-paper">
                <IconChip size="sm" tone={card.tone} icon={card.icon} />
                <h3 className="mt-3 text-base font-medium text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{card.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
