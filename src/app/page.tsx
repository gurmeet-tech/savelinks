"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/nav/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loadVideos, saveVideos } from "@/lib/storage";
import { VideoLink } from "@/types/video";
import { HeartIcon, PlayCircleIcon, DeleteIcon, PlusSquareIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast";
import { Copy, Pencil, Search, ArrowUpDown } from "lucide-react";

type SortOption = "newest" | "oldest" | "az" | "favorites";

export default function HomePage() {
  const [videos, setVideos] = useState<VideoLink[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("newest");
  const [activeSubject, setActiveSubject] = useState<string>("all");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    setVideos(loadVideos());
  }, []);

  const openAdd = () => {
    setEditingId(null);
    setTitle("");
    setUrl("");
    setSubject("");
    setChapter("");
    setDescription("");
    setShowModal(true);
  };

  const openEdit = (video: VideoLink) => {
    setEditingId(video.id);
    setTitle(video.title);
    setUrl(video.url);
    setSubject(video.subject || "");
    setChapter(video.chapter || "");
    setDescription(video.description || "");
    setShowModal(true);
  };

  const handleSave = () => {
    if (!title.trim() || !url.trim()) return;
    if (editingId) {
      const updated = videos.map((v) =>
        v.id === editingId
          ? { ...v, title: title.trim(), url: url.trim(), subject: subject.trim() || undefined, chapter: chapter.trim() || undefined, description: description.trim() || undefined }
          : v
      );
      setVideos(updated);
      saveVideos(updated);
      toast("Updated");
    } else {
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
      toast("Added");
    }
    setTitle("");
    setUrl("");
    setSubject("");
    setChapter("");
    setDescription("");
    setEditingId(null);
    setShowModal(false);
  };

  const toggleFavorite = (id: string) => {
    const updated = videos.map((v) => (v.id === id ? { ...v, favorite: !v.favorite } : v));
    setVideos(updated);
    saveVideos(updated);
  };

  const confirmDelete = () => {
    if (!deleteId) return;
    const updated = videos.filter((v) => v.id !== deleteId);
    setVideos(updated);
    saveVideos(updated);
    toast("Deleted");
    setDeleteId(null);
  };

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast("Copied");
    } catch {
      toast("Copy failed");
    }
  };

  const subjects = Array.from(new Set(videos.map((v) => v.subject).filter(Boolean))) as string[];

  let filtered = videos.filter((v) => {
    const q = search.toLowerCase();
    const matchesSearch = !q || v.title.toLowerCase().includes(q) || v.subject?.toLowerCase().includes(q) || v.chapter?.toLowerCase().includes(q) || v.description?.toLowerCase().includes(q);
    const matchesSubject = activeSubject === "all" || v.subject === activeSubject;
    return matchesSearch && matchesSubject;
  });

  filtered = [...filtered].sort((a, b) => {
    if (sort === "newest") return b.createdAt - a.createdAt;
    if (sort === "oldest") return a.createdAt - b.createdAt;
    if (sort === "az") return a.title.localeCompare(b.title);
    if (sort === "favorites") return (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0);
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar onAddClick={openAdd} />
      <main className="pt-20 sm:pt-24 pb-32 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 sm:mb-8 animate-fade-slide-up">
            <h1 className="text-[20px] sm:text-[22px] font-medium leading-[1.15] tracking-[-0.015em] text-on-surface">
              Video Saver
            </h1>
            <p className="mt-1 text-[13px] sm:text-[14px] text-muted">
              Save important videos for your Class 12th prep
            </p>
          </div>

          <Card className="mb-6 bg-neutral border-border hover-lift animate-fade-slide-up" style={{ animationDelay: "80ms" }}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-[17px] sm:text-[19px] font-medium leading-[1.2] text-on-surface">
                  Add New Video
                </h2>
                <p className="text-[13px] sm:text-[14px] text-muted mt-1">
                  Add heading and link. You can add subject/chapter/notes too.
                </p>
              </div>
              <button
                onClick={openAdd}
                className="relative overflow-hidden inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-lg text-[14px] font-medium text-surface bg-[linear-gradient(180deg,#5A92FF_0%,#3F80FF_100%)] border border-[#2F67E6] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(47,103,230,0.4),0_1px_1px_rgba(63,128,255,0.16)] hover:bg-[linear-gradient(180deg,#6A9AFF_0%,#4F87FF_100%)] transition-all duration-150 active:scale-[0.98] w-full sm:w-auto"
              >
                <PlusSquareIcon className="h-3.5 w-3.5" />
                Add Video Link
              </button>
            </div>
          </Card>

          <Card className="mb-6 bg-neutral border-border animate-fade-slide-up" style={{ animationDelay: "120ms" }}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted" />
                  <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by title, subject, chapter, notes" className="pl-8" />
                </div>
                <div className="relative">
                  <ArrowUpDown className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted" />
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortOption)}
                    className="h-[32px] pl-8 pr-3 rounded-lg border border-border bg-surface text-[13px] text-on-surface"
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                    <option value="az">A-Z</option>
                    <option value="favorites">Favorites first</option>
                  </select>
                </div>
              </div>
              {subjects.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveSubject("all")}
                    className={cn(
                      "h-7 px-3 rounded-full text-[12px] font-medium border transition-all duration-150",
                      activeSubject === "all"
                        ? "bg-primary text-surface border-primary"
                        : "bg-surface text-on-surface border-border hover:bg-neutral"
                    )}
                  >
                    All
                  </button>
                  {subjects.map((s) => (
                    <button
                      key={s}
                      onClick={() => setActiveSubject(s)}
                      className={cn(
                        "h-7 px-3 rounded-full text-[12px] font-medium border transition-all duration-150",
                        activeSubject === s
                          ? "bg-primary text-surface border-primary"
                          : "bg-surface text-on-surface border-border hover:bg-neutral"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Card>

          <div className="mb-4 animate-fade-slide-up" style={{ animationDelay: "160ms" }}>
            <h2 className="text-[17px] sm:text-[19px] font-medium leading-[1.2] text-on-surface">
              Saved Video Links
            </h2>
            <p className="text-[13px] sm:text-[14px] text-muted mt-1">
              {filtered.length} {filtered.length === 1 ? "video" : "videos"}
            </p>
          </div>

          {filtered.length === 0 ? (
            <Card className="text-center py-10 sm:py-12 bg-neutral animate-fade-slide-up" style={{ animationDelay: "200ms" }}>
              <p className="text-[14px] text-muted">No videos found</p>
              <Button variant="primary" className="mt-4" onClick={openAdd}>
                Add video
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {filtered.map((video, idx) => (
                <Card key={video.id} className="flex flex-col gap-3 bg-neutral border-border hover-lift card-entrance" style={{ animationDelay: `${200 + idx * 35}ms` }}>
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
                      <HeartIcon
                        className={cn(
                          "h-4 w-4 transition-all duration-200",
                          video.favorite ? "fill-primary text-primary scale-110" : "text-muted"
                        )}
                      />
                    </button>
                  </div>
                  {video.description && (
                    <p className="text-[13px] sm:text-[14px] text-muted line-clamp-2">{video.description}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button onClick={() => copyLink(video.url)} className="relative overflow-hidden inline-flex items-center gap-1 h-7 px-2 rounded-md text-[12px] font-medium text-on-surface hover:bg-surface/60 transition-all duration-150 active:scale-[0.98]">
                      <Copy className="h-3 w-3" /> Copy
                    </button>
                    <button onClick={() => openEdit(video)} className="relative overflow-hidden inline-flex items-center gap-1 h-7 px-2 rounded-md text-[12px] font-medium text-on-surface hover:bg-surface/60 transition-all duration-150 active:scale-[0.98]">
                      <Pencil className="h-3 w-3" /> Edit
                    </button>
                    <button onClick={() => setDeleteId(video.id)} className="relative overflow-hidden inline-flex items-center gap-1 h-7 px-2 rounded-md text-[12px] font-medium text-muted hover:text-error hover:bg-surface/60 transition-all duration-150 active:scale-[0.98]">
                      <DeleteIcon className="h-3 w-3" /> Delete
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
