import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
import { SiVercel, SiLinktree } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          {/* Logo and Title */}
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-400">
            <Image
              src={require("../../../public/media/EYE.png")}
              alt="logo"
              width={100}
              height={100}
              className="w-[70px] rounded-full border-yellow-300 border-[3px]"
            />
            <span className="ml-3 text-xl">NINETEEN TECH</span>
          </a>

          {/* Copyright Text */}
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
            © 2024 NINETEEN TECH
          </p>

          {/* Social Media Icons */}
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
            <Link
              target="_blank"
              href={"https://github.com/DoniaBatool?tab=repositories"}
              className="text-gray-500"
            >
              <FaGithub className="text-3xl hover:text-yellow-300 hover:text-[40px] duration-300" />
            </Link>

            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/dounia-batool-619691254/"}
              className="text-gray-500"
            >
              <FaLinkedin className="text-3xl hover:text-yellow-300 hover:text-[40px] duration-300" />
            </Link>

            <Link
              target="_blank"
              href={"https://vercel.com/donia-batools-projects"}
              className="text-gray-500"
            >
              <SiVercel className="text-3xl hover:text-yellow-300 hover:text-[40px] duration-300" />
            </Link>

            <Link
              target="_blank"
              href={"https://linktr.ee/doniabatool"}
              className="text-gray-500"
            >
              <SiLinktree className="text-3xl hover:text-yellow-300 hover:text-[40px] duration-300" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
