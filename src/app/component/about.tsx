import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about"><section className="text-white body-font bg-fixed bg-cover
            bg-center custom-image">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded-full mx-auto 
          w-[350px] h-[350px] border-8 border-yellow-300"
          alt="hero"
          width={400}
          height={400}
          src={require('../../../public/media/doniaPic.jpeg')}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 
        font-medium text-yellow-300 border-b-4 border-yellow-300">
         About Me
        </h1>
        <p className="mb-8 leading-relaxed">
        * Currently enrolled in a prestigious Certified Generative AI and Cloud Computing course by 
        the President of Pakistan Dr.Arif Alvi (PIAIC) headed by Sir Zia Khan, who have 40 years 
        of experience in the field of IT.<br/><br/>
        * I am honoured to be a part of Governor Initiative for Artificial Intelligence
        and Cloud Computing (GIAIC) by the Governor of Sindh Mr.Kamran Khan Tessori.
        Selected from a pool of 508,000 students after a competitive exam, I am privileged
        to learn under the best team of instructors at the Governor House.<br/><br/>
        * This opportunity allows me to strengthen my skills in these cutting-edge 
        technologies and stay at the forefront of industry developments.
        </p>
        <div className="flex justify-center">
            <Link href="/media/doniaCV.pdf" target="_blank" rel="noopener noreferrer">
          <button className="inline-flex text-black 
          py-2 px-6  bg-white border-yellow-300 border-4 focus:outline-none
           hover:text-black hover:bg-yellow-300 rounded text-base mt-4 md:mt-0 shadow-lg 
            transform transition-transform duration-300 ease-in-out 
             hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] hover:scale-105">
          
            View CV
          </button>
          </Link>
          <button className="ml-4 inline-flex  bg-white text-black
    border-yellow-300  border-4 focus:outline-none hover:text-black
     hover:bg-yellow-300 mt-4 md:mt-0 shadow-lg 
     transform transition-transform duration-300 ease-in-out 
      hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]
       hover:scale-105 py-2 px-6  rounded ">
          <Link href="https://www.youtube.com/watch?v=4Hi79EcG-4o">
            Interview
            </Link>
          </button>
          
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default About