import { useInView } from '../hooks/useInView';
import SectionTitle from './common/SectionTitle';
import ProjectCard from './projects/ProjectCard';
import { PROJECTS } from '../constants/projects';

const Projects = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-20 bg-white relative z-10">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } transition-all duration-700`}
      >
        <SectionTitle
          title="Featured Projects"
          description="Here are some of my recent projects that showcase my skills in full-stack development, data science, and artificial intelligence."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} isVisible={inView} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

