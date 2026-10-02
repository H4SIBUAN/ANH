import React from 'react';
import { profile, social } from '../data/config.js';
import { Instagram, Github, Linkedin, ChevronDown, Mail } from 'lucide-react';

const Hero = () => {
  // Helper to get initials for the placeholder
  const getInitials = (name) => {
    if (!name) return 'BN';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <section
      id="beranda"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 pt-20"
    >
      <div className="container mx-auto px-4 md:px-8 text-center animate-on-scroll">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          {/* Profile Photo Placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-white dark:border-gray-800">
            <span className="text-4xl md:text-5xl font-bold text-white">
              {getInitials(profile.name)}
            </span>
          </div>

          {/* Title and Intro */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Halo, saya{' '}
            <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              {profile.name}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
            {profile.role}
          </h2>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {profile.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
            <a
              href="#tentang"
              className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
            >
              Lihat Profil
            </a>
            <a
              href="#kontak"
              className="w-full sm:w-auto border-2 border-primary-500 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 font-medium px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            )}
            {/* Added Mail as it was imported and can be part of social links or contacts if present */}
          </div>
        </div>
      </div>

      {/* Animated Chevron Down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#tentang" 
          className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2 flex items-center justify-center"
          aria-label="Scroll ke Tentang"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
