"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, useRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

export function Button({ className, variant = "primary", children, onClick, ...props }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = ref.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "grid-ripple";
      ripple.style.left = e.clientX - rect.left - 4 + "px";
      ripple.style.top = e.clientY - rect.top - 4 + "px";
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 400);
    }
    onClick?.(e);
  };

  const variants = {
    primary: "bg-primary text-primary-contrast shadow-button-primary hover:brightness-[1.02]",
    secondary: "bg-transparent text-on-surface",
    tertiary: "bg-neutral text-on-surface",
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden inline-flex items-center justify-center h-[32px] px-[14px] rounded-lg text-[14px] font-medium leading-5 tracking-normal transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
