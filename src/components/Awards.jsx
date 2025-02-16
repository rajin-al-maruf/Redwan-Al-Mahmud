import React from 'react'
import certificate2023 from '../assets/certificate2023.jpg'
import certificate2024 from '../assets/certificate2024.jpg'

const Awards = ({awardsRef}) => {
  return (
    <div className='mx-10 py-16' ref={awardsRef}>
      <h2 className='text-3xl font-light tracking-widest text-gray-700'>AWARDS</h2>

      <div className='mt-20 grid grid-cols-1 lg:grid-cols-1 gap-6'>
        
        <div className='flex flex-col lg:flex-row gap-6 bg-gray-100 p-6 rounded-lg shadow-md border-l-4 border-amber-500 cursor-pointer'>
          <img 
            className='w-40 h-40 transition-all duration-500 ease-in-out hover:w-[600px] hover:h-[600px] object-cover rounded-lg'
            src={certificate2023} 
            alt="" 
          />
          <div>
          <h2 className='text-xl font-semibold text-gray-800'>🏅 Gold Medal - iNVENTX Invention Exhibition 2023</h2>
          <p className='text-lg text-gray-600 mt-1'>Awarded the prestigious Gold Medal for an exceptional poster presentation on a research project at the iNVENTX Invention Exhibition.</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-6 bg-gray-100 p-6 rounded-lg shadow-md border-r-4 border-amber-500 cursor-pointer'>
          <div>
            <h2 className='text-xl font-semibold text-gray-800'>🏅 Gold Medal - iNVENTX Invention Exhibition 2024</h2>
            <p className='text-lg text-gray-600 mt-1'>Awarded the prestigious Gold Medal for an exceptional poster presentation on a research project at the iNVENTX Invention Exhibition.</p>
          </div>
          <img 
            className='w-40 h-40 transition-all duration-500 ease-in-out hover:w-[600px] hover:h-[600px] object-cover rounded-lg'
            src={certificate2024} 
            alt="" 
          />
        </div>
      
      </div>
    </div>
  )
}

export default Awards
