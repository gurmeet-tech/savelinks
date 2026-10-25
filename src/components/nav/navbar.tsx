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
            "mt-3 flex items-center justify-between gap-4 rounded-[10px] border border-border/60 px-4 h-12",
            "bg-[rgba(247,247,248,0.8)] backdrop-blur-xl backdrop-saturate-150"
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            <Video className="h-4 w-4 text-on-surface" />
            <span className="text-[17px] font-medium leading-5 text-on-surface">PrepVault</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/favorites"
              className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-[13px] font-medium text-on-surface hover:bg-black/[0.02] transition-colors"
            >
              <Heart className="h-3.5 w-3.5" />
              Favorites
            </Link>
            <button
              onClick={onAddClick}
              className="relative overflow-hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-primary text-primary-contrast text-[13px] font-medium shadow-button-primary hover:brightness-[1.02]"
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
