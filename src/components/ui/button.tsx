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
      ripple.className = "btn-grid-ripple";
      ripple.style.left = e.clientX - rect.left + "px";
      ripple.style.top = e.clientY - rect.top + "px";
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 380);
    }
    onClick?.(e);
  };

  const variants = {
    primary: "bg-primary text-surface hover:bg-[#4F87FF] active:bg-[#2F67E6] shadow-[0_1px_2px_rgba(63,128,255,0.25)]",
    secondary: "bg-surface text-on-surface border border-border hover:bg-neutral/50",
    tertiary: "bg-transparent text-on-surface hover:underline underline-offset-2 h-auto px-0",
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden inline-flex items-center justify-center h-[32px] px-[14px] rounded-lg text-[14px] font-medium leading-[1.2] tracking-normal transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
