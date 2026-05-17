import React from "react";
import ContactInfoList from "../../ui/ContactInfoList";
import SocialLinks from "../../ui/SocialLinks";

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#1a1a1a] rounded-3xl p-6 text-white">
        <h3 className="font-['Syne'] font-bold text-lg mb-2">
          Let&apos;s build something amazing
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-5">
          Whether you have a job opportunity, a project idea, or just want
          to say hi — I&apos;m always open. I typically respond within 24 hours.
        </p>
        <ContactInfoList variant="contact" />
      </div>
      <div className="bg-white rounded-3xl p-5 border border-stone-100">
        <p className="text-stone-400 text-xs font-semibold tracking-widest uppercase mb-3">
          Find me on
        </p>
        <SocialLinks
          containerClassName="flex gap-3"
          linkClassName="cursor-pointer flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl border border-stone-200 text-stone-400 hover:text-[#a07850] hover:border-[#c8a97e] hover:bg-[#c8a97e]/5 hover:scale-105 transition-all duration-300"
          iconClassName="text-xl"
          showLabels={true}
        />
      </div>
    </div>
  );
}
