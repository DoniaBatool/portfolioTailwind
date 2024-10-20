"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing menu and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };

  return (
    <div className='custom-image bg-fixed bg-center bg-cover z-50 sticky top-0 p-2'>
      <header className="text-gray-600 body-font h-25">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image 
              src={require("../../../public/media/EYE.png")} 
              alt="logo" 
              width={100} 
              height={100}
              className="w-[70px] rounded-full border-yellow-300 border-[3px] 
                shadow-lg transform transition-transform duration-300 ease-in-out 
                hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] hover:scale-105"
            />
            <span className="ml-3 text-xl text-white font-semibold border-b-4 border-yellow-300">
              NINETEEN TECH
            </span>
          </a>

          {/* Hamburger Icon */}
          <div className="md:hidden ml-auto">
            <FiMenu className="text-white text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>

          {/* Sidebar for mobile */}
          <div className={`fixed inset-0 z-40 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-800 bg-opacity-90 w-1/2`}>
            <div className="flex justify-between items-center p-4">
              <h2 className="text-white text-lg font-semibold">Menu</h2>
              <FiX className="text-white text-2xl cursor-pointer" onClick={toggleMenu} />
            </div>
            <nav className="flex flex-col items-center">
              <Link href={"/"} className="py-2 text-white hover:text-yellow-300 duration-300">HOME</Link>
              <Link href={"#about"} className="py-2 text-white hover:text-yellow-300 duration-300">ABOUT</Link>
              <Link href={"#skills"} className="py-2 text-white hover:text-yellow-300 duration-300">SKILLS</Link>
              <Link href={"#project"} className="py-2 text-white hover:text-yellow-300 duration-300">PROJECTS</Link>
              <Link href={"#Contact"} className="py-2 text-white hover:text-yellow-300 duration-300">CONTACT</Link>
            </nav>
          </div>

          {/* Main Navbar Links */}
          <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center text-white">
            <Link href={"/"} className="mr-5 hover:text-yellow-300 duration-300 hover:text-xl hover:border-b-4 hover:border-yellow-300">HOME</Link>
            <Link href={"#about"} className="mr-5 hover:text-yellow-300 duration-300 hover:text-xl hover:border-b-4 hover:border-yellow-300">ABOUT</Link>
            <Link href={"#skills"} className="mr-5 hover:text-yellow-300 duration-300 hover:text-xl hover:border-b-4 hover:border-yellow-300">SKILLS</Link>
            <Link href={"#project"} className="mr-5 hover:text-yellow-300 duration-300 hover:text-xl hover:border-b-4 hover:border-yellow-300">PROJECTS</Link>
            <Link href={"#Contact"} className="mr-5 hover:text-yellow-300 duration-300 hover:text-xl hover:border-b-4 hover:border-yellow-300">CONTACT</Link>
          </nav>

          <Link href="/media/doniaCV.pdf" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center bg-white border-yellow-300 py-1 px-3 border-4 focus:outline-none hover:text-black hover:bg-yellow-300 rounded text-base mt-4 md:mt-0 shadow-lg 
              transform transition-transform duration-300 ease-in-out hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] hover:scale-105">
              Download CV
              <AiOutlineCloudDownload className='ml-2 text-xl' />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
