"use client";

import { Plus } from "@phosphor-icons/react";
import { useState } from "react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

// Answers from the content intake questionnaire (2026-10-13) — lightly
// copyedited for publication, not reworded in substance.
const questions = [
  {
    q: "Does Sinaxe replace Excel?",
    a: "No — Sinaxe builds around Excel rather than replacing it. We connect your existing spreadsheets to other systems, trace every number back to its source, and turn one-off calculations into a repeatable process.",
  },
  {
    q: "What kind of workflows can Sinaxe support?",
    a: "Tax workflows of any complexity — multi-step calculations, regulatory checks, and filings.",
  },
  {
    q: "Is the AI making tax decisions?",
    a: "No. The AI assists — surfacing information, suggesting next steps, and pulling together what's useful — but the judgment calls stay with your team.",
  },
  {
    q: "Can workflows be customized?",
    a: "Yes, highly. The visual builder makes it straightforward to put one together yourself.",
  },
  {
    q: "What can a team receive in 30 days?",
    a: "A working test automation of one of your workflows, plus a free quote for building out the rest.",
  },
  {
    q: "Is this only for large firms?",
    a: "No — it works for firms of any size, small, medium, or large, as long as there's a team and a budget behind the project.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-20 bg-paper px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to help you get started faster."
          subtitle="Common questions about how Sinaxe works, who it's for, and what to expect."
        />
        <div className="mt-12 space-y-3">
          {questions.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 0.04}>
                <div className="border border-border/60 bg-surface transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-ink">{q}</span>
                    <Plus
                      size={18}
                      className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-4 text-sm text-muted-foreground">
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
