"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/nav/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { loadVideos, saveVideos } from "@/lib/storage";
import { VideoLink } from "@/types/video";
import { HeartIcon, PlayCircleIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export default function FavoritesPage() {
  const [videos, setVideos] = useState<VideoLink[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const all = loadVideos();
    setVideos(all.filter((v) => v.favorite));
  }, []);

  const toggleFavorite = (id: string) => {
    const all = loadVideos();
    const updated = all.map((v) => (v.id === id ? { ...v, favorite: !v.favorite } : v));
    saveVideos(updated);
    setVideos(updated.filter((v) => v.favorite));
  };

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast("Copied");
    } catch {
      toast("Copy failed");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-32 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 sm:mb-8 animate-fade-slide-up">
            <h1 className="text-[20px] sm:text-[22px] font-medium leading-[1.15] tracking-[-0.015em] text-on-surface">
              Favorites
            </h1>
            <p className="mt-1 text-[13px] sm:text-[14px] text-muted">
              Your starred videos
            </p>
          </div>

          {videos.length === 0 ? (
            <Card className="text-center py-10 sm:py-12 bg-neutral animate-fade-slide-up" style={{ animationDelay: "80ms" }}>
              <p className="text-[14px] text-muted">No favorites yet</p>
              <Link href="/">
                <Button variant="secondary" className="mt-4">
                  Go back to Home
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {videos.map((video, idx) => (
                <Card key={video.id} className="flex flex-col gap-3 bg-neutral border-border hover-lift card-entrance" style={{ animationDelay: `${80 + idx * 35}ms` }}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[17px] sm:text-[19px] font-medium leading-[1.2] text-on-surface line-clamp-2">
                        {video.title}
                      </h3>
                      {(video.subject || video.chapter) && (
                        <p className="mt-1 text-[11px] sm:text-[12px] text-muted">
                          {[video.subject, video.chapter].filter(Boolean).join(" • ")}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => toggleFavorite(video.id)}
                      className="relative overflow-hidden p-1.5 rounded-lg hover:bg-surface/60 transition-all duration-150 active:scale-90"
                    >
                      <HeartIcon className="h-4 w-4 fill-primary text-primary scale-110" />
                    </button>
                  </div>
                  {video.description && (
                    <p className="text-[13px] sm:text-[14px] text-muted line-clamp-2">{video.description}</p>
                  )}
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => copyLink(video.url)} className="relative overflow-hidden inline-flex items-center gap-1 h-7 px-2 rounded-md text-[12px] font-medium text-on-surface hover:bg-surface/60 transition-all duration-150 active:scale-[0.98]">
                      <Copy className="h-3 w-3" /> Copy
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-[13px] sm:text-[14px] font-medium text-on-surface bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F8_100%)] border border-[#D6D8DC] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(229,231,235,0.9),0_1px_1px_rgba(16,24,40,0.01)] hover:bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F6F7_100%)] transition-all duration-150 active:scale-[0.98] flex-1 justify-center"
                    >
                      <PlayCircleIcon className="h-3.5 w-3.5" />
                      Open in Browser
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
