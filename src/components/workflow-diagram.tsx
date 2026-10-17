import {
  CalendarCheck,
  CheckCircle,
  Database,
  FileText,
} from "@phosphor-icons/react/dist/ssr";
import { Fragment } from "react";

const steps = [
  { label: "Sources", icon: Database },
  { label: "Calculations", icon: CalendarCheck },
  { label: "Review", icon: CheckCircle },
  { label: "Output", icon: FileText },
];

// Abstract illustration of the workflow builder's pipeline, for the
// Workflow Builder card's mockup frame — a conceptual diagram built from
// the site's own icon/color language, not a screenshot of the product.
//
// bg-grid-lines sets its own `mask-image`, which (being on the element
// itself, not a pseudo-element) would mask this component's real content
// along with the texture if applied to the same div — so the texture gets
// its own absolutely-positioned layer behind the actual diagram instead
// (see globals.css / mockup-frame.tsx for the same gotcha elsewhere).
export function WorkflowDiagram() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-surface px-10">
      <div aria-hidden className="bg-grid-lines absolute inset-0" />
      <div
        className="relative grid w-full max-w-md gap-y-3"
        style={{ gridTemplateColumns: "auto 1fr auto 1fr auto 1fr auto" }}
      >
        {steps.map((step, i) => {
          const Icon = step.icon;
          const col = i * 2 + 1;
          return (
            <Fragment key={step.label}>
              <div
                className="flex h-11 w-11 items-center justify-center border border-border-strong bg-paper text-ink"
                style={{ gridColumn: col, gridRow: 1 }}
              >
                <Icon size={20} weight="fill" />
              </div>
              {i < steps.length - 1 && (
                <div
                  className="h-px self-center bg-border-strong"
                  style={{ gridColumn: col + 1, gridRow: 1 }}
                />
              )}
              <div
                className="text-center text-[11px] font-medium text-ink-soft"
                style={{ gridColumn: col, gridRow: 2 }}
              >
                {step.label}
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
