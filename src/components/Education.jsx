// src/components/Education.jsx
import React from 'react';
import { Award, Book } from 'lucide-react';

const Education = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Award className="w-6 h-6 mr-2" />
        Education & Certifications
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Education</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Book className="w-4 h-4 mr-2" />
              <span>대림대학교 컴퓨터정보학부 (2020.03 ~ 현재)</span>
            </li>
            <li className="flex items-center">
              <Book className="w-4 h-4 mr-2" />
              <span>강서공업고등학교 (2017.03 ~ 2020.03)</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Certifications</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              <span>정보처리기능사 (2018.10)</span>
            </li>
            <li className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              <span>전자기기기능사 (2019.07)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;