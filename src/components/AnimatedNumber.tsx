import React, { useEffect, useRef, useState } from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface AnimatedNumberProps {
  number: number;
  label: string;
}

export function AnimatedNumber({ number, label }: AnimatedNumberProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(isVisible ? number : 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-5xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform">
        {count}
      </div>
      <div className="text-gray-300 font-medium">{label}</div>
    </div>
  );
}