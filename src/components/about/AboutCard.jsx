const AboutCard = ({ card, isVisible, delay }) => {
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <div
        className={`text-center p-6 ${card.bgColor} ${card.hoverBgColor} rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
      >
        <div
          className={`w-16 h-16 ${card.iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300`}
        >
          <i className={`${card.icon} text-2xl text-white`}></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
        <p className="text-gray-600">{card.description}</p>
      </div>
    </div>
  );
};

export default AboutCard;

