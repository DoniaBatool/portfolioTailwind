'use client'
import React from 'react';
import { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
const AudioComponent:React.FC = () => {
useEffect(()=>{
    const myAudio =new 
    Audio('/media/ElevenLabs_2024-08-29T16_46_26_Laura_pre_s50_sb75_se0_b_m2.mp3');
    myAudio.play();
    myAudio.autoplay

},[])
  return (

    <div>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-300">
        This is NINETEEN TECH
        <br className="hidden lg:inline-block"/>
        <Typewriter
  options={{
    strings: ['founded by DONIA BATOOL','Name of Sustainable Development'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
    </div>
  )
}

export default AudioComponent