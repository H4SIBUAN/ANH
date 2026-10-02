import React from 'react';
import { experience } from '../data/config.js';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="pengalaman" className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
        Pengalaman
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-6">
        {experience.map((exp, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover animate-on-scroll border-l-4 border-primary-500 flex gap-6"
          >
            <div className="hidden sm:flex flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-primary-500 to-accent-500 text-white">
                <Briefcase size={24} />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="sm:hidden mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-primary-500 to-accent-500 text-white">
                  <Briefcase size={24} />
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{exp.position}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                {exp.company}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>{exp.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
