import * as React from "react";
import { cn } from "../../lib/utils";

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  // Desktop-first container with generous max width and responsive padding
  return (
    <div className={cn("mx-auto w-full max-w-screen-2xl px-6 lg:px-8", className)} {...props} />
  );
}