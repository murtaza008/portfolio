import { COLOR_CLASSES } from '../../constants/skills';

const SkillCard = ({ skill, isVisible, delay = 0 }) => {
  const colorClass = COLOR_CLASSES[skill.color] || COLOR_CLASSES.blue;

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
        <div
          className={`w-16 h-16 ${colorClass} rounded-lg flex items-center justify-center mb-4 mx-auto transform group-hover:rotate-12 transition-transform duration-300`}
        >
          <i className={`${skill.icon} text-2xl text-white`}></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
          {skill.title}
        </h3>
        <p className="text-gray-600 mb-4 text-center leading-relaxed">{skill.description}</p>
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Proficiency</span>
            <span className="text-sm font-medium text-gray-700">{skill.proficiency}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-2 ${colorClass} rounded-full transition-all duration-1000 ease-out transform origin-left`}
              style={{ width: `${skill.proficiency}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

