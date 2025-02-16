import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Contact = ({contactRef}) => {
  return (
    <div className='mx-10 mb-20 py-16' ref={contactRef}>
      <h2 className='text-3xl font-light tracking-widest text-gray-700'>GET IN TOUCH</h2>
    
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 mt-20'>

        <div className='flex flex-col gap-8 col-span-2'>
            <div className='flex gap-4 items-center'>
                <div className='bg-gray-200 p-6 rounded-xl'>
                    <MdOutlineEmail size={25} className='text-cyan-500'/>
                </div>
                <p className='text-xl font-light'>redwan33-1145@diu.edu.bd</p>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='bg-gray-200 p-6 rounded-xl'>
                    <FaPhoneAlt size={25} className='text-cyan-500'/>
                </div>
                <p className='text-xl font-light'>+880 1818201733</p>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='bg-gray-200 p-6 rounded-xl'>
                    <FaMapMarkerAlt size={25} className='text-cyan-500'/>
                </div>
                <p className='text-xl font-light'>Dhaka, Bangladesh</p>
            </div>
            
        </div>
        
        <form className='flex flex-col gap-8 col-span-3'>
            <input 
                className='border-2 border-gray-300 p-4 focus:outline-none'
                type="text" 
                placeholder='Name'
            />
            <input 
                className='border-2 border-gray-300 p-4 focus:outline-none'
                type="email" 
                name="email" 
                placeholder='Email'
            />
            <input 
                className='border-2 border-gray-300 p-4 focus:outline-none'
                type="text" 
                name='subject' 
                placeholder='Subject'
            />
            <textarea
                className='border-2 border-gray-300 p-4 focus:outline-none'
                placeholder='Message' 
                name="" 
            ></textarea>

            <button
                className='bg-cyan-500 hover:bg-cyan-600 text-white p-2 w-40 rounded-full cursor-pointer'
            >
                Send message
            </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
