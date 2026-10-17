import { LockKey, ShieldCheck, UserCircleGear } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Card } from "@/components/card";
import { IconChip } from "@/components/icon-chip";
import { NavBar } from "@/components/nav-bar";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Security — Sinaxe",
  description: "How Sinaxe handles your data today, and what's next.",
};

const practices = [
  {
    title: "Encrypted connections",
    body: "Traffic to and from Sinaxe is encrypted in transit.",
    icon: <LockKey size={24} weight="fill" />,
  },
  {
    title: "Limited access",
    body: "Access to customer data is limited to what's needed to build and support the product — not open by default.",
    icon: <UserCircleGear size={24} weight="fill" />,
  },
  {
    title: "No data resale",
    body: "We don't sell or share your data with third parties.",
    icon: <ShieldCheck size={24} weight="fill" />,
  },
];

// Deliberately not claiming certifications we don't have. Per the content
// intake questionnaire (2026-10-13): state current practices honestly,
// name what's on the roadmap as a roadmap — never present it as present
// compliance.
export default function SecurityPage() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <section className="relative overflow-hidden bg-paper px-6 pb-16 pt-40">
        <div aria-hidden className="bg-grid-lines absolute inset-0" />
        <div className="relative mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Security
          </span>
          <h1 className="mt-3 text-balance text-4xl font-light tracking-tight text-ink sm:text-5xl">
            Where we stand today, and what&apos;s next.
          </h1>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            We&apos;re a small team early in our journey. Here&apos;s what
            that honestly means for your data, with no claims we
            can&apos;t back up.
          </p>
        </div>
      </section>

      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-5 sm:grid-cols-3">
            {practices.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <Card className="flex h-full flex-col">
                  <IconChip icon={p.icon} />
                  <h2 className="mt-4 text-base font-medium text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-ink-soft">
                    {p.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-5" delay={0.18}>
            <Card>
              <h2 className="text-xl font-light text-ink">
                Certifications are a roadmap item, not a claim.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-ink-soft">
                We don&apos;t hold SOC 2 or ISO 27001 yet — we&apos;re
                not going to put a badge on this page that isn&apos;t
                true. As the team grows, pursuing formal certification is
                on our roadmap, and this page will be updated the moment
                that changes.
              </p>
            </Card>
          </Reveal>

          <Reveal className="mt-5" delay={0.22}>
            <Card>
              <h2 className="text-xl font-light text-ink">
                Questions about handling your data?
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-ink-soft">
                If your team needs specifics for a security review, ask
                us directly — we&apos;d rather answer precisely than
                guess here.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
              >
                Contact us
              </Link>
            </Card>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
