import { SERVICE_COLORS } from '../../constants/services';
import Button from '../common/Button';

const ServiceCard = ({ service, isVisible, delay = 0 }) => {
  const colors = SERVICE_COLORS[service.color] || SERVICE_COLORS.blue;

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <div
        className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
          service.popular ? `ring-2 ${colors.border}` : ''
        }`}
      >
        {service.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
            Most Popular
          </div>
        )}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
          <div className="mb-4">
            <span className={`text-4xl font-bold ${colors.text}`}>{service.price}</span>
            <span className="text-gray-500 ml-2">{service.period}</span>
          </div>
          <p className="text-gray-600 font-medium">{service.delivery}</p>
        </div>
        <ul className="space-y-4 mb-8">
          {service.features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-200"
            >
              <div
                className={`w-5 h-5 ${colors.bg} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}
              >
                <i className="fas fa-check text-white text-xs"></i>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          onClick={() => {
            /* Handle service selection */
          }}
          className={`w-full ${colors.bg} ${colors.hover} text-white`}
        >
          {service.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;

