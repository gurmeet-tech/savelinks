"use client";

import Link from "next/link";
import { Heart, Plus, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onAddClick?: () => void;
}

export function Navbar({ onAddClick }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <nav
          className={cn(
            "mt-3 flex items-center justify-between gap-4 h-12 px-4 rounded-[10px] border border-border/70",
            "bg-[rgba(255,255,255,0.8)] backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_1px_rgba(0,0,0,0.01)]"
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            <Video className="h-4 w-4 text-on-surface" />
            <span className="text-[19px] font-medium leading-[1.2] text-on-surface">PrepVault</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/favorites"
              className="relative overflow-hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-[14px] font-medium text-on-surface bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F8_100%)] border border-[#D6D8DC] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(229,231,235,0.9),0_1px_1px_rgba(16,24,40,0.01)] hover:bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F6F7_100%)] transition-all duration-150"
            >
              <Heart className="h-3.5 w-3.5" />
              Favorites
            </Link>
            <button
              onClick={onAddClick}
              className="relative overflow-hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-[14px] font-medium text-surface bg-[linear-gradient(180deg,#5A92FF_0%,#3F80FF_100%)] border border-[#2F67E6] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(47,103,230,0.4),0_1px_1px_rgba(63,128,255,0.16)] hover:bg-[linear-gradient(180deg,#6A9AFF_0%,#4F87FF_100%)] active:bg-[linear-gradient(180deg,#3F80FF_0%,#2F67E6_100%)] transition-all duration-150"
            >
              <Plus className="h-3.5 w-3.5" />
              Add Video
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
