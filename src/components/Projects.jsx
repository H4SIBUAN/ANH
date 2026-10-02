import React from 'react';
import { projects } from '../data/config.js';
import { ExternalLink, Github, Code2, Layers } from 'lucide-react';

const Projects = () => {
  return (
    <section id="proyek" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Proyek</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden card-hover animate-on-scroll">
            <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <Layers className="w-12 h-12 text-white/50" />
              )}
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg px-4 py-2 text-sm">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 dark:text-white rounded-lg px-4 py-2 text-sm">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
