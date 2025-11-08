import { useInView } from '../hooks/useInView';
import SectionTitle from './common/SectionTitle';
import SkillCard from './skills/SkillCard';
import { SKILLS_DESCRIPTION, SKILLS } from '../constants/skills';

const Skills = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-20 bg-gray-50 relative z-10">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } transition-all duration-700`}
      >
        <SectionTitle title="Skills & Expertise" description={SKILLS_DESCRIPTION} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} isVisible={inView} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

