"use client";

import { useEffect, useState } from "react";
import { loadProgress, saveProgress } from "@/lib/nowplan";

function getISTNow() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 5.5 * 3600000);
}

function formatIST12h(date: Date) {
  let h = date.getHours();
  const m = date.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${m} ${ampm}`;
}

const subjects = ["Physics", "Chemistry", "Math"] as const;

export default function NowPlanPage() {
  const [time, setTime] = useState(getISTNow());
  const [progress, setProgress] = useState({ Physics: 0, Chemistry: 0, Math: 0 });

  useEffect(() => {
    const id = setInterval(() => setTime(getISTNow()), 1000);
    setProgress(loadProgress());
    return () => clearInterval(id);
  }, []);

  const update = (subj: keyof typeof progress, val: number) => {
    const next = { ...progress, [subj]: Math.max(0, Math.min(10, val)) };
    setProgress(next);
    saveProgress(next);
  };

  const t = formatIST12h(time);

  const getTask = () => {
    if (progress.Chemistry < 1) return "Chemistry — Finish Ch 1";
    if (progress.Physics < 2) return "Physics — Do next";
    if (progress.Math < 1) return "Math — Start Ch 1";
    return "Revise weak topics";
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <main className="h-screen flex flex-col pt-4 pb-24 px-4">
        <div className="mx-auto w-full max-w-sm flex flex-col h-full">
          <header className="mb-3">
            <h1 className="text-[18px] font-bold tracking-tight text-on-surface">Now</h1>
            <p className="text-[11px] text-muted">{t} • IST</p>
          </header>

          <div className="mb-3">
            <p className="text-[11px] text-muted leading-tight">You have to do</p>
            <p className="text-[19px] font-bold tracking-tight text-on-surface leading-tight">{getTask()}</p>
          </div>

          <div className="flex-1 min-h-0">
            <p className="text-[12px] text-muted mb-1.5">Mark chapters done</p>
            <div className="flex flex-col gap-1">
              {subjects.map((s) => (
                <div key={s} className="flex items-center justify-between py-1">
                  <span className="text-[13px] text-on-surface">{s}</span>
                  <div className="flex items-center gap-1">
                    <button onClick={() => update(s, progress[s] - 0.5)} className="h-6 w-6 rounded-md border border-border text-[13px] leading-none">-</button>
                    <span className="w-9 text-center text-[12px] tabular-nums">{progress[s].toFixed(1)}/10</span>
                    <button onClick={() => update(s, progress[s] + 0.5)} className="h-6 w-6 rounded-md border border-border text-[13px] leading-none">+</button>
                    <button onClick={() => update(s, progress[s] + 1)} className="h-6 px-1.5 rounded-md border border-border text-[11px]">Done</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-[12px] text-muted mb-0.5">Next</p>
            <p className="text-[13px] text-on-surface">Study — {progress.Chemistry < 1 ? "Chemistry" : progress.Physics < 2 ? "Physics" : "Math"}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
