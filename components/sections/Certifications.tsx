import SectionTag from "../ui/SectionTag";
import CertificationCard from "../ui/CertificationCard";
import { certificationsData } from "../../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center transition-all duration-400 opacity-0 translate-y-8">
          <div className="flex justify-center mb-3">
            <SectionTag className="mb-0">Credentials</SectionTag>
          </div>
          <h2 className="text-3xl md:text-4xl font-black font-['Syne'] text-[#1a1a1a] leading-tight">
            Licenses & <span className="text-[#a07850]">Certifications</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {certificationsData.map(item => (
            <CertificationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
