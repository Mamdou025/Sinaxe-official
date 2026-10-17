import Link from "next/link";
import { Logo } from "./logo";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Capabilities", href: "/#capabilities" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:flex-row sm:justify-between">
        <Logo dark />
        <div className="flex gap-16">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium text-white">{col.title}</p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href === "#" ? (
                      <span className="text-sm text-white/25">
                        {link.label}
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-6xl text-xs text-white/40">
        2026 Copyright © Sinaxe Inc. All rights reserved.
      </p>
    </footer>
  );
}
