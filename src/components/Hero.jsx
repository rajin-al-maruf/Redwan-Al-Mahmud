import React from 'react'
import { FiDownload } from 'react-icons/fi'
import heroImg from '../assets/heroImg2.jpg'

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img className="w-full h-full object-cover" src={heroImg} alt="Not found" />

      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-10 bg-black/30">
        <h1 className="text-5xl font-bold">Hello! <br /> I am Redwan Al Mahmud</h1>
        <h2 className="text-2xl mt-6">RESEARCH ASSISTANT</h2>
        <p className="mt-4 text-xl tracking-wider">
          Passionate research assistant with a strong 
          background in Antenna Design.
        </p>
        <button className="flex items-center gap-2 border border-white mt-6 px-6 py-4 tracking-widest cursor-pointer">
          DOWNLOAD CV
          <FiDownload />
        </button>
      </div>
    </div>
  )
}

export default Hero

