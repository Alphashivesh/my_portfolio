import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Award, BookOpen, Coffee, Code } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Award size={24} />, value: '2+', label: 'Years Experience' },
    { icon: <Code size={24} />, value: '15+', label: 'Projects Completed' },
    { icon: <BookOpen size={24} />, value: '100+', label: 'GitHub Contributions' },
    { icon: <Coffee size={24} />, value: '∞', label: 'Coffee Consumed' },
  ];

  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better and what drives my passion for creating amazing digital experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
             <img 
                  src="https://res.cloudinary.com/dyhsntoii/image/upload/v1746105810/WhatsApp_Image_2024-10-04_at_19.51.31_9d08267b_ohas1b.jpg" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                  />

            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-lg -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              I'm Shivesh Kumar, a passionate coder, developer and designer
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I specialize in creating stunning and functional websites that leave a lasting impression. With a background in both design and development, I bring a unique perspective to every project I work on.
              </p>
              <p>
                My journey began over 2 years ago when I discovered my passion for coding. Since then, I've worked with various technologies and frameworks to deliver exceptional digital experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, writing articles about web development, or enjoying a cup of coffee while brainstorming new project ideas.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 dark:bg-gray-800 p-4 rounded-lg text-center transform hover:-translate-y-1 transition-transform duration-300 backdrop-blur-sm"
                >
                  <div className="text-indigo-600 dark:text-indigo-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
