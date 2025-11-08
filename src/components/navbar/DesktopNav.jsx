import { NAVIGATION_LINKS } from '../../constants/navigation';
import NavLink from './NavLink';

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {NAVIGATION_LINKS.map((link) => (
        <NavLink key={link.id} href={link.href} label={link.label} />
      ))}
    </div>
  );
};

export default DesktopNav;

