import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  showLine?: boolean; // 👈 new prop
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  showLine = true // 👈 default is true
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
        {title}
        {showLine && ( // 👈 render only if true
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform origin-left scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
        )}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
