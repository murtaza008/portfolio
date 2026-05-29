import React from "react";
import FloatingTechIcon from "../../ui/FloatingTechIcon";
import meImage from "@/assets/me.jpg";

interface HeroVisualsProps {
  isMobile?: boolean;
}

export default function HeroVisuals({ isMobile = false }: HeroVisualsProps) {
  if (isMobile) {
    return (
      <div className="relative flex items-center justify-center mb-4 transition-all duration-500 opacity-100 translate-y-0 scale-100">
        <div className="flex flex-col justify-between py-2 mr-3 h-52 gap-0">
          <FloatingTechIcon
            name="React"
            icon="ri-reactjs-line"
            bgColor="rgb(232, 249, 253)"
            iconColor="rgb(97, 218, 251)"
            animationDelay="0s"
            animationClass="animate-float-up"
            size="sm"
          />
          <FloatingTechIcon
            name="Node.js"
            icon="ri-nodejs-line"
            bgColor="rgb(237, 247, 237)"
            iconColor="rgb(104, 160, 99)"
            animationDelay="0.2s"
            animationClass="animate-float-down"
            size="sm"
          />
          <FloatingTechIcon
            name="Database"
            icon="ri-database-2-line"
            bgColor="rgb(237, 247, 236)"
            iconColor="rgb(77, 179, 61)"
            animationDelay="0.4s"
            animationClass="animate-float-up"
            size="sm"
          />
        </div>
        <div className="relative w-40 h-52 rounded-2xl overflow-hidden border-2 border-stone-200 flex-shrink-0">
          <img
            alt="Murtaza Mazhar - MERN Stack Developer"
            className="w-full h-full object-cover object-top"
            src={meImage.src}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent"></div>
        </div>
        <div className="flex flex-col justify-between py-2 ml-3 h-52 gap-0">
          <FloatingTechIcon
            name="Next.js"
            icon="ri-nextjs-line"
            bgColor="rgb(254, 252, 232)"
            iconColor="rgb(200, 160, 0)"
            animationDelay="0.1s"
            animationClass="animate-float-down"
            size="sm"
          />
          <FloatingTechIcon
            name="Express"
            icon="ri-code-s-slash-line"
            bgColor="rgb(253, 246, 238)"
            iconColor="rgb(160, 120, 80)"
            animationDelay="0.3s"
            animationClass="animate-float-up"
            size="sm"
          />
          <FloatingTechIcon
            name="Git"
            icon="ri-git-branch-line"
            bgColor="rgb(254, 240, 238)"
            iconColor="rgb(240, 80, 50)"
            animationDelay="0.5s"
            animationClass="animate-float-down"
            size="sm"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute -left-14 inset-y-0 flex flex-col justify-between py-4">
        <FloatingTechIcon
          name="React"
          icon="ri-reactjs-line"
          bgColor="rgb(232, 249, 253)"
          iconColor="rgb(97, 218, 251)"
          animationDelay="0s"
          animationClass="animate-float-up"
        />
        <FloatingTechIcon
          name="Node.js"
          icon="ri-nodejs-line"
          bgColor="rgb(237, 247, 237)"
          iconColor="rgb(104, 160, 99)"
          animationDelay="0.2s"
          animationClass="animate-float-down"
        />
        <FloatingTechIcon
          name="Database"
          icon="ri-database-2-line"
          bgColor="rgb(237, 247, 236)"
          iconColor="rgb(77, 179, 61)"
          animationDelay="0.4s"
          animationClass="animate-float-up"
        />
      </div>
      <div className="relative w-56 h-72 rounded-3xl overflow-hidden border-2 border-stone-200">
        <img
          alt="Murtaza Mazhar - MERN Stack Developer"
          className="w-full h-full object-cover object-top"
          src={meImage.src}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent"></div>
      </div>
      <div className="absolute -right-14 inset-y-0 flex flex-col justify-between py-4">
        <FloatingTechIcon
          name="Next.js"
          icon="ri-nextjs-line"
          bgColor="rgb(254, 252, 232)"
          iconColor="rgb(200, 160, 0)"
          animationDelay="0.1s"
          animationClass="animate-float-down"
        />
        <FloatingTechIcon
          name="Express"
          icon="ri-code-s-slash-line"
          bgColor="rgb(253, 246, 238)"
          iconColor="rgb(160, 120, 80)"
          animationDelay="0.3s"
          animationClass="animate-float-up"
        />
        <FloatingTechIcon
          name="Git"
          icon="ri-git-branch-line"
          bgColor="rgb(254, 240, 238)"
          iconColor="rgb(240, 80, 50)"
          animationDelay="0.5s"
          animationClass="animate-float-down"
        />
      </div>
    </div>
  );
}
