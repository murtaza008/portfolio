import { ExperienceItemType } from "../../types";
import Badge from "./Badge";

export default function ExperienceItem({ item }: { item: ExperienceItemType }) {
  return (
    <div
      className="transition-all duration-400 opacity-0 translate-y-10 scale-95"
      style={{ transitionDelay: `${item.delayMs}ms` }}
    >
      <div className="group p-7 rounded-2xl bg-[#f8f5f0] border border-stone-100 hover:bg-white hover:border-stone-200 hover:-translate-y-1.5 transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#c8a97e]/15 text-[#a07850] shrink-0 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-building-line text-xl"></i>
            </div>
            <div>
              <h3 className="font-['Syne'] font-bold text-[#1a1a1a] text-lg leading-tight">
                {item.role}
              </h3>
              <p className="text-[#a07850] text-sm font-semibold">
                {item.company}
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8a97e]/12 text-[#a07850] text-xs font-semibold border border-[#c8a97e]/25">
              <i className="ri-calendar-line text-xs"></i>{item.period}
            </div>
            <div className="text-stone-400 text-xs mt-1.5 text-right">
              {item.location}
            </div>
          </div>
        </div>
        <ul className="space-y-2 mb-5">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2.5 text-stone-500 text-sm leading-relaxed">
              <i className="ri-arrow-right-s-line text-[#c8a97e] mt-0.5 shrink-0 text-base"></i>
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <Badge key={i} variant="experience">{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
