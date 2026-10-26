"use client";

import { Card } from "@/components/ui/card";
import { TextMorph } from "@/components/ui/text-morph";
import { useEffect, useState } from "react";

function getISTNow() {
  const now = new Date();
  // Get IST (UTC+5:30)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600000);
  return ist;
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

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-6 sm:pt-10 pb-32 px-4 sm:px-6">
        <div className="mx-auto max-w-md">
          <div className="mb-6 animate-fade-slide-up">
            <h1 className="text-[20px] sm:text-[22px] font-medium leading-[1.15] tracking-[-0.015em] text-on-surface">
              <TextMorph texts={["NowPlan", "Focus Now", "Plan Your Day"]} />
            </h1>
            <p className="mt-1 text-[13px] sm:text-[14px] text-muted">
              IST • {hours}:{mins}:{secs}
            </p>
          </div>

          <Card className="mb-4 bg-neutral border-border hover-lift animate-fade-slide-up" style={{ animationDelay: "80ms" }}>
            <div className="h-[6px] w-full rounded-t-md -mt-[16px] mx-[-16px] mb-3" style={{ background: "linear-gradient(90deg, #4C9AFF 0%, #3DDC97 50%, #FFB547 100%)" }} />
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wide text-muted">NOW - IST</span>
              <span className="text-[11px] text-muted">Tracking Indian Time</span>
            </div>
            <h2 className="text-[28px] font-semibold leading-[1.2] text-on-surface">Current Time</h2>
            <p className="text-[14px] text-muted mt-1">Based on your device clock in IST</p>
            <div className="mt-4 text-[48px] sm:text-[56px] font-bold tabular-nums leading-none text-on-surface">{hours}:{mins}:{secs}</div>
            <p className="text-[13px] text-muted mt-1">HH : MM : SS (IST)</p>
          </Card>

          <Card className="mb-4 bg-neutral border-border animate-fade-slide-up" style={{ animationDelay: "140ms" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-muted">Status</p>
                <p className="text-[15px] font-medium text-on-surface">Using Indian Standard Time</p>
              </div>
              <span className="text-[12px] text-muted">UTC+5:30</span>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
