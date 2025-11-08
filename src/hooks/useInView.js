import { useEffect, useRef, useState } from 'react';

export function useInView(options = { root: null, rootMargin: '0px', threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      // Trigger animation when element enters viewport
      if (entry.isIntersecting) {
        setInView(true);
      } else {
        // Reset animation when element leaves viewport (optional - comment out if you want one-time animations)
        setInView(false);
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, [options.root, options.rootMargin, options.threshold]);

  return { ref, inView };
}



