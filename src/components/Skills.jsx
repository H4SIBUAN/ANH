import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/config.js';

const Skills = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section id="keahlian" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
        Keahlian
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-4" ref={containerRef}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm card-hover animate-on-scroll"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-900 dark:text-white">
                {skill.name}
              </span>
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                {skill.percentage}%
              </span>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div 
                className={`h-3 rounded-full bg-gradient-to-r skill-bar-fill ${skill.color || ''} transition-all duration-1000 ease-out ${isVisible ? 'is-visible' : ''}`}
                style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
