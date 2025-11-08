import { useInView } from '../hooks/useInView';
import SectionTitle from './common/SectionTitle';
import ExperienceCard from './experience/ExperienceCard';
import { EXPERIENCE_DESCRIPTION, EXPERIENCES } from '../constants/experience';

const Experience = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-20 bg-gray-50 relative z-10">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } transition-all duration-700`}
      >
        <SectionTitle title="Work Experience" description={EXPERIENCE_DESCRIPTION} />
        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} isVisible={inView} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

