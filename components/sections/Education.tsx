import SectionTag from "../ui/SectionTag";
import EducationItem from "../ui/EducationItem";
import { educationData } from "../../data/education";

export default function Education() {
  return (
    <section id="education" className="py-12 bg-[#f8f5f0] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c8a97e]/8 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10 text-center transition-all duration-400 opacity-0 translate-y-8">
          <div className="flex justify-center mb-3">
            <SectionTag className="mb-0" rightDash={true}>Academic Background</SectionTag>
          </div>
          <h2 className="text-3xl md:text-4xl font-black font-['Syne'] text-[#1a1a1a] leading-tight">
            <span className="text-[#a07850]">Education</span>
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {educationData.map(item => (
            <EducationItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
