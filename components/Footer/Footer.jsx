import React from 'react';
import { FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="bg-gray-950 text-white py-8 px-4 md:px-12">
      <footer className="w-full text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Connect with Me</h2>
            <p className="text-gray-400 mt-2">Building smarter solutions, one project at a time.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/skcofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Shravanch19.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://portfolio-shravan-s-projects-f0f07f2c.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FiGlobe size={24} />
            </a>
          </div>
        </div>
        <div className="w-[80vw] mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <pre className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Shravan Chaturvedi. All rights reserved.
          </pre>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
