import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { blogPosts } from "./blog-data";
import { SectionHeading } from "./section-heading";
import { Card } from "./card";
import { IconChip } from "./icon-chip";
import { Reveal } from "./reveal";

export function BlogTeaser() {
  return (
    <section id="blog" className="scroll-mt-20 bg-surface px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Blog"
          title="Blog"
          subtitle="Insights and strategies to boost productivity, collaboration, and smarter task management."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="block">
                <Card className="bg-paper">
                  <IconChip size="sm" icon={post.icon} />
                  <p className="mt-4 text-sm font-medium text-muted-foreground">
                    {post.kicker}
                  </p>
                  <h3 className="mt-3 text-lg font-light text-ink">
                    {post.title}
                  </h3>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink"
          >
            See all <ArrowRight size={14} weight="bold" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
