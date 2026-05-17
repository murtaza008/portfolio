import SectionTag from "../ui/SectionTag";
import ProjectCard from "../ui/ProjectCard";
import { projectsData } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-[#f8f5f0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#c8a97e]/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 transition-all duration-400 opacity-0 translate-y-10">
          <div>
            <div className="flex justify-start mb-3 transition-all duration-400 opacity-0 translate-y-8">
              <SectionTag>Featured Work</SectionTag>
            </div>
            <h2 className="text-3xl md:text-4xl font-black font-['Syne'] text-[#1a1a1a] leading-tight">
              My <span className="text-[#a07850]">Projects</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button suppressHydrationWarning className="cursor-pointer px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-250 whitespace-nowrap bg-[#1a1a1a] text-white">
              All
            </button>
            <button suppressHydrationWarning className="cursor-pointer px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-250 whitespace-nowrap bg-white border border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-700">
              Full Stack
            </button>
            <button suppressHydrationWarning className="cursor-pointer px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-250 whitespace-nowrap bg-white border border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-700">
              Frontend
            </button>
            <button suppressHydrationWarning className="cursor-pointer px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-250 whitespace-nowrap bg-white border border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-700">
              Backend
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-8 text-center transition-all duration-400 opacity-0 translate-y-6">
          <a
            href="https://github.com/alexjohnson"
            target="_blank"
            rel="nofollow noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white font-semibold rounded-xl hover:bg-[#a07850] transition-all duration-300 whitespace-nowrap text-sm"
          >
            <i className="ri-github-fill text-lg"></i> View All on GitHub
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
