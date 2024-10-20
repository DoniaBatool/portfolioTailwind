import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { RiJavascriptFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { TbBrandReact } from 'react-icons/tb';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoWordpress } from 'react-icons/io';
import { PiOfficeChairFill } from 'react-icons/pi';

const Skills = () => {
  return (
    <div id="skills" className="custom-image bg-fixed bg-center bg-cover">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-yellow-300">
              <span className="border-b-4 border-yellow-300">My Skills</span>
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* Skill Cards */}
            {[
              { icon: <FaHtml5 />, skill: 'HTML', level: '100%' },
              { icon: <IoLogoCss3 />, skill: 'CSS', level: '90%' },
              { icon: <RiJavascriptFill />, skill: 'JavaScript', level: '80%' },
              { icon: <BiLogoTypescript />, skill: 'TypeScript', level: '80%' },
              { icon: <TbBrandReact />, skill: 'React', level: '80%' },
              { icon: <SiNextdotjs />, skill: 'Next.js', level: '80%' },
              { icon: <IoLogoWordpress />, skill: 'WordPress', level: '80%' },
              { icon: <PiOfficeChairFill />, skill: 'Microsoft Office', level: '80%' },
            ].map((item, index) => (
              <div key={index} className="p-4 sm:w-1/2 lg:w-1/3 w-full">
                <div className="flex rounded-lg h-full p-6 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-900 text-white flex-shrink-0 hover:bg-yellow-300 hover:text-blue-900 shadow-lg transform transition-transform duration-300 ease-in-out border-2 border-yellow-300 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] hover:scale-105">
                      {item.icon}
                    </div>
                    <h2 className="text-white text-lg title-font font-medium">
                      {item.skill}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className="relative h-1 w-full bg-white rounded-xl">
                      <div className="absolute bg-yellow-300 h-1 rounded-xl w-[80%]"></div>
                    </div>
                    <p className="font-bold text-yellow-300 text-right">{item.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
