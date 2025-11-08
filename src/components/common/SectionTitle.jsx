const SectionTitle = ({ title, description, className = '' }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold text-gray-800 mb-4 transform hover:scale-105 transition-transform duration-300">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

