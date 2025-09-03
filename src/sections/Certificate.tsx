import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificate: React.FC = () => {
  const certificate = [
    {
      degree: 'Web Development Certification',
      institution: 'Udemy',
      period: '2024-2025',
      description:
        'Completed an intensive full-stack web development program with a strong focus on practical projects. Gained expertise in HTML, CSS, JavaScript, React, and responsive design, along with backend development using Node.js and Express. Built and deployed multiple applications to understand real-world development workflows and modern best practices.',
      icon: <Award size={24} />,
      link: 'https://drive.google.com/file/d/1KkT4yTjyvtuI8tlw5yV9uiGdSuR9jCRZ/view?usp=drivesdk',
    },
    {
      degree: 'AI Foundation Certification',
      institution: 'Oracle University',
      period: 'Aug - Sep 2025',
      description:
        'Earned foundational knowledge in Artificial Intelligence concepts, including supervised and unsupervised learning, neural networks, and applications of AI in different industries. Understood the role of data in training AI models and gained exposure to problem-solving using AI-driven approaches, preparing for advanced machine learning projects.',
      icon: <Award size={24} />,
      link: 'https://drive.google.com/file/d/1irzXMQIvhxgWHOB6WSS9dkUpyX4p03S8/view?usp=drivesdk',
    },
    {
      degree: 'Cybersecurity Fundamentals',
      institution: 'IBM SkillsBuild',
      period: 'Mar - Apr 2025',
      description:
        'Learned the core principles of cybersecurity including data protection, system vulnerabilities, threat detection, and secure coding practices. Developed an understanding of real-world cyber threats and strategies for risk management. This certification also emphasized ethical hacking basics and secure network configurations.',
      icon: <Award size={24} />,
      link: 'https://drive.google.com/file/d/1KnRkH8utm5WO2jWcP5kWIKDmy_rNdR9E/view?usp=drivesdk',
    },
    {
      degree: 'Elements of AI',
      institution: 'IBM SkillsBuild',
      period: 'Jan - Apr 2025',
      description:
        'Completed an internationally recognized introductory program on Artificial Intelligence. Covered topics like the basics of AI, machine learning, neural networks, and the ethical implications of AI adoption. Engaged in problem-solving tasks that illustrated how AI can be applied in practical, real-world scenarios across industries.',
      icon: <Award size={24} />,
      link: 'https://drive.google.com/file/d/1Kuiuwgb7SIH_o2FC9O6tdI5Rtmzz75cc/view?usp=drivesdk',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="certificate" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Learning & Achievements" 
          subtitle="Certifications and learning programs that enhanced my technical expertise and broadened my knowledge base."
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

            {/* Certificate details */}
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

                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                    >
                      View Certificate <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                  
                  <div className="text-sm text-gray-500 dark:text-gray-500 flex items-center mt-3">
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
