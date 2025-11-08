const NavLink = ({ href, label, onClick, className = '' }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-black no-underline hover:text-blue-600 hover:underline transition-all duration-300 font-medium ${className}`}
    >
      {label}
    </a>
  );
};

export default NavLink;

