import SectionTag from "../ui/SectionTag";
import SkillCard from "../ui/SkillCard";
import { skillCategories, familiarSkills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#c8a97e]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 transition-all duration-400 opacity-0 translate-y-10">
          <div>
            <div className="flex justify-start mb-3 transition-all duration-400 opacity-0 translate-y-8">
              <SectionTag>My Expertise</SectionTag>
            </div>
            <h2 className="text-3xl md:text-4xl font-black font-['Syne'] text-[#1a1a1a] leading-tight">
              Technical <span className="text-[#a07850]">Skills</span>
            </h2>
          </div>
          <p className="text-stone-500 max-w-md md:text-right text-sm leading-relaxed">
            I've spent years mastering these technologies to build robust, scalable,
            and pixel-perfect applications. Always learning and exploring new tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map(category => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="mt-10 overflow-hidden transition-all duration-400 opacity-0">
          <p className="text-center text-stone-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Also familiar with
          </p>
          <div className="flex gap-3 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[1, 2].map((groupIndex) => (
              <div key={groupIndex} className="flex gap-3 shrink-0">
                {familiarSkills.map((skill, index) => (
                  <span key={index} className="inline-flex items-center px-4 py-1.5 text-xs font-medium rounded-full border border-stone-200 text-stone-500 bg-white shrink-0">
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
