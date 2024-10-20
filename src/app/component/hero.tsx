"use client"
import Image from "next/image"
import React from "react"
import Link from "next/link";
import AudioComponent from "./audioComponent";
const Hero=()=>{

    return (
        
           <section className="text-gray-600 body-font bg-fixed bg-cover
            bg-center custom-image">
              
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
    md:text-left mb-16 md:mb-0 items-center text-center">
     <AudioComponent/>

      <div className="w-[100px] h-[2px] bg-yellow-300"></div>
      <p className="mb-8 leading-relaxed text-white text-lg">
      Proficient Web Developer with extensive experience in WordPress, HTML, CSS, and 
      modern JavaScript frameworks, including React and Next.js. Skilled in TypeScript for 
      building robust and scalable applications.
      Adept at creating responsive, user-friendly web interfaces and optimizing 
      site performance for an enhanced user experience. 
      Passionate about continuous learning and staying up-to-date with the latest 
      industry trends.
      Proficient in Microsoft Office Suite (Word, Excel, PowerPoint), with strong skills 
      in document creation and presentation design.
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-black bg-white hover:bg-yellow-300 
        border-4 border-yellow-300 py-2 px-6 focus:outline-none rounded text-lg shadow-lg 
        transform transition-transform duration-300 ease-in-out 
      hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] hover:scale-105">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 cursor-pointer">
  <Link href="https://www.linkedin.com/in/nineteen-tech-619691254" target="_blank" rel="noopener noreferrer">
    <Image
      className="object-cover object-center mx-auto w-[15rem] border-8 border-yellow-300"
      alt="hero"
      width={800}
      height={800}
      src="/media/qrlinkedin.png"
    />
  </Link>
</div>
  </div>
</section>
 
           
    )
}
export default Hero 