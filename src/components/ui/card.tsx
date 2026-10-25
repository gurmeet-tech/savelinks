import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-md p-[16px] text-on-surface",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
