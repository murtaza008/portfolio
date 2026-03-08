import { FOOTER_DESCRIPTION } from '../constants/footer';
import { SOCIAL_LINKS } from '../constants/social';
import FooterLinks from './footer/FooterLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 transform hover:scale-105 transition-transform duration-300">
              Murtaza Mazhar
            </h3>
            <p className="text-gray-400 mb-4">{FOOTER_DESCRIPTION}</p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 cursor-pointer"
                aria-label={SOCIAL_LINKS.github.label}
              >
                <i className={`${SOCIAL_LINKS.github.icon} text-xl`}></i>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 cursor-pointer"
                aria-label={SOCIAL_LINKS.linkedin.label}
              >
                <i className={`${SOCIAL_LINKS.linkedin.icon} text-xl`}></i>
              </a>
              <a
                href={SOCIAL_LINKS.email.url}
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 cursor-pointer"
                aria-label={SOCIAL_LINKS.email.label}
              >
                <i className={`${SOCIAL_LINKS.email.icon} text-xl`}></i>
              </a>
            </div>
          </div>
          <FooterLinks />
        </div>
        <div className="mt-8 text-center text-gray-500">
          © 2026 Murtaza Mazhar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

