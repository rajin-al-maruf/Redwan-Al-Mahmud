import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'
import { TbSettingsCog } from 'react-icons/tb'
import { VscGraphLine } from 'react-icons/vsc'

const Skills = ({skillsRef}) => {
  return (
    <div className='mx-10 py-16' ref={skillsRef}>
      <h2 className='text-3xl font-light tracking-widest text-gray-700'>SKILLS</h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20'>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h2 className='flex gap-2 items-center text-xl font-semibold text-gray-800'>
                <TbSettingsCog  size={25}/>
                Engineering
            </h2>
            <p className='text-lg text-gray-600 mt-1'>CST • ADS</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h2 className='flex gap-2 items-center text-xl font-semibold text-gray-800'>
                <MdDesignServices  size={25}/>
                Designing and editing
            </h2>
            <p className='text-lg text-gray-600 mt-1'>Adobe Illustrator • Adobe Photoshop • Visio</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h2 className='flex gap-2 items-center text-xl font-semibold text-gray-800'>
                <VscGraphLine  size={25}/>
                Plotting
            </h2>
            <p className='text-lg text-gray-600 mt-1'>Microsoft Excel • Sigma Plot</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h2 className='flex gap-2 items-center text-xl font-semibold text-gray-800'>
                <FaLaptopCode size={25}/>
                Programming language
            </h2>
            <p className='text-lg text-gray-600 mt-1'>MATLAB • LaTeX</p>
        </div>
      </div>

    </div>
  )
}

export default Skills
