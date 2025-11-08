import { useInView } from '../hooks/useInView';
import SectionTitle from './common/SectionTitle';
import AboutCard from './about/AboutCard';
import { ABOUT_DESCRIPTION, ABOUT_CARDS } from '../constants/about';

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-20 bg-white relative z-10">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          } transition-all duration-700`}
      >
        <SectionTitle title="About Me" description={ABOUT_DESCRIPTION} />
        <div className="grid md:grid-cols-4 gap-8">
          {ABOUT_CARDS.map((card, index) => (
            <AboutCard
              key={card.id}
              card={card}
              isVisible={inView}
              delay={120 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

