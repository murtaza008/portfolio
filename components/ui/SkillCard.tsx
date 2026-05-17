import { SkillCategoryType } from "../../types";
import Badge from "./Badge";
import AnimatedSkillBar from "./AnimatedSkillBar";

export default function SkillCard({ category }: { category: SkillCategoryType }) {
  return (
    <div
      className="group p-5 rounded-2xl bg-[#f8f5f0] border border-stone-100 hover:bg-white hover:border-stone-200 hover:-translate-y-2 transition-all duration-400 opacity-0 translate-y-12"
      style={{ transitionDelay: `${category.delayMs}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
          style={{
            backgroundColor: category.iconBgColor,
            color: category.iconColor,
          }}
        >
          <i className={`${category.iconClass} text-lg`}></i>
        </div>
        <h3 className="font-['Syne'] font-bold text-[#1a1a1a] text-sm">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {category.skills.map((skill, i) => (
          <Badge key={i} variant="skill">{skill}</Badge>
        ))}
      </div>
      <AnimatedSkillBar
        title="Proficiency"
        percentage={category.proficiency}
        delayMs={category.delayMs}
        gradient="linear-gradient(90deg, rgb(200, 169, 126), rgb(160, 120, 80))"
      />
    </div>
  );
}
