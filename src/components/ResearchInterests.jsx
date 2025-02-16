import React from 'react'
import { TfiLayoutGrid3} from 'react-icons/tfi'

const ResearchInterests = ({researchInterestsRef}) => {
  return (
    <div className='mx-10 py-16' ref={researchInterestsRef}>
      <h2 className='text-3xl font-light tracking-widest text-gray-700'>RESEARCH INTERESTS</h2>

      <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
        <div className='bg-gray-100 flex flex-col items-center justify-center rounded-md shadow-md border-l-4 border-cyan-500'>
            {/* antenna icon */}
            {/* <div className='bg-cyan-500 p-4 rounded-full top-[-30px] relative'>
                <TfiLayoutGrid3 className='text-white' size={25}/>
            </div> */}
            <h2 className='p-10 text-xl font-semibold text-gray-800'>Antenna Arrays</h2>
        </div>
        <div className='bg-gray-100 flex flex-col items-center justify-center rounded-md shadow-md border-l-4 border-cyan-500'>
            <h2 className='p-10 text-xl font-semibold text-gray-800'>MIMO antennas</h2>
        </div>
        <div className='bg-gray-100 flex flex-col items-center justify-center rounded-md shadow-md border-l-4 border-cyan-500'>
            <h2 className='p-10 text-xl font-semibold text-gray-800'>Metamaterials & Metasurfaces</h2>
        </div>
      </div>
    </div>
  )
}

export default ResearchInterests
