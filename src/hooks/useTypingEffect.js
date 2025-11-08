import { useEffect, useState } from 'react';

export const useTypingEffect = (roles, typingSpeed = 10, deletingSpeed = 10) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    
    const timeout = setTimeout(() => {
      const nextLength = displayText.length + (isDeleting ? -1 : 1);
      const nextText = current.slice(0, nextLength);
      setDisplayText(nextText);

      if (!isDeleting && nextText === current) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && nextText === '') {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed]);

  return displayText;
};

