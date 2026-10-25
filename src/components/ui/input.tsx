import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-[32px] w-full rounded-lg border border-border bg-surface px-[14px] text-[14px] text-on-surface placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-primary/30",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
