const Button = ({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  icon,
  ...props
}) => {
  const baseClasses =
    'px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer text-decoration-none';

  const variants = {
    primary:
      'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl',
    secondary:
      'bg-green-600 hover:bg-green-700 text-white hover:shadow-xl',
    outline:
      'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {icon && <i className={`${icon} ${children ? 'mr-2' : ''}`}></i>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${classes} ${icon && children ? 'flex items-center justify-center gap-2' : ''}`} {...props}>
      {icon && <i className={icon}></i>}
      {children}
    </button>
  );
};

export default Button;

