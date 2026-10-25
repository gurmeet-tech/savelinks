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
              className="relative overflow-hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-[14px] font-medium text-on-surface hover:bg-neutral/60 transition-colors"
            >
              <Heart className="h-3.5 w-3.5" />
              Favorites
            </Link>
            <button
              onClick={onAddClick}
              className="relative overflow-hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-primary text-surface text-[14px] font-medium hover:bg-[#4F87FF] active:bg-[#2F67E6] shadow-[0_1px_2px_rgba(63,128,255,0.25)] transition-colors"
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
