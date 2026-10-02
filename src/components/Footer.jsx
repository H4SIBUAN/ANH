import React from 'react';
import { profile, social } from '../data/config.js';
import { Instagram, Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
        <p className="text-gray-400 mb-6">{profile.tagline || 'Web Developer'}</p>
        
        <div className="flex gap-4 mb-8">
          {social.instagram && (
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          )}
          {social.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          )}
        </div>
        
        <div className="text-gray-400 text-sm flex flex-col items-center gap-2">
          <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
