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
      title: 'Fake-news-detector',
      description: 'Fake news detector that uses machine learning to classify articles as real or fake based on their content. Preprocesses text, extracts features, and applies trained models to identify misinformation.',
      image: 'https://res.cloudinary.com/dyhsntoii/image/upload/v1755271649/fake_ojsqvz.svg',
      tags: ['Python', 'Pandas', 'NumPy', 'NLTK', 'scikit-learn’s TfidfVectorizer', 'scikit-learn', 'streamlit', 'jupyter notebook'],
      demoLink: 'https://fake-news-detector-ppavbqxoke7yv5fxuzrtwa.streamlit.app/',
      codeLink: 'https://github.com/Alphashivesh/fake-news-detector',
      details: 'The **Fake News Detector** is a machine learning-based system designed to classify news articles as *real* or *fake* by analyzing their textual content. It preprocesses raw text using NLTK, removes noise, and extracts meaningful features through **TF-IDF vectorization**. These features are then fed into trained scikit-learn models for accurate classification. Built with Python, Pandas, and NumPy for data handling, it offers an interactive interface via **Streamlit** and supports experimentation and analysis in **Jupyter Notebook**.',
    },
    {
      id: 3,
      title: 'Digital Rights Management System',
      description: 'A robust Digital Rights Management system built with React and TypeScript for secure content distribution and license management.',
      image: 'https://res.cloudinary.com/dyhsntoii/image/upload/v1746112619/drm_tfucem.jpg',
      tags: ['React 18', 'TypeScript', 'Vite', 'Node.js', 'Tailwind CSS'],
      demoLink: 'https://drm-wk6a.vercel.app/',
      codeLink: 'https://github.com/Alphashivesh/DRM',
      details: 'A secure DRM system built with React 18 and TypeScript, enabling real-time license creation, activation, and management. Access control leverages device fingerprinting, session tracking, and encrypted license keys for secure content delivery. Formal verification modules validate access policies, system state consistency, and license integrity. TailwindCSS powers a responsive UI, with modular components and centralized state using React Context API. The system includes unit, integration, and verification tests for reliability, security, and performance assurance',
    },
    {
      id: 4,
      title: 'Mobile App',
      description: 'A full-stack mobile application built with Flutter and Node.js that connects users with a wide variety of local service providers.',
      image: 'https://res.cloudinary.com/dyhsntoii/image/upload/v1761652886/app_mycx7k.webp',
      tags: ['Flutter(Dart)', 'Express.js', 'MySQL', 'Node.js', 'bcrypt'],
      demoLink: 'https://www.youtube.com/watch?v=jGo0q6Jwf98',
      codeLink: 'https://github.com/Alphashivesh/mobile_app',
      details: 'This application serves as a comprehensive platform for users to find and request services from various vendors. It features a dynamic home screen that lists all available service categories, a user registration and login system, and a unique, detailed request form for each category. The project is built with a modern tech stack, featuring a cross-platform Flutter application for the frontend and a robust Node.js REST API for the backend, all connected to a MySQL database.',
    },
    {
      id: 5,
      title: 'Digital Rights Management System',
      description: 'A robust Digital Rights Management system built with React and TypeScript for secure content distribution and license management.',
      image: 'https://res.cloudinary.com/dyhsntoii/image/upload/v1761653311/hire_knrr62.avif',
      tags: ['React 18', 'TypeScript', 'Vite', 'Node.js', 'Tailwind CSS'],
      demoLink: 'https://drm-wk6a.vercel.app/',
      codeLink: 'https://github.com/Alphashivesh/DRM',
      details: 'A secure DRM system built with React 18 and TypeScript, enabling real-time license creation, activation, and management. Access control leverages device fingerprinting, session tracking, and encrypted license keys for secure content delivery. Formal verification modules validate access policies, system state consistency, and license integrity. TailwindCSS powers a responsive UI, with modular components and centralized state using React Context API. The system includes unit, integration, and verification tests for reliability, security, and performance assurance',
    },
    {
      id: 3,
      title: 'Digital Rights Management System',
      description: 'A robust Digital Rights Management system built with React and TypeScript for secure content distribution and license management.',
      image: 'https://res.cloudinary.com/dyhsntoii/image/upload/v1746112619/drm_tfucem.jpg',
      tags: ['React 18', 'TypeScript', 'Vite', 'Node.js', 'Tailwind CSS'],
      demoLink: 'https://drm-wk6a.vercel.app/',
      codeLink: 'https://github.com/Alphashivesh/DRM',
      details: 'A secure DRM system built with React 18 and TypeScript, enabling real-time license creation, activation, and management. Access control leverages device fingerprinting, session tracking, and encrypted license keys for secure content delivery. Formal verification modules validate access policies, system state consistency, and license integrity. TailwindCSS powers a responsive UI, with modular components and centralized state using React Context API. The system includes unit, integration, and verification tests for reliability, security, and performance assurance',
    },
    
    {
      id: 4,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team workspaces.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['HTML', 'CSS', 'TypeScript', 'JavaScript', 'Vercel'],
      demoLink: 'https://taskflow-drab.vercel.app/',
      codeLink: 'https://github.com/Alphashivesh/taskflow',
      details: 'This task management app focuses on team collaboration with features like shared workspaces, real-time updates using Socket.io, and comprehensive task tracking capabilities. Built with Next.js and TypeScript on the frontend and a PostgreSQL database for persistent storage, it offers a robust solution for project management. Features include task creation, assignment, status tracking, deadlines, file attachments, and team communication.',
    },
    {
      id: 5,
      title: 'Play from youtube',
      description: 'An application that allows users to search, select, and play videos directly on the site without visiting YouTube.',
      image: 'https://res.cloudinary.com/dyhsntoii/image/upload/v1746116549/youtube_cvy20r.png',
      tags: ['React Native Web', 'CSS', 'APIs', 'JavaScript (ES6+)'],
      demoLink: 'https://play-from-youtube.vercel.app/',
      codeLink: 'https://github.com/Alphashivesh/Play_from_youtube',
      details: 'This web application leverages the YouTube Data API v3 to programmatically fetch video metadata and content. It includes a search functionality that queries YouTube’s database and returns structured JSON data. Retrieved videos are dynamically rendered using JavaScript and embedded via iframe using video IDs. The frontend is built with HTML, CSS, and JavaScript, ensuring responsive design and smooth UI interactions. API key authentication is securely managed to authorize data requests without exposing credentials.',
    },
     {
      id: 6,
      title: 'Quiz_app',
      description: 'A beautifully designed, cross-platform quiz application built with Expo and React Native that works seamlessly on both mobile devices and web browsers.',
      image: 'https://res.cloudinary.com/dyhsntoii/image/upload/v1747397870/quiz_vciywe.webp',
      tags: ['Expo SDK 52.0.30', 'Expo Router 4.0.17', 'React Native', 'TypeScriptReact', 'Native Reanimated Expo Linear', 'GradientLucide React Native Icons'],
      demoLink: 'https://sage-pasca-f78fed.netlify.app/',
      codeLink: 'https://github.com/Alphashivesh/App_quiz',
      details: 'QuizMaster is an interactive, cross-platform quiz application built with Expo and React Native, supporting both mobile and web. Users choose quiz categories and difficulty levels, then answer randomly generated, timed questions fetched from the Open Trivia DB API. The app features real-time score tracking, instant feedback on answers, and a progress indicator during quizzes. After each quiz, users see their scores and motivational feedback, and can view their rankings on a global leaderboard. The stylish, responsive UI provides category imagery and a smooth experience. The leaderboard highlights top players and tracks personal bests and recent attempts.',
    },
     {
      id: 7,
      title: 'Drum_kit',
      description: 'A simple web-based drum kit application. It allows users to play different drum sounds by either clicking on buttons or pressing specific keys on their keyboard.',
      image: 'https://res.cloudinary.com/dyhsntoii/image/upload/v1747402825/drum_u2owrv.jpg',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://drum-kit-seven-gilt.vercel.app/',
      codeLink: 'https://github.com/Alphashivesh/Drum_kit',
      details: 'Drum_kit is a simple interactive web-based drum kit application built with HTML, CSS, and JavaScript. Users can play various drum sounds by either clicking on on-screen drum buttons or pressing corresponding keys on their keyboard. Each button is visually styled and mapped to a specific drum sound such as crash, kick, snare, or toms. The app uses JavaScript event listeners to detect user actions and plays audio files accordingly, also providing visual feedback with button animations. This project demonstrates the fundamentals of front-end development, including DOM manipulation and adding interactivity to web pages. It serves as a hands-on exercise for beginners to learn and practice essential web technologies.',
    },
    {
      id: 8,
      title: 'Tic-tac-toe',
      description: 'Tic-Tac-Toe is a simple two-player strategy game played on a 3×3 grid where players take turns marking X or O. The goal is to be the first to align three marks horizontally, vertically, or diagonally.',
      image: 'https://res.cloudinary.com/dyhsntoii/image/upload/v1756879303/tictactoe_pgv41q.webp',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://tic-tac-toe-game-7gak.vercel.app/',
      codeLink: 'https://github.com/Alphashivesh/tic_tac_toe_game?tab=readme-ov-file',
      details: 'I developed a fully interactive Tic-Tac-Toe game using HTML, CSS, and JavaScript to demonstrate my front-end development skills. The game is designed for two players, where each player alternately places their mark (X or O) on a 3×3 grid. I implemented the complete game logic in JavaScript, including turn switching, win detection across rows, columns, and diagonals, and handling draw conditions. The user interface is styled with CSS to provide a clean, visually appealing, and responsive layout that works across different screen sizes. Additionally, I added a reset functionality so that players can quickly restart the game and enjoy repeated matches without reloading the page.',
    },
    {
      id: 9,
      title: 'Expense Tracker',
      description: 'This project is a Streamlit-based Expense Tracker that lets users record income and expenses, set budgets, manage recurring transactions, and view interactive financial reports.',
      image: 'https://res.cloudinary.com/dyhsntoii/image/upload/v1757054469/Screenshot_2025-09-05_121050_b62siu.png',
      tags: ['Streamlit', 'Pandas', 'NumPy', 'CSV & JSON'],
      demoLink: 'https://eulj5unitfwym7bxqjaafw.streamlit.app/',
      codeLink: 'https://github.com/Alphashivesh/Coding-Raja-Technologies-Internship-',
      details: 'This project is a Streamlit-based Expense Tracker App designed to help users manage their personal finances with ease. It allows users to add, view, and delete income and expense records while categorizing them for better organization. The app features budget management, recurring transactions, and a dashboard with charts and KPIs to visualize spending habits and financial health. Built with Streamlit, Pandas, and NumPy, it uses simple CSV/JSON file storage that is auto-created on first run, so no manual setup is needed. Users can also apply filters, generate reports, and import/export data for flexibility. This makes it a lightweight yet powerful tool for everyday financial tracking.',
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
