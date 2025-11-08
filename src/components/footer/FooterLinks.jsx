import { FOOTER_SERVICES } from '../../constants/footer';
import { CONTACT_INFO } from '../../constants/social';

const FooterLinks = () => {
  return (
    <>
      <div>
        <h4 className="text-lg font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-gray-400">
          {FOOTER_SERVICES.map((service, index) => (
            <li key={index}>
              <a
                href={service.href}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {service.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
        <div className="space-y-2 text-gray-400">
          <p>
            <i className="fas fa-envelope mr-2"></i>
            {CONTACT_INFO.email}
          </p>
          <p>
            <i className="fab fa-linkedin mr-2"></i>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              linkedin.com/in/murtaza-mazhar-31a083288
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;

