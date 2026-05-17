import React from "react";

interface TechIconProps {
  name: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  animationDelay: string;
  animationClass: string;
  size?: "sm" | "md";
}

export default function FloatingTechIcon({
  name,
  icon,
  bgColor,
  iconColor,
  animationDelay,
  animationClass,
  size = "md",
}: TechIconProps) {
  const containerSize = size === "md" ? "w-10 h-10" : "w-8 h-8";
  const iconSize = size === "md" ? "text-lg" : "text-sm";
  const textSize = size === "md" ? "text-[9px] px-1.5" : "text-[8px] px-1";

  return (
    <div
      className={`flex flex-col items-center ${size === "md" ? "gap-1" : "gap-0.5"} ${animationClass}`}
      style={{ animationDelay }}
    >
      <div
        className={`${containerSize} flex items-center justify-center rounded-${size === "md" ? "xl" : "lg"} border border-white/90`}
        style={{ background: bgColor }}
      >
        <i className={`${icon} ${iconSize}`} style={{ color: iconColor }}></i>
      </div>
      <span
        className={`${textSize} font-semibold text-stone-500 bg-white/90 py-0.5 rounded-full border border-stone-100 whitespace-nowrap`}
      >
        {name}
      </span>
    </div>
  );
}
