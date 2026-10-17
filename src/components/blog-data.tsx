import {
  ChartLineUp,
  Lightbulb,
  Target,
} from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";

// A post's body, when it has one, is a list of typed content blocks (not
// raw JSX/markdown) so the article template can render consistent
// typography without a markdown dependency for just one example article.
export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

// Single source of truth for blog posts — shared by the homepage teaser,
// the full /blog index, and the /blog/[slug] article template.
//
// "why-static-workflows-fail" has a real `body`: a template article
// showing what a filled-in post looks like in this layout. Its content is
// generic, defensible industry commentary — not a specific claim, metric,
// or customer story about Sinaxe — and references only the capabilities
// already described on the Key Capabilities section (sources, evidence,
// audit trail). The other two posts are still headline + category only;
// their template page renders an explicit TODO until real copy exists.
export const blogPosts: {
  slug: string;
  kicker: string;
  title: string;
  icon: ReactNode;
  body?: ArticleBlock[];
}[] = [
  {
    slug: "plan-smart-aligning-teams",
    kicker: "Plan Smart",
    title: "The Key to Aligning Teams and Boosting Efficiency",
    icon: <Target size={24} weight="fill" />,
  },
  {
    slug: "why-static-workflows-fail",
    kicker: "Stay Ahead",
    title: "Why Static Workflows Fail (and What Actually Works)",
    icon: <ChartLineUp size={24} weight="fill" />,
    body: [
      {
        type: "p",
        text: "Most fiscal teams don't choose spreadsheets — they inherit them. A process that started as one analyst's personal workbook becomes, over several tax seasons, the institutional memory for how a calculation actually gets done. It works, until the person who built it leaves, or two versions start circulating, or a reviewer needs to know why a number changed and nobody quite remembers.",
      },
      {
        type: "h2",
        text: "The hidden cost of spreadsheets",
      },
      {
        type: "p",
        text: "Spreadsheets are flexible by design, which is exactly why they're hard to govern. A cell's value doesn't carry its own history — no record of which source it came from, which assumption produced it, or who last touched it. When a number looks wrong, finding out why means reconstructing a chain of edits that was never captured in the first place.",
      },
      {
        type: "h2",
        text: "What breaks down first",
      },
      {
        type: "ul",
        items: [
          "Version control — the “final_v3_reallyfinal.xlsx” problem",
          "Provenance — no link back to the source document or decision behind a number",
          "Review — approvals happen over email, disconnected from the work itself",
          "Handoffs — institutional knowledge leaves when the person who built the sheet does",
        ],
      },
      {
        type: "h2",
        text: "What a structured workflow looks like instead",
      },
      {
        type: "p",
        text: "The fix isn't a better spreadsheet — it's treating the process itself as the artifact. A structured workflow links every value to its source, keeps a record of every calculation and decision, and routes review and approval through the same system doing the work. Nothing has to be reconstructed after the fact, because the history was never separate from the process.",
      },
      {
        type: "p",
        text: "None of this replaces judgment — a structured workflow still needs someone who understands the tax position to make the calls. What it removes is the overhead of proving, after the fact, how those calls were made.",
      },
    ],
  },
  {
    slug: "mastering-task-prioritization",
    kicker: "Smart Priorities",
    title: "Mastering Task Prioritization in Fast-Paced Teams",
    icon: <Lightbulb size={24} weight="fill" />,
  },
];
