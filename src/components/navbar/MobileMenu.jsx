import { NAVIGATION_LINKS } from '../../constants/navigation';
import NavLink from './NavLink';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-4 space-y-2">
      {NAVIGATION_LINKS.map((link) => (
        <NavLink
          key={link.id}
          href={link.href}
          label={link.label}
          onClick={onClose}
          className="block py-2"
        />
      ))}
    </div>
  );
};

export default MobileMenu;

