import React from "react";
import HeroButtons from "./HeroButtons";
import SocialLinks from "../../ui/SocialLinks";
import HeroVisuals from "./HeroVisuals";
import TypewriterText from "../../ui/TypewriterText";

export default function HeroMobileContent() {
  return (
    <div className="flex lg:hidden flex-col items-center w-full pt-24 pb-16 gap-0">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 mb-5 transition-all duration-500 opacity-100 translate-y-0">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-stone-600 text-xs font-semibold tracking-widest uppercase">
          Available for Work
        </span>
      </div>
      <div className="text-center mb-4 transition-all duration-500 opacity-100 translate-y-0">
        <span className="block text-stone-400 text-lg font-medium font-['Syne']">
          Hi, I&apos;m
        </span>
      </div>
      
      <HeroVisuals isMobile={true} />

      <div className="text-center mb-4 transition-all duration-500 opacity-100 translate-y-0">
        <h1 className="font-['Syne'] font-black text-3xl text-[#1a1a1a]">
          Murtaza Mazhar
        </h1>
      </div>
      <div className="flex items-center gap-2 mb-4 transition-all duration-500 opacity-100 translate-y-0">
        <div className="w-5 h-0.5 bg-[#c8a97e]"></div>
        <span className="text-[#a07850] text-sm font-semibold min-w-[200px] text-center">
          <TypewriterText />
        </span>
      </div>
      <div className="text-center mb-6 px-2 transition-all duration-500 opacity-100 translate-y-0">
        <p className="text-stone-500 text-sm leading-relaxed max-w-sm mx-auto">
          Passionate full-stack developer crafting high-performance web
          applications with MongoDB, Express.js, React, and Node.js. I turn
          complex problems into elegant digital solutions.
        </p>
      </div>
      <div className="mb-6 transition-all duration-500 opacity-0 translate-y-5">
        <HeroButtons containerClassName="flex flex-wrap gap-3 justify-center" />
      </div>
      <div className="flex items-center gap-4 transition-all duration-500 opacity-0 translate-y-5">
        <span className="text-stone-400 text-xs tracking-widest uppercase">
          Follow
        </span>
        <SocialLinks />
      </div>
    </div>
  );
}
