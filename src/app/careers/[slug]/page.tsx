import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ApplicationForm } from "@/components/application-form";
import { roles } from "@/components/careers-data";
import { IconChip } from "@/components/icon-chip";
import { NavBar } from "@/components/nav-bar";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);
  if (!role) return {};
  return {
    title: `${role.title} — Sinaxe Careers`,
    description: role.body,
  };
}

// Same Suspense-isolation as the blog template: keeps the shell instant
// under cacheComponents (see next.config.ts) while the dynamic slug
// param resolves underneath it.
async function RoleHeader({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);

  if (!role) {
    notFound();
  }

  return (
    <Reveal className="mt-8">
      <IconChip tone={role.tone} icon={role.icon} />
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <p className="text-sm font-medium text-muted-foreground">
          {role.team}
        </p>
        <span className="bg-surface px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          {role.location}
        </span>
      </div>
      <h1 className="mt-3 text-balance text-4xl font-light tracking-tight text-ink sm:text-5xl">
        {role.title}
      </h1>
      <p className="mt-6 max-w-xl text-base text-ink-soft">{role.body}</p>
    </Reveal>
  );
}

async function RoleApplicationForm({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);

  if (!role) {
    notFound();
  }

  return <ApplicationForm role={role.title} />;
}

export default function CareerRolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <section className="relative overflow-hidden bg-paper px-6 pb-16 pt-40">
        <div aria-hidden className="bg-grid-lines absolute inset-0" />
        <div className="relative mx-auto max-w-2xl">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft size={14} weight="bold" />
            Back to Careers
          </Link>
          <Suspense fallback={null}>
            <RoleHeader params={params} />
          </Suspense>
        </div>
      </section>

      <section className="bg-surface px-6 py-20">
        <div className="relative mx-auto max-w-2xl">
          <Suspense fallback={null}>
            <RoleApplicationForm params={params} />
          </Suspense>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
