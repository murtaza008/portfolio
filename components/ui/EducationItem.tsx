import { EducationItemType } from "../../types";

export default function EducationItem({ item }: { item: EducationItemType }) {
  return (
    <div
      className="group relative p-7 rounded-2xl bg-white border border-stone-100 hover:border-stone-200 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden opacity-0 translate-y-10 scale-95"
      style={{ transitionDelay: `${item.delayMs}ms` }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c8a97e] to-[#a07850] rounded-t-2xl"></div>
      <div className="flex items-start gap-5 pt-2">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#c8a97e]/15 text-[#a07850] shrink-0 group-hover:scale-110 transition-transform duration-300">
          <i className="ri-graduation-cap-line text-2xl"></i>
        </div>
        <div className="flex-1">
          <h3 className="font-['Syne'] font-bold text-[#1a1a1a] text-xl leading-tight mb-1">
            {item.degree}
          </h3>
          <p className="text-[#a07850] font-semibold text-sm mb-4">
            {item.institution}
          </p>
          <div className="flex items-center gap-5 mb-4">
            <span className="flex items-center gap-1.5 text-stone-400 text-sm">
              <i className="ri-calendar-line"></i>{item.period}
            </span>
            <span className="flex items-center gap-1.5 text-emerald-600 text-sm font-semibold">
              <i className="ri-award-line"></i>3.8 / 4.0
            </span>
          </div>
          {item.bullets.map((bullet, i) => (
            <p key={i} className="text-stone-400 text-sm leading-relaxed">
              {bullet}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
