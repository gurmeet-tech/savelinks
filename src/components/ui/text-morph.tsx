"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextMorphProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function TextMorph({ texts, className, interval = 2000 }: TextMorphProps) {
  const [index, setIndex] = useState(0);
  const [morphing, setMorphing] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setMorphing(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setMorphing(false);
      }, 400);
    }, interval);
    return () => clearInterval(id);
  }, [texts, interval]);

  return (
    <span
      className={cn(
        "inline-block transition-all duration-400 ease-in-out",
        morphing ? "blur-sm scale-[0.98] opacity-70" : "blur-0 scale-100 opacity-100",
        className
      )}
    >
      {texts[index]}
    </span>
  );
}
