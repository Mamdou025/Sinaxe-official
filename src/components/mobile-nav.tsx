"use client";

import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconChip } from "./icon-chip";
import { Logo } from "./logo";
import type { NavDropdownColumn } from "./nav-dropdown";

// Full-screen overlay (not a dropdown below the header) so it never has to
// guess the header's exact height — it covers the viewport outright and
// carries its own Logo + close button at the same spot the header's own
// toggle sits, so the swap from hamburger to X reads as one continuous bar.
// Rendered via a portal straight to <body>: as a plain child of the
// header's flex row, `fixed inset-0` computed to the header row's own
// content height instead of the viewport (a real layout bug, reproduced
// via getComputedStyle, not just a visual glitch) — portaling out from
// under that flex/align-items ancestor is the fix, and is the right
// pattern for a full-screen modal regardless. No separate "mounted" guard
// needed for the SSR/document check: `open` starts false via useState, so
// the createPortal branch can't evaluate until a later click — strictly
// client-side and past hydration by then — regardless of document's
// existence during the server/first-paint render.
export function MobileNav({
  productColumns,
  resourceColumns,
}: {
  productColumns: NavDropdownColumn[];
  resourceColumns: NavDropdownColumn[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
      >
        {open ? <X size={22} /> : <List size={22} />}
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-40 flex flex-col bg-paper md:hidden">
          <div className="flex items-center border-b border-border/60 px-6 py-5">
            <Link href="/" onClick={close} className="flex items-center">
              <Logo />
            </Link>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="ml-auto flex h-10 w-10 items-center justify-center text-ink"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="flex flex-col">
              <Link
                href="/#capabilities"
                onClick={close}
                className="border-b border-border/60 py-4 text-base font-medium text-ink"
              >
                Capabilities
              </Link>
              <Link
                href="/blog"
                onClick={close}
                className="border-b border-border/60 py-4 text-base font-medium text-ink"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                onClick={close}
                className="border-b border-border/60 py-4 text-base font-medium text-ink"
              >
                Careers
              </Link>
            </div>

            {[...productColumns, ...resourceColumns].map((col) => (
              <div key={col.heading} className="mt-6">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  {col.heading}
                </p>
                <ul className="mt-3 space-y-1">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className="flex items-center gap-3 py-2.5"
                      >
                        <IconChip size="sm" tone={item.tone} icon={item.icon} />
                        <span className="text-sm font-medium text-ink">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <Link
              href="/contact"
              onClick={close}
              className="mt-8 inline-flex w-full items-center justify-center bg-ink px-5 py-3 text-base font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>,
          document.body,
        )}
    </>
  );
}
