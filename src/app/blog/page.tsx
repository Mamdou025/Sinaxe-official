import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/components/blog-data";
import { Card } from "@/components/card";
import { IconChip } from "@/components/icon-chip";
import { NavBar } from "@/components/nav-bar";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Blog — Sinaxe",
  description:
    "Insights and strategies to boost productivity, collaboration, and smarter task management.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <section className="relative overflow-hidden bg-paper px-6 pb-16 pt-40">
        <div aria-hidden className="bg-grid-lines absolute inset-0" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Blog
          </span>
          <h1 className="mt-3 text-balance text-4xl font-light tracking-tight text-ink sm:text-5xl">
            Insights and strategies for fiscal teams.
          </h1>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            Productivity, collaboration, and smarter task management.
          </p>
        </div>
      </section>

      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-4">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link href={`/blog/${post.slug}`} className="block">
                <Card className="flex items-center gap-5">
                  <IconChip icon={post.icon} />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {post.kicker}
                    </p>
                    <h2 className="mt-1 text-lg font-medium text-ink">
                      {post.title}
                    </h2>
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
