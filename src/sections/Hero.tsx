import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I'm a Coder, Developer, Designer & Creator";
  const typingSpeed = 100;
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-300/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 dark:opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-green-300/30 dark:bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 dark:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-300/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 dark:opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-green-200/20 dark:bg-pink-500/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-emerald-200/20 dark:bg-cyan-500/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl opacity-50 animate-pulse animation-delay-2000"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-dark/[0.05] bg-[size:3rem_3rem]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-600 to-teal-500 animate-gradient">
            Shivesh kumar
          </h1>
          
          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-12 relative">
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl relative z-10">
              Crafting digital experiences that combine beautiful design with powerful functionality.
            </p>
            {/* Text highlight effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg blur-lg transition-all duration-500 group-hover:opacity-100 z-0"></div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:from-green-600 hover:to-emerald-700"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gray-600 dark:text-gray-400 group">
          <span className="text-sm mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">Scroll Down</span>
          <ArrowDown size={20} className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
