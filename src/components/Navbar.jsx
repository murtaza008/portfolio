import { useState } from 'react';
import DesktopNav from './navbar/DesktopNav';
import MobileMenu from './navbar/MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold italic text-gray-800 transform hover:scale-105 transition-transform duration-300 font-poppins">
            Murtaza's Portfolio
          </div>
          <DesktopNav />
          <button
            className="md:hidden text-black hover:text-blue-600 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </nav>
  );
};

export default Navbar;

