import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Code, Layout, Database, Server, Lightbulb, Paintbrush } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    {
      name: 'Frontend',
      icon: <Layout size={24} />,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      name: 'Backend',
      icon: <Server size={24} />,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Database',
      icon: <Database size={24} />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Programming',
      icon: <Code size={24} />,
      color: 'from-green-500 to-teal-500',
    },
    {
      name: 'UI/UX Design',
      icon: <Paintbrush size={24} />,
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Other',
      icon: <Lightbulb size={24} />,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const skillsData = {
    'Frontend': [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Vue.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 80 },
    ],
    'Backend': [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Django', level: 70 },
      { name: 'Flask', level: 75 },
      { name: 'GraphQL', level: 65 },
    ],
    'Database': [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Firebase', level: 80 },
    ],
    'Programming': [
      { name: 'TypeScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 65 },
      { name: 'C#', level: 60 },
    ],
    'UI/UX Design': [
      { name: 'Figma', level: 90 },
      { name: 'Adobe XD', level: 75 },
      { name: 'Photoshop', level: 70 },
      { name: 'Illustrator', level: 65 },
    ],
    'Other': [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 65 },
    ],
  };

  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical skills and areas of expertise."
        />
        
        <div className="max-w-5xl mx-auto">
          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                  activeCategory === category.name
                    ? `bg-gradient-to-br ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="mb-2">{category.icon}</div>
                <p className="font-medium">{category.name}</p>
              </button>
            ))}
          </div>
          
          {/* Skills list */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
              {activeCategory} Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${
                        categories.find(c => c.name === activeCategory)?.color
                      } transition-all duration-1000 ease-out group-hover:opacity-80`} 
                      style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                    ></div>
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

export default Skills;