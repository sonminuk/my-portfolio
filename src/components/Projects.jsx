import React from 'react';
import { Briefcase, Calendar, User } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "포켓로그 공략 사이트 제작",
      period: "2024.09 ~ 2024.11",
      team: "3인",
      description: "포켓로그 게임 공략 사이트는 포켓몬과 관련된 다양한 정보를 제공하는 웹 사이트",
      stack: ["React.js", "Firebase", "Python"],
      link: "https://pocketlab007.netlify.app/",
      github: "https://github.com/TaeHoonHer/23_Ministry-of-Oceans-and-Fisheries-Project"
    },
    { 
      title: "환경 보호 플랫폼 제작",
      period: "2024.03 ~ 2024.06",
      team: "6인",
      description: "캡스톤 환경 보호 플랫폼 제작",
      stack: ["Python", "JavaScript", "Firebase"],
      github: "https://github.com/Ohsondoson5/Eco.git"
    },
    {
      title: "해상뉴스큐레이션 앱 개발",
      period: "2023.04 ~ 2023.11",
      team: "4인",
      description: "공모전(스마트 해상물류 경진대회) 및 해상물류에 관심있는 사람들을 위한 정보센터 해상뉴스큐레이션 앱 개발. 백엔드 개발, UI 디자인, 데이터베이스 및 뉴스 데이터 실시간 업데이트 개발 담당",
      stack: ["Android Studio", "Python", "Java", "Firebase", "Git"],
      github: "https://github.com/TaeHoonHer/23_Ministry-of-Oceans-and-Fisheries-Project",
    },
    {
      title: "대림대학교 소통 웹 사이트 개발",
      period: "2023.03 ~ 2023.06",
      team: "5인",
      description: "학교 팀프로젝트 과제로, 대림대학교 인원들과 소통하기 위한 커뮤니티 웹 개발. html과 css를 이용하여 디자인 및 웹의 모든 구조 개발",
      stack: ["MariaDB", "Eclipse", "Java", "Servlet"],
      additionalInfo: "처음하는 팀프로젝트이다 보니 개인이 하는 것과는 확실히 다르다는것을 느꼈으며 다들 같이하며 성장하는 것을 느껴서 완성하고 난뒤에 뿌듯함을 느꼈습니다."
    }
    
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Briefcase className="w-6 h-6 mr-2" />
        Projects
      </h2>
      {projects.map(project => (
        <div key={project.title} className="border-b last:border-b-0 py-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{project.period}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>팀 구성: {project.team}</span>
            </div>
          </div>
          <p className="mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          {project.additionalInfo && (
            <p className="mb-4 text-gray-600 italic">
              {project.additionalInfo}
            </p>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:text-blue-800 mr-4">
              Live Demo →
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:text-blue-800">
              GitHub →
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;