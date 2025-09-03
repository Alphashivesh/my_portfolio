import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'NIT Meghalaya',
      period: '2022 - Present',
      description: 'Specialized in Software Engineering, Data Structures, Web Development, Database, and OOPs with a strong academic focus. Currently holding a CGPA of 9.36 and ranked among the top performers in my branch.',
      icon: <GraduationCap size={24} />,
    },
    {
      degree: 'Senior Secondary schooling',
      institution: 'Paramount Academy',
      period: '2019 - 2021',
      description: 'Secured 87.8% in Class 12 (CBSE), reflecting consistent performance and advanced subject proficiency. Earned a good rank in the DUET entrance examination, showcasing competitive aptitude. Maintained a strong focus on Mathematics, Physics, and Chemistry, building a solid technical base.',
      icon: <BookOpen size={24} />,
    },
    {
      degree: 'Secondary schooling',
      institution: 'Paramount Academy',
      period: '2018 - 2019',
      description: 'Achieved 91% in Class 10 (CBSE), showcasing strong academic excellence and a solid educational foundation. Secured 3rd rank in the entire school, reflecting consistent dedication and performance. Also served as a class leader in both Class 9 and Class 10, demonstrating responsibility and leadership qualities',
      icon: <BookOpen size={24} />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Educational Milestones" 
          subtitle="My academic journey that have shaped my skills and knowledge."
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Timeline navigation */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="sticky top-24">
                <div className="space-y-2">
                  {education.map((item, index) => (
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
              {education.map((item, index) => (
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

export default Education;
