import React from 'react';
import { education } from '../data/config.js';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="pendidikan" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block relative">
            Pendidikan
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative timeline-line before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-300 before:via-blue-300 before:to-transparent dark:before:from-blue-700 dark:before:via-blue-700">
          {education?.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-on-scroll mb-8 last:mb-0">
              
              {/* Timeline Dot / Icon */}
              <div className="timeline-dot flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-0 z-10 transition-transform hover:scale-110 cursor-pointer">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Timeline Card */}
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full px-3 py-1 text-sm font-semibold mb-3">
                  {item.year}
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                  {item.school}
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {item.major}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
