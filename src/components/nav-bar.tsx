"use client";

import {
  Briefcase,
  CalendarCheck,
  CheckCircle,
  ClockCounterClockwise,
  Database,
  FileText,
  Question,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react";
import Link from "next/link";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavDropdown, type NavDropdownColumn } from "./nav-dropdown";

const iconProps = { size: 22, weight: "fill" as const };

const productColumns: NavDropdownColumn[] = [
  {
    heading: "Capabilities",
    items: [
      {
        label: "Workflow Builder",
        description: "Build repeatable tax processes from sources to outputs.",
        href: "/#workflow-builder",
        icon: <Database {...iconProps} />,
        tone: "orange",
      },
      {
        label: "Document Intelligence",
        description: "Extract and structure info from any document.",
        href: "/#document-intelligence",
        icon: <FileText {...iconProps} />,
        tone: "orange",
      },
      {
        label: "Evidence-Based Calculations",
        description: "Link every value to its source and history.",
        href: "/#evidence-based-calculations",
        icon: <CalendarCheck {...iconProps} />,
        tone: "orange",
      },
      {
        label: "AI-Assisted Review",
        description: "Suggest mappings and flag inconsistencies, without replacing judgment.",
        href: "/#ai-assisted-review",
        icon: <Sparkle {...iconProps} />,
        tone: "orange",
      },
      {
        label: "Audit Trail",
        description: "Track who changed what, when, and why.",
        href: "/#audit-trail",
        icon: <ClockCounterClockwise {...iconProps} />,
        tone: "purple",
      },
    ],
  },
  {
    heading: "Workflow",
    items: [
      {
        label: "Get Things Done",
        description: "Handle complex workflows without the chaos.",
        href: "/#features",
        icon: <CheckCircle {...iconProps} />,
        tone: "neutral",
      },
      {
        label: "Why Teams Choose Us",
        description: "Clarity, speed, and team flow.",
        href: "/#why-choose-us",
        icon: <UsersThree {...iconProps} />,
        tone: "neutral",
      },
    ],
  },
];

const resourceColumns: NavDropdownColumn[] = [
  {
    heading: "Resources",
    items: [
      {
        label: "FAQ",
        description: "Answers to help you get started faster.",
        href: "/#faq",
        icon: <Question {...iconProps} />,
        tone: "neutral",
      },
      {
        label: "Careers",
        description: "Open roles across tax, law, data, and engineering.",
        href: "/careers",
        icon: <Briefcase {...iconProps} />,
        tone: "neutral",
      },
    ],
  },
];

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-border/60 bg-paper/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center px-6 py-5">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="ml-10 hidden items-center gap-8 md:flex">
          <NavDropdown label="Product" columns={productColumns} />
          <NavDropdown label="Resources" columns={resourceColumns} />
          <Link
            href="/#capabilities"
            className="text-base font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Capabilities
          </Link>
          <Link
            href="/blog"
            className="text-base font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Blog
          </Link>
          <Link
            href="/careers"
            className="text-base font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Careers
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <MobileNav
            productColumns={productColumns}
            resourceColumns={resourceColumns}
          />
          <Link
            href="/contact"
            className="bg-ink px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
