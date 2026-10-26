"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarClock, Home, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingBottomBar() {
  const pathname = usePathname();

  const items = [
    { href: "/", label: "Home", icon: Home },
    { href: "/nowplan", label: "NowPlan", icon: CalendarClock },
    { href: "/favorites", label: "Favs", icon: Heart },
  ];

  return (
    <div className="fixed bottom-[24px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-xs">
      <nav className="flex items-center justify-between gap-1 h-11 px-1.5 rounded-[12px] border border-border/70 bg-[rgba(255,255,255,0.9)] backdrop-blur-xl backdrop-saturate-150 shadow-[0_2px_8px_rgba(16,24,40,0.02)]">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative overflow-hidden flex items-center justify-center gap-1.5 h-8 px-3 rounded-lg text-[13px] font-medium transition-all duration-150 active:scale-[0.98] flex-1",
                active
                  ? "text-surface bg-[linear-gradient(180deg,#5A92FF_0%,#3F80FF_100%)] border border-[#2F67E6] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(47,103,230,0.4)]"
                  : "text-on-surface bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F8_100%)] border border-[#D6D8DC] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(229,231,235,0.9)] hover:bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F6F7_100%)]"
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="leading-none">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
