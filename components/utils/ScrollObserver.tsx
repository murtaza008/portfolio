'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll('.opacity-0, .skill-bar');
    
    const hiddenClassesList = [
      'opacity-0', 'translate-y-10', 'translate-y-12', '-translate-x-12', 
      'translate-x-12', 'scale-95', '-translate-x-10', 'translate-x-10', 
      'translate-y-5', 'translate-y-6', 'translate-y-8'
    ];

    const visibleClasses = ['opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100'];

    elements.forEach((el) => {
      if (el.classList.contains('skill-bar')) return;
      const classes = Array.from(el.classList);
      const specificHiddenClasses = classes.filter(c => hiddenClassesList.includes(c));
      el.setAttribute('data-hidden-classes', specificHiddenClasses.join(' '));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          
          if (el.classList.contains('skill-bar')) {
            if (entry.isIntersecting) {
              el.style.width = el.dataset.width || '0%';
            } else {
              el.style.width = '0%';
            }
            return;
          }

          const specificHiddenClasses = (el.getAttribute('data-hidden-classes') || '').split(' ').filter(Boolean);

          if (entry.isIntersecting) {
            el.classList.remove(...specificHiddenClasses);
            el.classList.add(...visibleClasses);
          } else {
            el.classList.remove(...visibleClasses);
            el.classList.add(...specificHiddenClasses);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
