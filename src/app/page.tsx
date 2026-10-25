"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/nav/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loadVideos, saveVideos } from "@/lib/storage";
import { VideoLink } from "@/types/video";
import { HeartIcon, PlayCircleIcon, DeleteIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [videos, setVideos] = useState<VideoLink[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setVideos(loadVideos());
  }, []);

  const handleAdd = () => {
    if (!title.trim() || !url.trim()) return;
    const newVideo: VideoLink = {
      id: crypto.randomUUID(),
      title: title.trim(),
      url: url.trim(),
      subject: subject.trim() || undefined,
      chapter: chapter.trim() || undefined,
      description: description.trim() || undefined,
      favorite: false,
      createdAt: Date.now(),
    };
    const updated = [newVideo, ...videos];
    setVideos(updated);
    saveVideos(updated);
    setTitle("");
    setUrl("");
    setSubject("");
    setChapter("");
    setDescription("");
    setShowModal(false);
  };

  const toggleFavorite = (id: string) => {
    const updated = videos.map((v) => (v.id === id ? { ...v, favorite: !v.favorite } : v));
    setVideos(updated);
    saveVideos(updated);
  };

  const deleteVideo = (id: string) => {
    const updated = videos.filter((v) => v.id !== id);
    setVideos(updated);
    saveVideos(updated);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onAddClick={() => setShowModal(true)} />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-[20px] sm:text-[22px] font-medium leading-[1.15] tracking-[-0.015em] text-on-surface">
              Saved Videos
            </h1>
            <p className="mt-1 text-[13px] sm:text-[14px] text-muted">
              Save links for your Class 12th prep
            </p>
          </div>

          {videos.length === 0 ? (
            <Card className="text-center py-10 sm:py-12 bg-neutral">
              <p className="text-[14px] text-muted">No videos saved yet</p>
              <Button variant="primary" className="mt-4" onClick={() => setShowModal(true)}>
                Add your first video
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {videos.map((video) => (
                <Card key={video.id} className="flex flex-col gap-3 bg-neutral border-border">
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
                      className="relative overflow-hidden p-1.5 rounded-lg hover:bg-surface/60 transition-colors"
                    >
                      <HeartIcon
                        className={cn(
                          "h-4 w-4",
                          video.favorite ? "fill-primary text-primary" : "text-muted"
                        )}
                      />
                    </button>
                  </div>
                  {video.description && (
                    <p className="text-[13px] sm:text-[14px] text-muted line-clamp-2">{video.description}</p>
                  )}
                  <div className="flex items-center gap-2 mt-auto">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-[13px] sm:text-[14px] font-medium text-on-surface bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F8_100%)] border border-[#D6D8DC] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(229,231,235,0.9),0_1px_1px_rgba(16,24,40,0.01)] hover:bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F6F7_100%)] transition-all duration-150 flex-1 justify-center"
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

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/20" onClick={() => setShowModal(false)} />
          <Card className="relative w-full max-w-md p-5 sm:p-6 bg-surface shadow-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-[18px] sm:text-[20px] font-medium mb-4">Add Video Link</h2>
            <div className="space-y-3">
              <div>
                <label className="text-[12px] font-medium text-on-surface mb-1 block">Heading *</label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter video heading" />
              </div>
              <div>
                <label className="text-[12px] font-medium text-on-surface mb-1 block">Video Link *</label>
                <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="text-[12px] font-medium text-on-surface mb-1 block">Subject</label>
                  <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="e.g., Physics" />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-on-surface mb-1 block">Chapter</label>
                  <Input value={chapter} onChange={(e) => setChapter(e.target.value)} placeholder="e.g., Unit 1" />
                </div>
              </div>
              <div>
                <label className="text-[12px] font-medium text-on-surface mb-1 block">Notes</label>
                <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Optional notes" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Button variant="primary" onClick={handleAdd} className="flex-1">
                Save
              </Button>
              <Button variant="secondary" onClick={() => setShowModal(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
