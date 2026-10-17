import Link from "next/link";
import { roles } from "./careers-data";
import { Card } from "./card";
import { IconChip } from "./icon-chip";
import { Reveal } from "./reveal";

export function CareersList() {
  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {roles.map((role, i) => (
        <Reveal key={role.slug} delay={i * 0.05}>
          <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <IconChip tone={role.tone} icon={role.icon} />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-medium text-ink">
                    {role.title}
                  </h3>
                  <span className="bg-surface px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {role.team}
                  </span>
                </div>
                <p className="mt-2 max-w-xl text-sm text-ink-soft">
                  {role.body}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {role.location}
                </p>
              </div>
            </div>
            <Link
              href={`/careers/${role.slug}`}
              className="inline-flex shrink-0 items-center justify-center bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
            >
              Apply
            </Link>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
