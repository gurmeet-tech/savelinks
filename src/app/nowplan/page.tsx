"use client";

import { Card } from "@/components/ui/card";
import { TextMorph } from "@/components/ui/text-morph";
import { useEffect, useState } from "react";
import { Clock, BookOpen, Target } from "lucide-react";

function getISTNow() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600000);
  return ist;
}

function getDaysFrom(start: Date, now: Date) {
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const n = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.floor((n.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
  return diff;
}

function formatIST12h(date: Date) {
  let h = date.getHours();
  const m = date.getMinutes().toString().padStart(2, "0");
  const s = date.getSeconds().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${m}:${s} ${ampm}`;
}

export default function NowPlanPage() {
  const [time, setTime] = useState(getISTNow());

  useEffect(() => {
    const id = setInterval(() => setTime(getISTNow()), 1000);
    return () => clearInterval(id);
  }, []);

  const start = new Date("2026-10-25T00:00:00+05:30");
  const days = Math.max(0, getDaysFrom(start, time));
  const dayNum = days + 1;

  const physicsDone = 1;
  const chemDone = 0.5;

  const physChap = Math.floor(physicsDone) + 1;
  const chemChap = Math.floor(chemDone) + 1;
  const physStep = physicsDone % 1 === 0 ? 1 : 2;
  const chemStep = chemDone % 1 === 0 ? 1 : 2;

  const t = formatIST12h(time);

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-6 sm:pt-10 pb-36 px-4 sm:px-6">
        <div className="mx-auto max-w-md">
          <div className="mb-6 animate-fade-slide-up">
            <h1 className="text-[20px] sm:text-[22px] font-medium leading-[1.15] tracking-[-0.015em] text-on-surface">
              <TextMorph texts={["NowPlan", "Focus Now", "Your Plan"]} />
            </h1>
            <p className="mt-1 text-[13px] sm:text-[14px] text-muted">
              Track your JEE prep • Day {dayNum} of 83
            </p>
          </div>

          <Card className="mb-4 bg-neutral border-border hover-lift animate-fade-slide-up" style={{ animationDelay: "80ms" }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-[14px] font-medium text-on-surface">Current Time (IST)</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-surface border border-border text-muted">Live</span>
            </div>
            <div className="text-[38px] sm:text-[48px] font-semibold tabular-nums leading-none text-on-surface">{t}</div>
          </Card>

          <Card className="mb-4 bg-neutral border-border animate-fade-slide-up" style={{ animationDelay: "140ms" }}>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-[14px] font-medium text-on-surface">Your Progress</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface border border-border">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: "#4C9AFF" }} />
                  <span className="text-[13px] font-medium text-on-surface">Physics</span>
                </div>
                <span className="text-[12px] text-muted">Ch {physChap} • Step {physStep} • 1/10</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface border border-border">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: "#3DDC97" }} />
                  <span className="text-[13px] font-medium text-on-surface">Chemistry</span>
                </div>
                <span className="text-[12px] text-muted">Ch {chemChap} • Step {chemStep} • 0.5/10</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface border border-border">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: "#FFB547" }} />
                  <span className="text-[13px] font-medium text-on-surface">Math</span>
                </div>
                <span className="text-[12px] text-muted">Ch 1 • Step 1 • 0/10</span>
              </div>
            </div>
          </Card>

          <Card className="mb-4 bg-neutral border-border animate-fade-slide-up" style={{ animationDelay: "180ms" }}>
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-[14px] font-medium text-on-surface">Next Up</span>
            </div>
            <p className="text-[15px] text-on-surface">Finish Chemistry Ch {chemChap} - Step 2 (Practice)</p>
            <p className="text-[13px] text-muted mt-1">Complete the remaining half of Chemistry</p>
          </Card>

          <Card className="bg-neutral border-border animate-fade-slide-up" style={{ animationDelay: "220ms" }}>
            <p className="text-[13px] text-on-surface leading-relaxed">Do Chemistry next. You did 1 full Physics chapter - good start. Focus on completing Chem Ch 1 today.</p>
          </Card>
        </div>
      </main>
    </div>
  );
}
