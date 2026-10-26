export type Progress = {
  Physics: number;
  Chemistry: number;
  Math: number;
};

const KEY = "nowplan_progress";

export function loadProgress(): Progress {
  if (typeof window === "undefined") return { Physics: 1, Chemistry: 0.5, Math: 0 };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { Physics: 1, Chemistry: 0.5, Math: 0 };
    return JSON.parse(raw);
  } catch {
    return { Physics: 1, Chemistry: 0.5, Math: 0 };
  }
}

export function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {}
}
