import SectionTag from "../ui/SectionTag";
import ExperienceItem from "../ui/ExperienceItem";
import { experienceData } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-[#c8a97e]/6 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10 text-center transition-all duration-400 opacity-0 translate-y-8">
          <div className="flex justify-center mb-3">
            <SectionTag className="mb-0" rightDash={true}>Career Path</SectionTag>
          </div>
          <h2 className="text-3xl md:text-4xl font-black font-['Syne'] text-[#1a1a1a] leading-tight">
            Work <span className="text-[#a07850]">Experience</span>
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {experienceData.map(item => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
