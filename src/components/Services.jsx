import { useInView } from '../hooks/useInView';
import SectionTitle from './common/SectionTitle';
import ServiceCard from './services/ServiceCard';
import { SERVICES_DESCRIPTION, SERVICES } from '../constants/services';

const Services = () => {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-20 bg-gray-50 relative z-10">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } transition-all duration-700`}
      >
        <SectionTitle title="Services & Pricing" description={SERVICES_DESCRIPTION} />
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} isVisible={inView} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

