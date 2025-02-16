import React from 'react'
import { FiDownload } from 'react-icons/fi'
import heroImg from '../assets/heroImg2.jpg'
import {motion} from 'framer-motion'

const Hero = ({homeRef}) => {
  return (
    <div className="relative w-full h-screen" ref={homeRef}>
      <img className="w-full h-full object-cover" src={heroImg} alt="Not found" />

      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-10 bg-black/30">
        <motion.h1
          initial={{y: 100, opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: 2, ease: 'easeInOut'}}
          className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Hello! <br /> I am Redwan Al Mahmud
        </motion.h1>
        <motion.h2 
          initial={{y: 200, opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: 2, ease: 'easeInOut', delay: 0.2}}
          className="text-xl mt-6 md:text-2xl lg:text-3xl tracking-wider">
            RESEARCH ASSISTANT
        </motion.h2>
        <motion.p 
          initial={{y: 200, opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: 2, ease: 'easeInOut', delay: 0.4}}
          className="mt-4 text-base md:text-xl lg:text-2xl tracking-wider">
            Passionate research assistant with a strong 
            background in Antenna Design.
        </motion.p>
        <motion.button 
          initial={{y: 200, opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: 2, ease: 'easeInOut', delay: 0.6}}
          className="flex items-center gap-2 border border-white mt-6 px-6 py-4 tracking-widest cursor-pointer text-sm md:text-base">  
            DOWNLOAD CV
          <FiDownload />
        </motion.button>
      </div>
    </div>
  )
}

export default Hero

