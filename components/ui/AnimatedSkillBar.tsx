"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedSkillBar({
  percentage,
  title,
  gradient,
  delayMs,
}: {
  percentage: number;
  title: string;
  gradient: string;
  delayMs: number;
}) {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setWidth(percentage);
            let start = 0;
            const duration = 1000; // Match CSS transition duration
            const stepTime = Math.abs(Math.floor(duration / percentage));
            timer = setInterval(() => {
              start += 1;
              setCount((prev) => {
                if (prev >= percentage) {
                  clearInterval(timer);
                  return percentage;
                }
                return start;
              });
            }, stepTime);
          }, delayMs);
        } else {
          setWidth(0);
          setCount(0);
          if (timer) clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [percentage, delayMs]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-stone-400 text-xs">{title}</span>
        <span className="text-xs font-bold text-[#a07850]">{count}%</span>
      </div>
      <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: gradient,
          }}
        ></div>
      </div>
    </div>
  );
}
