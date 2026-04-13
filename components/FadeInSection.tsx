'use client';

import { useEffect, useRef, useState } from 'react';

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function FadeInSection({ children, className = '' }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
