import React from "react";

interface LogoProps {
  variant?: "dark" | "light" | "footer";
  className?: string;
}

export default function Logo({ variant = "dark", className = "flex items-center gap-2.5" }: LogoProps) {
  if (variant === "footer") {
    return (
      <div className={className}>
        <div className="w-10 h-10 rounded-xl bg-[#c8a97e] flex items-center justify-center text-white font-black text-sm font-['Syne']">
          MM
        </div>
        <span className="font-['Syne'] font-bold text-lg text-white">
          Murtaza<span className="text-[#c8a97e]">.</span>
        </span>
      </div>
    );
  }

  return (
    <button suppressHydrationWarning className={`cursor-pointer group ${className}`}>
      <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-white font-black text-xs font-['Syne'] transition-all duration-300 group-hover:bg-[#a07850] group-hover:scale-105">
        MM
      </div>
      <span className="font-['Syne'] font-bold text-lg text-[#1a1a1a] hidden sm:block tracking-tight">
        Murtaza<span className="text-[#a07850]">.</span>
      </span>
    </button>
  );
}
