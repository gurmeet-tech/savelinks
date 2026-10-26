"use client";

import { Card } from "@/components/ui/card";
import { TextMorph } from "@/components/ui/text-morph";

export default function NowPlanPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-6 sm:pt-10 pb-32 px-4 sm:px-6">
        <div className="mx-auto max-w-md">
          <div className="mb-6 animate-fade-slide-up">
            <h1 className="text-[20px] sm:text-[22px] font-medium leading-[1.15] tracking-[-0.015em] text-on-surface">
              <TextMorph texts={["NowPlan", "Focus Now", "Plan Your Day"]} />
            </h1>
            <p className="mt-1 text-[13px] sm:text-[14px] text-muted">
              Your JEE plan, glanceable.
            </p>
          </div>

          <Card className="mb-4 bg-neutral border-border hover-lift animate-fade-slide-up" style={{ animationDelay: "80ms" }}>
            <div className="h-[6px] w-full rounded-t-md -mt-[16px] mx-[-16px] mb-3" style={{ background: "linear-gradient(90deg, #4C9AFF 0%, #3DDC97 50%, #FFB547 100%)" }} />
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wide text-muted">NOW</span>
              <span className="text-[11px] text-muted">Day 12 of 83</span>
            </div>
            <h2 className="text-[28px] font-semibold leading-[1.2] text-on-surface">Physics</h2>
            <p className="text-[14px] text-muted mt-1">Ch 4 Kinematics • Step 1</p>
            <div className="mt-4 text-[56px] font-bold tabular-nums leading-none text-on-surface">42:18</div>
            <p className="text-[13px] text-muted mt-1">min : sec left</p>
            <div className="mt-4 h-1.5 w-full rounded-full bg-border overflow-hidden">
              <div className="h-full bg-primary" style={{ width: "38%" }} />
            </div>
            <p className="text-[12px] text-muted mt-2">Next: Chemistry at 17:30</p>
          </Card>

          <Card className="mb-4 bg-neutral border-border animate-fade-slide-up" style={{ animationDelay: "140ms" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-muted">Next</p>
                <p className="text-[15px] font-medium text-on-surface">Chemistry • 17:30</p>
              </div>
              <span className="text-[12px] text-muted">in 1h 12m</span>
            </div>
          </Card>

          <div className="mb-3 animate-fade-slide-up" style={{ animationDelay: "180ms" }}>
            <p className="text-[12px] uppercase tracking-wide text-muted mb-2">Today's chapters</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-full text-[12px] font-medium bg-surface border border-border">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#4C9AFF" }} /> Physics Ch 4 - Day 2/3
              </span>
              <span className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-full text-[12px] font-medium bg-surface border border-border">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#3DDC97" }} /> Chem Ch 3 - Day 1/3
              </span>
              <span className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-full text-[12px] font-medium bg-surface border border-border">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FFB547" }} /> Math Ch 5 - Day 2/3
              </span>
            </div>
          </div>

          <Card className="bg-neutral border-border animate-fade-slide-up" style={{ animationDelay: "220ms" }}>
            <p className="text-[12px] uppercase tracking-wide text-muted mb-3">Timeline</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 opacity-60">
                <span className="text-[12px] text-muted w-12">15:00</span>
                <div className="flex-1">
                  <p className="text-[14px] text-on-surface">Lunch + rest</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-surface-2/40 -mx-2 px-2 py-2 rounded-lg border-l-2 border-primary">
                <span className="text-[12px] text-on-surface w-12">15:45</span>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-on-surface">Physics</p>
                </div>
                <span className="text-[11px] text-muted">now</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-muted w-12">17:15</span>
                <div className="flex-1">
                  <p className="text-[14px] text-on-surface">Break</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-muted w-12">17:30</span>
                <div className="flex-1">
                  <p className="text-[14px] text-on-surface">Chemistry</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
