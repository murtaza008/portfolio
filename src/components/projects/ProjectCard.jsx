const ProjectCard = ({ project, isVisible, delay = 0 }) => {
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
        <div className="relative overflow-hidden">
          <img
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            src={project.image}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              <a
                href={project.liveDemo}
                className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Live Demo
              </a>
              <a
                href={project.code}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105"
              >
                <i className="fab fa-github mr-2"></i>
                Code
              </a>
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {project.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 transform hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

