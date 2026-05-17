import { Project } from "../../types";
import Badge from "./Badge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:-translate-y-2 hover:shadow-lg transition-all duration-400 opacity-0 translate-y-12"
      style={{ transitionDelay: `${project.delayMs}ms` }}
    >
      <div className="relative overflow-hidden h-44">
        <img
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-600 group-hover:scale-105"
          src={project.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[#1a1a1a]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="nofollow noreferrer"
            className="cursor-pointer flex items-center gap-1.5 px-4 py-2 bg-[#c8a97e] text-white text-xs font-bold rounded-lg hover:bg-[#a07850] transition-colors whitespace-nowrap"
          >
            <i className="ri-external-link-line"></i> Live Demo
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="nofollow noreferrer"
            className="cursor-pointer flex items-center gap-1.5 px-4 py-2 bg-white text-[#1a1a1a] text-xs font-bold rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap"
          >
            <i className="ri-github-fill"></i> Code
          </a>
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="solid">{project.type}</Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-['Syne'] font-bold text-[#1a1a1a] text-sm mb-1.5 group-hover:text-[#a07850] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-stone-400 text-xs leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="default">{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
