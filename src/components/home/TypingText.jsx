import { useTypingEffect } from '../../hooks/useTypingEffect';
import { ROLES } from '../../constants/home';

const TypingText = () => {
  const displayText = useTypingEffect(ROLES);

  return (
    <div className="text-2xl lg:text-3xl font-semibold text-gray-700 h-12 flex items-center justify-center lg:justify-start">
      <span className="text-blue-600 mr-2">{displayText}</span>
      <span className="inline-block w-1 h-7 bg-blue-600 ml-1 animate-pulse"></span>
    </div>
  );
};

export default TypingText;

