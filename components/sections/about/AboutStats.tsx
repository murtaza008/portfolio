"use client";

import React, { useEffect, useState, useRef } from "react";

export default function AboutStats() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { target: 10, suffix: "+", label: "Projects Completed" },
    { target: 16, suffix: "+", label: "Happy Clients" },
    { target: 50, suffix: "+", label: "GitHub Commits" },
    { target: 100, suffix: "+", label: "Cups of Coffee" },
  ];

  useEffect(() => {
    let animationFrameId: number;
    let isAnimating = false;

    const startAnimation = () => {
      if (isAnimating) return;
      isAnimating = true;

      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounts([
          Math.floor(easeOutQuart * 10),
          Math.floor(easeOutQuart * 16),
          Math.floor(easeOutQuart * 50),
          Math.floor(easeOutQuart * 100),
        ]);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          isAnimating = false;
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const el = mutation.target as HTMLElement;
          if (el.classList.contains('opacity-100')) {
            startAnimation();
          } else if (el.classList.contains('opacity-0')) {
            cancelAnimationFrame(animationFrameId);
            isAnimating = false;
            setCounts([0, 0, 0, 0]);
          }
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current, { attributes: true });
      // Check initial state
      if (sectionRef.current.classList.contains('opacity-100')) {
        startAnimation();
      }
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={sectionRef} className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-400 delay-150 opacity-0 translate-y-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-5 bg-white rounded-2xl border border-stone-100 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="text-2xl font-black font-['Syne'] text-[#1a1a1a]">
            {counts[index]}{stat.suffix}
          </div>
          <div className="text-stone-400 text-xs mt-1 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
