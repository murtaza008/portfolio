const ExperienceCard = ({ experience, isVisible, delay = 0 }) => {
  return (
    <div
      className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <div className="flex items-start space-x-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 transform hover:rotate-12 transition-transform duration-300">
          <i className={`${experience.icon} text-2xl text-white`}></i>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-1">{experience.title}</h4>
              <p className="text-xl text-blue-600 font-semibold">{experience.company}</p>
            </div>
            <div className="text-gray-600 font-medium">
              <i className="fas fa-calendar-alt mr-2"></i>
              {experience.period}
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => {
              const colorClasses = [
                'bg-blue-100 text-blue-800',
                'bg-green-100 text-green-800',
                'bg-purple-100 text-purple-800',
                'bg-yellow-100 text-yellow-800',
                'bg-indigo-100 text-indigo-800',
                'bg-pink-100 text-pink-800',
              ];
              return (
                <span
                  key={index}
                  className={`${colorClasses[index % colorClasses.length]} px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

