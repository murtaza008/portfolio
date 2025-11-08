import { SOCIAL_LINKS } from '../../constants/social';

const SocialLinks = ({ className = '', iconSize = 'text-2xl' }) => {
  return (
    <div className={`flex justify-center lg:justify-start space-x-6 ${className}`}>
      <a
        href={SOCIAL_LINKS.github.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-600 transition-all duration-300 transform hover:scale-125 cursor-pointer"
        aria-label={SOCIAL_LINKS.github.label}
      >
        <i className={`${SOCIAL_LINKS.github.icon} ${iconSize}`}></i>
      </a>
      <a
        href={SOCIAL_LINKS.linkedin.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-600 transition-all duration-300 transform hover:scale-125 cursor-pointer"
        aria-label={SOCIAL_LINKS.linkedin.label}
      >
        <i className={`${SOCIAL_LINKS.linkedin.icon} ${iconSize}`}></i>
      </a>
      <a
        href={SOCIAL_LINKS.email.url}
        className="text-black hover:text-blue-600 transition-all duration-300 transform hover:scale-125 cursor-pointer"
        aria-label={SOCIAL_LINKS.email.label}
      >
        <i className={`${SOCIAL_LINKS.email.icon} ${iconSize}`}></i>
      </a>
    </div>
  );
};

export default SocialLinks;

