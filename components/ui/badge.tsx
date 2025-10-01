import * as React from "react";
import { cn } from "../../lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-[color:color-mix(in_oklab,var(--brand)_35%,transparent)] bg-[color:var(--brand)]/10 px-2 py-1 text-xs uppercase tracking-wide text-[color:var(--fg)]",
        className
      )}
      {...props}
    />
  );
}