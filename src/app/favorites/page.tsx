"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/nav/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { loadVideos, saveVideos } from "@/lib/storage";
import { VideoLink } from "@/types/video";
import { HeartIcon, PlayCircleIcon, DeleteIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function FavoritesPage() {
  const [videos, setVideos] = useState<VideoLink[]>([]);

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

  const deleteVideo = (id: string) => {
    const all = loadVideos();
    const updated = all.filter((v) => v.id !== id);
    saveVideos(updated);
    setVideos(updated.filter((v) => v.favorite));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-[22px] font-medium leading-[1.15] tracking-[-0.015em] text-on-surface">
              Favorites
            </h1>
            <p className="mt-1 text-[14px] text-muted">
              Your starred videos
            </p>
          </div>

          {videos.length === 0 ? (
            <Card className="text-center py-12 bg-neutral">
              <p className="text-[14px] text-muted">No favorites yet</p>
              <Link href="/">
                <Button variant="secondary" className="mt-4">
                  Go back
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video) => (
                <Card key={video.id} className="flex flex-col gap-3 bg-neutral border-border">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[19px] font-medium leading-[1.2] text-on-surface line-clamp-2">
                        {video.title}
                      </h3>
                      {(video.subject || video.chapter) && (
                        <p className="mt-1 text-[12px] text-muted">
                          {[video.subject, video.chapter].filter(Boolean).join(" • ")}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => toggleFavorite(video.id)}
                      className="relative overflow-hidden p-1.5 rounded-lg hover:bg-surface/60 transition-colors"
                    >
                      <HeartIcon className="h-4 w-4 fill-primary text-primary" />
                    </button>
                  </div>
                  {video.description && (
                    <p className="text-[14px] text-muted line-clamp-2">{video.description}</p>
                  )}
                  <div className="flex items-center gap-2 mt-auto">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-[14px] font-medium text-on-surface bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F8_100%)] border border-[#D6D8DC] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(229,231,235,0.9),0_1px_1px_rgba(16,24,40,0.01)] hover:bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F6F7_100%)] transition-all duration-150 flex-1 justify-center"
                    >
                      <PlayCircleIcon className="h-3.5 w-3.5" />
                      Watch
                    </a>
                    <button
                      onClick={() => deleteVideo(video.id)}
                      className="relative overflow-hidden p-2 rounded-lg hover:bg-surface/60 transition-colors"
                    >
                      <DeleteIcon className="h-3.5 w-3.5 text-muted" />
                    </button>
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
