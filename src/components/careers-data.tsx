import {
  Brain,
  Calculator,
  Code,
  Database,
  Scales,
} from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import type { IconTone } from "./icon-chip";

// Shared by the /careers index and the /careers/[slug] role page. Roles
// grounded in the actual disciplines behind the product (tax, law, data
// engineering, ML, software) — not invented beyond that. Tone marks which
// side of the business each role sits on: orange for technical roles,
// purple for legal/regulatory ones.
export const roles: {
  slug: string;
  title: string;
  team: string;
  location: string;
  body: string;
  icon: ReactNode;
  tone: IconTone;
}[] = [
  {
    slug: "data-scientist-tax-fiscal-systems",
    title: "Data Scientist, Tax & Fiscal Systems",
    team: "Tax Modeling",
    location: "Remote",
    body: "Build and validate the calculation engines behind Sinaxe's tax workflows — from rule modeling to evidence-based computation.",
    icon: <Calculator size={24} weight="fill" />,
    tone: "orange",
  },
  {
    slug: "tax-regulatory-counsel",
    title: "Tax & Regulatory Counsel",
    team: "Legal",
    location: "Remote",
    body: "Keep workflow logic aligned with current tax law and flag regulatory changes that affect how calculations and reviews run.",
    icon: <Scales size={24} weight="fill" />,
    tone: "purple",
  },
  {
    slug: "machine-learning-scientist",
    title: "Machine Learning Scientist",
    team: "AI Research",
    location: "Remote",
    body: "Work on the document intelligence and AI-assisted review systems that read, structure, and reason over tax source material.",
    icon: <Brain size={24} weight="fill" />,
    tone: "orange",
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    team: "Platform",
    location: "Remote",
    body: "Build the pipelines that keep source documents, regulatory data, and calculation history reliable and queryable in real time.",
    icon: <Database size={24} weight="fill" />,
    tone: "orange",
  },
  {
    slug: "software-engineer-workflow-platform",
    title: "Software Engineer, Workflow Platform",
    team: "Engineering",
    location: "Remote",
    body: "Build the workflow builder, audit trail, and review surfaces fiscal teams use every day.",
    icon: <Code size={24} weight="fill" />,
    tone: "orange",
  },
];
