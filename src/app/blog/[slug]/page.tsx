import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { blogPosts } from "@/components/blog-data";
import { IconChip } from "@/components/icon-chip";
import { NavBar } from "@/components/nav-bar";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Sinaxe Blog`,
    description: post.kicker,
  };
}

// The part that actually needs the dynamic `slug` param, isolated behind
// its own Suspense boundary so the rest of the page (nav, static shell)
// can render as an instant shell under cacheComponents — see
// next.config.ts. notFound() thrown from here still 404s the whole route.
async function PostHeader({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Reveal className="mt-8">
      <IconChip icon={post.icon} />
      <p className="mt-4 text-sm font-medium text-muted-foreground">
        {post.kicker}
      </p>
      <h1 className="mt-3 text-balance text-4xl font-light tracking-tight text-ink sm:text-5xl">
        {post.title}
      </h1>
    </Reveal>
  );
}

// Same Suspense-isolation reason as PostHeader. Renders the post's typed
// `body` blocks when it has one (see blog-data.tsx), or the explicit TODO
// otherwise — never invented article copy.
async function PostBody({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  if (!post.body) {
    return (
      <div className="card-glow border border-border-strong bg-paper p-8 sm:p-10">
        <p className="text-sm text-muted-foreground">
          TODO — this article hasn&apos;t been written yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {post.body.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-10 text-xl font-medium text-ink first:mt-0"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={i}
              className="list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-soft"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-base leading-relaxed text-ink-soft">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

// Article template: the shared layout every blog post renders through.
// Only one of the three posts has a real `body` right now — a template
// article showing what a filled-in post looks like — the other two still
// render the TODO fallback above until real copy is written.
export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <section className="relative overflow-hidden bg-paper px-6 pb-16 pt-40">
        <div aria-hidden className="bg-grid-lines absolute inset-0" />
        <div className="relative mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft size={14} weight="bold" />
            Back to Blog
          </Link>
          <Suspense fallback={null}>
            <PostHeader params={params} />
          </Suspense>
        </div>
      </section>

      <section className="bg-surface px-6 py-20">
        <Reveal className="mx-auto max-w-3xl">
          <Suspense fallback={null}>
            <PostBody params={params} />
          </Suspense>
        </Reveal>
      </section>
      <SiteFooter />
    </div>
  );
}
