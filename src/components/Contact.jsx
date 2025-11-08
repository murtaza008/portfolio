import { useInView } from '../hooks/useInView';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const Contact = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      className="py-8 bg-gradient-to-br from-blue-600 to-purple-700 relative z-10"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          } transition-all duration-700`}
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3 transform hover:scale-105 transition-transform duration-300">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something
            amazing together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="transition-all duration-1000 ease-out opacity-100 translate-y-0 translate-x-0 scale-100 text-white">
            <ContactInfo />
          </div>
          <div className="transition-all duration-1000 ease-out opacity-100 translate-y-0 translate-x-0 scale-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

