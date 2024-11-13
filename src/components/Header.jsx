// src/components/Header.jsx
import profileImage from '../img/minuk.jpg';
import React from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <div className="w-48 h-48 rounded-full bg-white p-2 mx-auto md:mx-0">
              <img 
                src={profileImage}
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">손민욱</h1>
            <h2 className="text-xl mb-4">Front-end Development team</h2>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>ysson9068@naver.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>010-3322-1647</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>2001. 12. 05</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;