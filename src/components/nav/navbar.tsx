"use client";

import Link from "next/link";
import { HeartIcon, PlusSquareIcon, YoutubeIcon } from "@/components/icons";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onAddClick?: () => void;
}

export function Navbar({ onAddClick }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="mt-2 sm:mt-3 flex items-center justify-between gap-4 h-11 sm:h-12 px-3 sm:px-4 rounded-[10px] border border-border/70 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_1px_rgba(0,0,0,0.01)]">
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <YoutubeIcon className="h-4 w-4 text-on-surface shrink-0" />
            <span className="text-[17px] sm:text-[19px] font-medium leading-[1.2] text-on-surface truncate">PrepVault</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/favorites"
              className="relative overflow-hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-[14px] font-medium text-on-surface bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F8_100%)] border border-[#D6D8DC] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(229,231,235,0.9),0_1px_1px_rgba(16,24,40,0.01)] hover:bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F6F7_100%)] transition-all duration-150"
            >
              <HeartIcon className="h-3.5 w-3.5" />
              Favorites
            </Link>
            <button
              onClick={onAddClick}
              className="relative overflow-hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-[14px] font-medium text-surface bg-[linear-gradient(180deg,#5A92FF_0%,#3F80FF_100%)] border border-[#2F67E6] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(47,103,230,0.4),0_1px_1px_rgba(63,128,255,0.16)] hover:bg-[linear-gradient(180deg,#6A9AFF_0%,#4F87FF_100%)] active:bg-[linear-gradient(180deg,#3F80FF_0%,#2F67E6_100%)] transition-all duration-150"
            >
              <PlusSquareIcon className="h-3.5 w-3.5" />
              Add Video
            </button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden relative overflow-hidden inline-flex items-center justify-center h-8 w-8 rounded-lg bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F8_100%)] border border-[#D6D8DC] shadow-[inset_0_1px_0_rgba(255,255,255,1)]"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
        {open && (
          <div className="sm:hidden mt-2 rounded-[10px] border border-border/70 bg-[rgba(255,255,255,0.95)] backdrop-blur-xl p-2 flex flex-col gap-1">
            <Link
              href="/favorites"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 h-9 rounded-lg text-[14px] font-medium text-on-surface hover:bg-neutral/70"
            >
              <HeartIcon className="h-3.5 w-3.5" />
              Favorites
            </Link>
            <button
              onClick={() => {
                setOpen(false);
                onAddClick?.();
              }}
              className="flex items-center gap-2 px-3 h-9 rounded-lg text-[14px] font-medium text-surface bg-[linear-gradient(180deg,#5A92FF_0%,#3F80FF_100%)] border border-[#2F67E6]"
            >
              <PlusSquareIcon className="h-3.5 w-3.5" />
              Add Video
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
