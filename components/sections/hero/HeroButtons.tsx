import React from "react";
import Link from "next/link";
interface HeroButtonsProps {
  containerClassName?: string;
}

export default function HeroButtons({
  containerClassName = "flex flex-wrap gap-3",
}: HeroButtonsProps) {
  return (
    <div className={containerClassName}>
      <Link href="#projects">
        <button
          suppressHydrationWarning
          className="cursor-pointer group flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white font-semibold rounded-xl hover:bg-[#a07850] hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm"
        >
          View Projects
          <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>
      </Link>
      <Link href="#contact">
        <button
          suppressHydrationWarning
          className="cursor-pointer group flex items-center gap-2 px-6 py-3 bg-white border border-stone-200 text-[#1a1a1a] font-semibold rounded-xl hover:border-[#c8a97e] hover:text-[#a07850] transition-all duration-300 whitespace-nowrap text-sm"
        >
          Contact Me
          <i className="ri-send-plane-line transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
        </button>
      </Link>
    </div>
  );
}
