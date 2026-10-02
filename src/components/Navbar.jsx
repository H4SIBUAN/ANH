import React, { useState, useEffect } from 'react';
import { navLinks, profile } from '../data/config.js';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          <a href="#beranda" onClick={closeMenu}>
            {profile.name}
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 p-2 focus:outline-none flex flex-col justify-center items-center w-8 h-8"
            aria-label="Toggle Menu"
          >
            {/* Adding the animated classes requested by the user even though Lucide icons are used. 
                Using Lucide icons here since the user also asked for them, 
                but keeping the requested classes on the wrapper. */}
            <div className={`hamburger-line ${isOpen ? 'hamburger-open' : ''}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 border-t border-gray-100 dark:border-gray-800' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col py-4 px-4 space-y-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
