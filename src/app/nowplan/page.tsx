"use client";

import { Card } from "@/components/ui/card";
import { TextMorph } from "@/components/ui/text-morph";
import { useEffect, useState } from "react";

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

export default function NowPlanPage() {
  const [time, setTime] = useState(getISTNow());

  useEffect(() => {
    const id = setInterval(() => setTime(getISTNow()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const mins = time.getMinutes().toString().padStart(2, "0");
  const secs = time.getSeconds().toString().padStart(2, "0");

  const start = new Date("2026-10-25T00:00:00+05:30");
  const days = Math.max(0, getDaysFrom(start, time));
  const dayNum = days + 1;

  const physicsDone = 1; // completed 1st chapter
  const chemDone = 0.5; // half of 2nd? say 1.5 chapters equivalent
  const mathDone = 0;

  const physChap = Math.floor(physicsDone) + 1;
  const chemChap = Math.floor(chemDone) + 1;
  const mathChap = Math.floor(mathDone) + 1;

  const physStep = physicsDone % 1 === 0 ? 1 : 2;
  const chemStep = chemDone % 1 === 0 ? 1 : 2;

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-6 sm:pt-10 pb-32 px-4 sm:px-6">
        <div className="mx-auto max-w-md">
          <div className="mb-6 animate-fade-slide-up">
            <h1 className="text-[20px] sm:text-[22px] font-medium leading-[1.15] tracking-[-0.015em] text-on-surface">
              <TextMorph texts={["NowPlan", "Focus Now", "Plan Your Day"]} />
            </h1>
            <p className="mt-1 text-[13px] sm:text-[14px] text-muted">
              IST • {hours}:{mins}:{secs} • Day {dayNum} of 83
            </p>
          </div>

          <Card className="mb-4 bg-neutral border-border hover-lift animate-fade-slide-up" style={{ animationDelay: "80ms" }}>
            <div className="h-[6px] w-full rounded-t-md -mt-[16px] mx-[-16px] mb-3" style={{ background: "linear-gradient(90deg, #4C9AFF 0%, #3DDC97 50%, #FFB547 100%)" }} />
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wide text-muted">NOW - IST</span>
              <span className="text-[11px] text-muted">Pass 1 • Started Oct 25</span>
            </div>
            <h2 className="text-[28px] font-semibold leading-[1.2] text-on-surface">Continue</h2>
            <p className="text-[14px] text-muted mt-1">Based on your progress</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[42px] sm:text-[52px] font-bold tabular-nums leading-none text-on-surface">{hours}:{mins}</span>
              <span className="text-[20px] font-semibold tabular-nums text-muted">:{secs}</span>
            </div>
            <p className="text-[13px] text-muted mt-1">Current IST time</p>
          </Card>

          <Card className="mb-4 bg-neutral border-border animate-fade-slide-up" style={{ animationDelay: "140ms" }}>
            <p className="text-[12px] uppercase tracking-wide text-muted mb-3">Your Progress</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: "#4C9AFF" }} />
                  <span className="text-[14px] text-on-surface">Physics</span>
                </div>
                <span className="text-[12px] text-muted">Ch {physChap} • Step {physStep} • Done 1/10</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: "#3DDC97" }} />
                  <span className="text-[14px] text-on-surface">Chemistry</span>
                </div>
                <span className="text-[12px] text-muted">Ch {chemChap} • Step {chemStep} • Done 0.5/10</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: "#FFB547" }} />
                  <span className="text-[14px] text-on-surface">Math</span>
                </div>
                <span className="text-[12px] text-muted">Ch 1 • Step 1 • Done 0/10</span>
              </div>
            </div>
          </Card>

          <Card className="mb-4 bg-neutral border-border animate-fade-slide-up" style={{ animationDelay: "180ms" }}>
            <p className="text-[12px] uppercase tracking-wide text-muted mb-2">Next Up</p>
            <p className="text-[15px] font-medium text-on-surface">Finish Chemistry Ch {chemChap} - Step 2 (Practice)</p>
            <p className="text-[13px] text-muted mt-1">Continue where you left off - complete the remaining half</p>
          </Card>

          <Card className="bg-neutral border-border animate-fade-slide-up" style={{ animationDelay: "220ms" }}>
            <p className="text-[12px] uppercase tracking-wide text-muted mb-2">Advice</p>
            <p className="text-[14px] text-on-surface">Do Chemistry next. You did 1 full Physics chapter - good start. Focus on completing Chem Ch 1 today.</p>
          </Card>
        </div>
      </main>
    </div>
  );
}
