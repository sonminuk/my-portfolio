// src/components/Skills.jsx
import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  const skillsData = {
    'Programming Languages': ['Java', 'C#', 'JavaScript', 'Python', 'SQL'],
    'Framework/Library': ['React.js', 'Node.js', 'Bootstrap'],
    'Database': ['MySQL', 'Oracle', 'Firebase', 'HeidiSQL'],
    'Tools': ['VS Code', 'Visual Studio', 'Eclipse', 'Git']
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Code className="w-6 h-6 mr-2" />
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;