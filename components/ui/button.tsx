import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-transform duration-150 [transition-timing-function:var(--ease-out)] border text-[length:calc(0.95rem*var(--scale))] rounded-[calc(var(--radius)-.25rem)] px-4 py-2",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--brand)] text-[#031318] border-[color:color-mix(in_oklab,var(--brand)_35%,transparent)] hover:-translate-y-[1px]",
        outline:
          "bg-transparent text-[color:var(--fg)] border-[color:color-mix(in_oklab,var(--brand)_35%,transparent)] hover:-translate-y-[1px]",
        ghost:
          "bg-transparent text-[color:var(--fg)] border-transparent hover:-translate-y-[1px]",
      },
      size: {
        sm: "px-3 py-1.5",
        md: "px-4 py-2",
        lg: "px-5 py-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";