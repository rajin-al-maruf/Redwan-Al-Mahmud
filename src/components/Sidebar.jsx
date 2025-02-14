import React, { useState } from 'react'
import profilePic from '../assets/profilePic.png'
const Sidebar = () => {
  return (
    <div>
        <div className='flex flex-col items-center py-16'>
            <div className='flex flex-col items-center'>
                <img className='rounded-full w-52' src={profilePic} alt="profile pic" />

                <div className='flex flex-col items-center mt-10'>
                    <h1 className='text-2xl font-semibold'>Redwan Al Mahmud</h1>
                    <h2 className='text-base mt-2 text-cyan-500 tracking-wide'>RESEARCH ASSISTANT</h2>
                </div>
            </div>

            <ul className='flex flex-col gap-y-4 items-center mt-10 text-gray-600 tracking-wider'>
                <li className='cursor-pointer hover:text-cyan-500 transition duration-300 hover:border-b'>HOME</li>
                <li className='cursor-pointer hover:text-cyan-500 transition duration-300 hover:border-b'>PUBLICATIONS</li>
                <li className='cursor-pointer hover:text-cyan-500 transition duration-300 hover:border-b'>SKILLS</li>
                <li className='cursor-pointer hover:text-cyan-500 transition duration-300 hover:border-b'>ABOUT</li>
                <li className='cursor-pointer hover:text-cyan-500 transition duration-300 hover:border-b'>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
