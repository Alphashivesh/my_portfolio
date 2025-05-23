import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Alphashivesh', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/shivesh-kumar-39240b264/', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/phenomenalshivesh/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
              Portfolio
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-gray-700 dark:text-gray-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
