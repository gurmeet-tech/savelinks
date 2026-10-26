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

function getAction(h: number) {
  if (h >= 0 && h < 6) return "SLEEP";
  if (h >= 6 && h < 7) return "REVISE FORMULAS";
  if (h >= 7 && h < 8) return "GET READY";
  if (h >= 8 && h < 15) return "SCHOOL";
  if (h >= 15 && h < 15.75) return "LUNCH + REST";
  if (h >= 15.75 && h < 17.25) return "PHYSICS";
  if (h >= 17.25 && h < 17.5) return "BREAK";
  if (h >= 17.5 && h < 19) return "CHEMISTRY";
  if (h >= 19 && h < 19.75) return "DINNER + WALK";
  if (h >= 19.75 && h < 21.25) return "MATH";
  if (h >= 21.25 && h < 21.75) return "LOG MISTAKES";
  if (h >= 21.75 && h < 22.5) return "WIND DOWN";
  return "SLEEP";
}

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
  const action = getAction(time.getHours() + time.getMinutes() / 60);

  const getTask = () => {
    if (progress.Chemistry < 1) return "Chemistry — Finish Ch 1";
    if (progress.Physics < 2) return "Physics — Do next";
    if (progress.Math < 1) return "Math — Start Ch 1";
    return "Revise weak topics";
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <main className="h-[100dvh] flex flex-col pt-4 pb-[88px] px-4">
        <div className="mx-auto w-full max-w-sm flex flex-col h-full">
          <header className="shrink-0 mb-3">
            <h1 className="text-[17px] font-bold tracking-tight text-on-surface leading-tight">Now</h1>
            <p className="text-[10px] text-muted leading-tight">{t} • IST</p>
          </header>

          <div className="shrink-0 mb-4">
            <p className="text-[11px] text-muted leading-tight">You have to do</p>
            <p className="text-[18px] font-bold tracking-tight text-on-surface leading-[1.12] mt-0.5">{getTask()}</p>
          </div>

          <div className="shrink-0">
            <p className="text-[11px] text-muted mb-1.5">Mark chapters done</p>
            <div className="flex flex-col gap-1">
              {subjects.map((s) => (
                <div key={s} className="flex items-center justify-between py-0.5">
                  <span className="text-[13px] text-on-surface">{s}</span>
                  <div className="flex items-center gap-1">
                    <button onClick={() => update(s, progress[s] - 0.5)} className="h-6 w-6 rounded-md border border-border text-[13px] leading-none active:scale-[0.95] transition-transform">-</button>
                    <span className="w-9 text-center text-[11px] tabular-nums">{progress[s].toFixed(1)}/10</span>
                    <button onClick={() => update(s, progress[s] + 0.5)} className="h-6 w-6 rounded-md border border-border text-[13px] leading-none active:scale-[0.95] transition-transform">+</button>
                    <button onClick={() => update(s, progress[s] + 1)} className="h-6 px-1.5 rounded-md border border-border text-[10px] active:scale-[0.95] transition-transform">Done</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="border border-gray-200 rounded-lg px-4 py-2 w-full text-center">
              <p className="text-[18px] font-semibold tracking-tight text-on-surface">{action}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
