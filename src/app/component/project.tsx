import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div className="bg-center bg-fixed bg-cover custom-image" id="project">
      <section className="text-gray-600 body-font pb-24">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-300">
              <span className="border-b-4 border-yellow-300">My Projects</span>
            </h1>
          </div>
          <div className="flex flex-wrap -m-5">
            {/* Project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer pt-20">
              <div className="relative pb-24">
                <Image
                  alt="gallery"
                  className="absolute inset-0  w-full h-[395px] object-center"
                  src="/media/Air_ticket.png"
                  height={200}
                  width={400}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    ONLINE TICKETING PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    BOOK FLIGHTS ONLINE
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is an online ticketing project, made using Typescript for Command Line Interface.
                  </p>
                  <Link target="_blank" href="https://github.com/DoniaBatool/TicketingSystem_DoniaBatool">
                    <p className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer pt-20">
              <div className="relative pb-24">
                <Image
                  alt="gallery"
                  className="absolute inset-0  w-full h-[395px] object-center"
                  src="/media/Test your typing speed.png"
                  height={200}
                  width={400}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE TYPING SPEED PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WORDS PER MINUTE
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    The Typing Speed Project tests your Typing Speed and counts the words entered per minute.
                  </p>
                  <Link target="_blank" href="https://github.com/DoniaBatool/DoniaBatool_TypingSpeedTest">
                    <p className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer pt-20">
              <div className="relative pb-24">
                <Image
                  alt="gallery"
                  className="absolute inset-0  w-full h-[395px] object-center"
                  src="/media/STUDENT MANAGEMENT SYSTEM.png"
                  width={400}
                  height={200}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    STUDENT MANAGEMENT PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    ONLINE STUDENT PORTAL
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This system allows for efficient management of student data, including enrollment, courses, and more. It leverages TypeScript for strong typing and code readability.
                  </p>
                  <Link target="_blank" href="https://github.com/DoniaBatool/DoniaBatool-Student_Management_System">
                    <p className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer pt-20">
              <div className="relative pb-24">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-[395px] object-center"
                  src="/media/Bank.png"
                  height={200}
                  width={400}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    ONLINE BANKING SYSTEM PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    BANKING ON THE GO
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This project allows users to perform basic banking operations like deposits, withdrawals, and loan applications.
                  </p>
                  <Link target="_blank" href="https://github.com/DoniaBatool/DoniaBatool-Bank_System">
                    <p className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer pt-20">
              <div className="relative pb-24">
                <Image
                  alt="gallery"
                  className="absolute inset-0  w-full h-[395px] object-center"
                  src="/media/adventure Game.png"
                  height={200}
                  width={400}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE ADVENTURE GAME PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WARFIELD
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    In Warfield, you take control of a seasoned explorer venturing into a world shrouded in mystery.
                     Navigate through perilous environments, make tough decisions, and uncover secrets.
                  </p>
                  <Link target="_blank" href="https://github.com/DoniaBatool/DoniaBatool-Adventure_Game">
                    <p className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer pt-20">
              <div className="relative pb-24">
                <Image
                  alt="gallery"
                  className="absolute inset-0  w-full h-[395px] object-center"
                  src="/media/hotel portal.png"
                  width={400}
                  height={200}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE HOTEL PORTAL PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    PLAN YOUR STAY
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This hotel portal helps users book rooms, check hotel facilities, and make reservations online, 
                    improving the overall customer experience.
                  </p>
                  <Link target="_blank" href="https://github.com/DoniaBatool/DoniaBatool-Hotel_Management_System">
                    <p className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
