import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

const Certificate: React.FC = () => {
  const certificate = [
    {
      degree: 'Web Development Certification',
      institution: 'Udemy',
      period: '2024-2025',
      description: 'Completed an intensive full-stack web development program covering modern JavaScript frameworks, responsive design, and backend development.',
      icon: <Award size={24} />,
    },
    {
      degree: 'AI foundation Certification',
      institution: 'Oracle University',
      period: 'Aug - Sep 2025',
      description: 'Focused on software engineering, data structure and web development. Maintain a CGPA of 9.36 till now.',
      icon: <GraduationCap size={24} />,
    },
    {
      degree: 'Cybersecurity Fundamentals',
      institution: 'IBM SkillsBuild',
      period: 'Mar - Apr 2025',
      description: 'Secured 91% in Class 10 and 87.8% in Class 12, demonstrating consistent academic excellence and strong foundational knowledge.',
      icon: <BookOpen size={24} />,
    },
    {
      degree: 'Elements of AI',
      institution: 'IBM SkillsBuild',
      period: 'Jan - Apr 2025',
      description: 'Completed an intensive full-stack web development program covering modern JavaScript frameworks, responsive design, and backend development.',
      icon: <Award size={24} />,
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="certificate" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Learning & Achievements" 
          subtitle="My academic journey and professional certifications that have shaped my skills and knowledge."
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Timeline navigation */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="sticky top-24">
                <div className="space-y-2">
                  {certificate.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center ${
                        activeIndex === index 
                          ? 'bg-indigo-100 dark:bg-indigo-900/40 border-l-4 border-indigo-500' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700/40'
                      }`}
                    >
                      <div className={`mr-3 ${activeIndex === index ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'}`}>
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className={`font-medium ${activeIndex === index ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-800 dark:text-gray-200'}`}>
                          {item.period}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {item.institution}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Education details */}
            <div className="md:w-2/3 md:pl-8">
              {certificate.map((item, index) => (
                <div 
                  key={index}
                  className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg mb-6 transition-all duration-500 transform ${
                    activeIndex === index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 absolute translate-x-8 pointer-events-none'
                  }`}
                  style={{ display: activeIndex === index ? 'block' : 'none' }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-full mr-4 text-indigo-600 dark:text-indigo-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {item.degree}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {item.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
