import { CONTACT_INFO } from '../../constants/social';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      content: 'linkedin.com/in/murtaza-mazhar-31a083288',
      href: CONTACT_INFO.linkedin,
      isLink: true,
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      content: 'github.com/murtaza-008',
      href: CONTACT_INFO.github,
      isLink: true,
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: CONTACT_INFO.location,
    },
  ];

  return (
    <div className="space-y-3">
      {contactItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300"
        >
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
            <i className={`${item.icon} text-white text-lg`}></i>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">{item.title}</h3>
            {item.isLink ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 text-decoration-none text-sm"
              >
                {item.content}
              </a>
            ) : item.href ? (
              <a
                href={item.href}
                className="text-white transition-colors duration-300 text-decoration-none text-sm"
              >
                {item.content}
              </a>
            ) : (
              <p className="text-blue-100 text-sm">{item.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;

