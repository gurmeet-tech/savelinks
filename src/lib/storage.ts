import { VideoLink } from "@/types/video";

const STORAGE_KEY = "prepvault_videos";

export function loadVideos(): VideoLink[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as VideoLink[];
  } catch {
    return [];
  }
}

export function saveVideos(videos: VideoLink[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
  } catch {
    // ignore
  }
}
