import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Briefcase, Code, Users, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Generative AI Intern: Multi-Agent System for Citation Chronology Visualization',
      company: 'IIT Jodhpur',
      period: 'Jun 2025 – Jul 2025',
      description:
        'Developed a modular system that automates citation extraction, clustering, and visualization from academic research papers. Leveraged Large Language Models (LLMs), embeddings, and K-Means clustering to identify citation patterns and thematic groups. Designed interactive D3.js hierarchies and Matplotlib timelines to present chronological and semantic insights. This project streamlines literature reviews by reducing manual effort and enabling intelligent citation mapping for researchers.',
      icon: <Code size={24} />,
    },
    {
      role: 'Artificial Intelligence and Data Analytics Intern',
      company: 'Edunet Foundation',
      period: 'Dec 2024 – Jan 2025',
      description:
        'Developed an intelligent conversational chatbot using Python, NLTK, scikit-learn, and Streamlit to understand and respond to user queries in real time. Implemented intent recognition with TF-IDF vectorization and Logistic Regression for accurate query classification. Designed a user-friendly web interface with persistent chat history and CSV-based logging. The chatbot automates responses, provides recommendations, and handles multiple interactions efficiently. This project demonstrates the practical use of NLP and ML in building scalable, AI-driven communication systems.',
      icon: <Code size={24} />,
    },
    {
      role: 'Python Intern',
      company: 'Coding Raja Technologies',
      period: 'Jul 2024 – Aug 2024',
      description:
        'I built a Python-based To-Do List and Expense Tracker application that combines task management and financial tracking in a single solution. The app allows users to add, edit, delete, and mark tasks as completed, helping them organize their daily activities effectively. On the financial side, I implemented features to add, categorize, and delete expense records, enabling users to monitor their spending habits. The project was developed with a focus on clean code practices and modular Python design, ensuring scalability and maintainability. I also emphasized user-friendly interactions by designing a simple yet intuitive interface for smooth navigation.',
      icon: <Users size={24} />,
    },
    {
      role: 'Web Development Intern',
      company: 'Dabotics India Private Ltd.',
      period: 'Mar 2024 – Apr 2024',
      description:
        'I completed a Web Development Internship at Dabotics India, where I contributed to real-world full-stack projects. During this internship, I gained hands-on experience in both front-end and back-end development using HTML, CSS, JavaScript, PHP, and MySQL. I worked on building responsive user interfaces and integrating backend functionalities to improve overall site performance and user experience. My role also involved enhancing application efficiency, optimizing database handling, and ensuring clean, maintainable code. Additionally, I collaborated with team members in an Agile environment, which strengthened my problem-solving and teamwork abilities.',
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
