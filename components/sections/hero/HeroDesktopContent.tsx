import React from "react";
import HeroButtons from "./HeroButtons";
import SocialLinks from "../../ui/SocialLinks";
import TypewriterText from "../../ui/TypewriterText";

export default function HeroDesktopContent() {
  return (
    <div className="-ml-2">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 mb-6 transition-all duration-500 opacity-100 translate-y-0">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-stone-600 text-xs font-semibold tracking-widest uppercase">
          Available for Work
        </span>
      </div>
      <h1 className="font-['Syne'] font-black leading-[1.0] mb-4 transition-all duration-500 delay-100 opacity-100 translate-y-0">
        <span className="block text-stone-400 text-xl md:text-2xl font-medium mb-1">
          Hi, I&apos;m
        </span>
        <span className="block text-4xl md:text-4xl text-[#1a1a1a]">
          Murtaza Mazhar
        </span>
      </h1>
      <div className="flex items-center gap-2 mb-4 transition-all duration-500 delay-150 opacity-100 translate-y-0">
        <div className="w-6 h-0.5 bg-[#c8a97e]"></div>
        <span className="text-[#a07850] text-base md:text-lg font-semibold min-w-[240px]">
          <TypewriterText />
        </span>
      </div>
      <p className="text-stone-500 text-sm md:text-base leading-relaxed max-w-lg mb-7 transition-all duration-500 delay-200 opacity-100 translate-y-0">
        Passionate full-stack developer crafting high-performance web
        applications with MongoDB, Express.js, React, and Node.js. I turn
        complex problems into elegant digital solutions.
      </p>
      <div className="mb-7 transition-all duration-500 delay-300 opacity-100 translate-y-0">
        <HeroButtons />
      </div>
      <div className="flex items-center gap-4 transition-all duration-500 delay-400 opacity-100 translate-y-0">
        <span className="text-stone-400 text-xs tracking-widest uppercase">
          Follow
        </span>
        <SocialLinks />
      </div>
    </div>
  );
}
