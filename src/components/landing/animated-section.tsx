"use client";

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = React.ComponentProps<'section'>;

export function AnimatedSection({ children, className, ...props }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        'transition-opacity duration-1000 ease-in',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      {...props}
    >
      <div className={cn('transform transition-transform duration-1000 ease-out', isVisible ? 'translate-y-0' : 'translate-y-8')}>
        {children}
      </div>
    </section>
  );
}
