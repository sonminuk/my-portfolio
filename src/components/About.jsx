// src/components/About.jsx
import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <User className="w-6 h-6 mr-2" />
        About Me
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>웹 개발을 꾸준히 공부하는 개발자</li>
        <li>팀 프로젝트에서 꾸준한 소통으로 프로젝트 완성까지 끌고가는 개발자</li>
        <li>다양한 프로젝트를 통해 실무 경험을 쌓아가며 웹 개발에 관심을 가지고 있는 주니어 개발자입니다.</li>
      </ul>
    </section>
  );
};

export default About;