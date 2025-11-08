import { useEffect, useState } from 'react';

export const useFadeIn = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (delay > 0) {
        setTimeout(() => setIsVisible(true), delay);
      } else {
        setIsVisible(true);
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [delay]);

  return isVisible;
};

