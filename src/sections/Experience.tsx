import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Briefcase, Code, Users, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Generative Artificial Intelligence Intern',
      company: 'IIT Jodhpur',
      period: 'Jun 2025 – Jul 2025',
      description:
        'Developed a multi-agent system to automate citation extraction, summarization, clustering, and visualization from academic PDFs. Leveraged Large Language Models (LLMs) to identify citation numbers, authors, and publication years, and generated concise two-line summaries. Applied nomic-embed-text embeddings with K-Means clustering and the elbow method to group citations into thematic clusters. Designed interactive D3.js hierarchies and Matplotlib plots to present chronological and semantic relationships among references. The system significantly reduces manual workload in literature reviews and provides a scalable framework for intelligent citation mapping.',
      icon: <Code size={24} />,
    },
    {
      role: 'Artificial Intelligence and Data Analytics Intern',
      company: 'Edunet Foundation',
      period: 'Dec 2024 – Jan 2025',
      description:
        'Contributed to building responsive web applications using React, Tailwind CSS, and TypeScript. Worked closely with the design team to improve UI/UX and optimized frontend performance by 20%.',
      icon: <Code size={24} />,
    },
    {
      role: 'Python Intern',
      company: 'Coding Raja Technologies',
      period: 'Jul 2024 – Aug 2024',
      description:
        'Organized coding workshops and hackathons for peers. Mentored juniors in web development and DSA, fostering a culture of collaboration and problem-solving.',
      icon: <Users size={24} />,
    },
    {
      role: 'Web Development Intern',
      company: 'Dabotics India Private Ltd.',
      period: 'Mar 2024 – Apr 2024',
      description:
        'Developed dynamic landing pages and dashboards using JavaScript and APIs. Enhanced the backend integration workflow and improved cross-browser compatibility.',
      icon: <Briefcase size={24} />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Experience & Internships"
          subtitle="Professional experiences, internships, and leadership roles that helped me gain practical skills."
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Timeline navigation */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="sticky top-24">
                <div className="space-y-2">
                  {experiences.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center ${
                        activeIndex === index
                          ? 'bg-indigo-100 dark:bg-indigo-900/40 border-l-4 border-indigo-500'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700/40'
                      }`}
                    >
                      <div
                        className={`mr-3 ${
                          activeIndex === index
                            ? 'text-indigo-600 dark:text-indigo-400'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p
                          className={`font-medium ${
                            activeIndex === index
                              ? 'text-indigo-600 dark:text-indigo-400'
                              : 'text-gray-800 dark:text-gray-200'
                          }`}
                        >
                          {item.period}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {item.company}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience details */}
            <div className="md:w-2/3 md:pl-8">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6 transition-all duration-500 transform ${
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
                        {item.role}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400">
                        {item.company}
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

export default Experience;
