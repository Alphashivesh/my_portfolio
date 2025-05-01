import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  details?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Chatbot',
      description: 'An intent-based chatbot leverages NLP to detect user intent and deliver appropriate responses or actions.',
      image: 'https://res.cloudinary.com/dyhsntoii/image/upload/v1746110903/bot_s5elcr.png',
      tags: ['Python', 'Scikit-learn', 'NLTK', 'Streamlit', 'Pandas', 'Ploty'],
      demoLink: 'https://chatbot-byshivesh.streamlit.app/',
      codeLink: 'https://github.com/Alphashivesh/chatbot',
      details: 'This project demonstrates the practical application of NLP and ML in creating intelligent conversational agents. The chatbot successfully bridges the gap between user queries and automated responses, providing a foundation for future improvements in AI-driven communication systems. An intent-based chatbot processes user input using NLP to classify intents and generate context-aware responses based on predefined training data.',
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'A responsive dashboard for social media analytics with real-time data visualization.',
      image: 'https://images.pexels.com/photos/7947552/pexels-photo-7947552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Vue.js', 'D3.js', 'Firebase', 'Tailwind CSS'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
      details: 'The Social Media Dashboard is a data visualization tool that connects to various social media APIs to provide real-time analytics. It features interactive charts built with D3.js, real-time data updates using Firebase, and a responsive design with Tailwind CSS. The dashboard allows users to track followers, engagement rates, post performance, and audience demographics across multiple platforms.',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team workspaces.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
      details: 'This task management app focuses on team collaboration with features like shared workspaces, real-time updates using Socket.io, and comprehensive task tracking capabilities. Built with Next.js and TypeScript on the frontend and a PostgreSQL database for persistent storage, it offers a robust solution for project management. Features include task creation, assignment, status tracking, deadlines, file attachments, and team communication.',
    },
    {
      id: 4,
      title: 'Fitness Tracking Platform',
      description: 'A mobile-first web application for tracking workouts, nutrition, and fitness progress.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['React Native Web', 'GraphQL', 'AWS', 'Chart.js'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
      details: 'The Fitness Tracking Platform allows users to log workouts, track nutrition, and monitor their fitness progress over time. The app includes features such as workout templates, exercise library, nutritional information database, progress visualization with Chart.js, and personalized recommendations. Built with React Native Web for cross-platform compatibility, it uses GraphQL for efficient data fetching and AWS for scalable backend services.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  
  const nextProjects = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + projectsPerPage
    );
  };
  
  const prevProjects = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - projectsPerPage < 0 ? Math.max(0, projects.length - projectsPerPage) : prevIndex - projectsPerPage
    );
  };
  
  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A selection of my most significant projects that showcase my skills and expertise."
        />
        
        <div className="relative max-w-6xl mx-auto">
          {/* Project cards */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {visibleProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 flex-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                    >
                      View Details
                    </button>
                    
                    <div className="flex space-x-2">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevProjects}
              className="p-2 rounded-full bg-white dark:bg-gray-900 shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Previous projects"
            >
              <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextProjects}
              className="p-2 rounded-full bg-white dark:bg-gray-900 shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Next projects"
            >
              <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Project details modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 text-white transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                {activeProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {activeProject.details || activeProject.description}
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href={activeProject.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200 flex items-center"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
                <a 
                  href={activeProject.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors duration-200 flex items-center"
                >
                  <Github size={18} className="mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
