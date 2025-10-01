import * as React from "react";
import { cn } from "../../lib/utils";

export function Separator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={cn("h-px w-full bg-white/10", className)}
      {...props}
    />
  );
}