"use client";

import { CaretDown } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { IconChip, type IconTone } from "./icon-chip";

export type NavDropdownColumn = {
  heading: string;
  items: {
    label: string;
    description: string;
    href: string;
    icon: ReactNode;
    tone?: IconTone;
  }[];
};

// Reverse-engineered from stripe.com's nav: the real mechanism isn't a
// simple opacity fade, it's clip-path + max-height revealing together,
// topped with a soft two-layer shadow for elevation. Kept quick (fast
// enough to feel instant while sliding across nav items) rather than the
// slower durations Stripe itself uses.
const panelVariants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      clipPath: { duration: 0.12, ease: [0.45, 0.05, 0.55, 0.95] as const },
      opacity: { duration: 0.08, ease: [0.45, 0.05, 0.55, 0.95] as const },
    },
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      clipPath: { duration: 0.12, ease: [0.45, 0.05, 0.55, 0.95] as const },
      opacity: { duration: 0.15, ease: [0.45, 0.05, 0.55, 0.95] as const },
    },
  },
};

export function NavDropdown({
  label,
  columns,
}: {
  label: string;
  columns: NavDropdownColumn[];
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 80);
  };

  return (
    <div onMouseEnter={show} onMouseLeave={hide} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-base font-medium text-ink-soft transition-colors hover:text-ink"
        aria-expanded={open}
      >
        {label}
        <CaretDown
          size={13}
          weight="bold"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={panelVariants}
            style={{
              boxShadow:
                "0 18px 36px -18px rgba(0,0,0,0.1), 0 30px 45px -30px rgba(50,50,93,0.25)",
            }}
            className={`card-glow corner-accent-orange absolute left-0 top-full z-40 mt-4 p-8 ${
              columns.length > 1 ? "w-[620px]" : "w-80"
            }`}
          >
            <div
              className={`grid gap-8 ${columns.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
            >
              {columns.map((col) => (
                <div key={col.heading}>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                    {col.heading}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {col.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-start gap-3 p-1.5 transition-colors hover:bg-surface"
                        >
                          <IconChip
                            size="sm"
                            tone={item.tone}
                            icon={item.icon}
                          />
                          <span className="min-w-0">
                            <span className="block text-sm font-medium text-ink">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
