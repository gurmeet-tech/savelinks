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
    primary:
      "bg-[linear-gradient(180deg,#5A92FF_0%,#3F80FF_100%)] text-surface border border-[#2F67E6] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(47,103,230,0.4),0_1px_1px_rgba(63,128,255,0.16)] hover:bg-[linear-gradient(180deg,#6A9AFF_0%,#4F87FF_100%)] active:bg-[linear-gradient(180deg,#3F80FF_0%,#2F67E6_100%)]",
    secondary:
      "bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F8_100%)] text-on-surface border border-[#D6D8DC] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(229,231,235,0.9),0_1px_1px_rgba(16,24,40,0.01)] hover:bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F6F7_100%)] active:bg-[linear-gradient(180deg,#F9F9FA_0%,#F1F2F4_100%)]",
    tertiary:
      "bg-transparent text-on-surface hover:underline underline-offset-2 h-auto px-0 border-0 shadow-none",
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden inline-flex items-center justify-center h-[32px] px-[14px] rounded-lg text-[14px] font-medium leading-[1.2] tracking-normal transition-all duration-150",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
