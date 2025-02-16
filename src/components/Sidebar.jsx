import React, { useState } from 'react'
import profilePic from '../assets/profilePic.png'
import { FaGoogleScholar, FaOrcid } from 'react-icons/fa6'
import { SiResearchgate } from 'react-icons/si'

const Sidebar = ({homeRef, educationRef, researchInterestsRef, publicationsRef, skillsRef, awardsRef, contactRef}) => {

    const [active, setActive] = useState('')

    const handleScroll = (section, ref) => {
        setActive(section)
        ref.current?.scrollIntoView({ behavior: 'smooth' , block: 'start'})
    }
  return (
    <div>
        <div className='flex flex-col items-center py-16'>
            <div className='flex flex-col items-center'>
                <img className='rounded-full w-40 lg:w-52' src={profilePic} alt="profile pic" />

                <div className='flex flex-col items-center mt-8'>
                    <h1 className='text-xl lg:text-2xl font-semibold'>Redwan Al Mahmud</h1>
                    <h2 className='text-sm lg:text-base mt-2 text-cyan-500 tracking-wide'>RESEARCH ASSISTANT</h2>
                </div>
            </div>

            <ul className='flex flex-col gap-y-4 items-center mt-10 text-gray-600 tracking-wider'>
                <li 
                    onClick={() => handleScroll('home', homeRef)}
                    className={`cursor-pointer ${active === 'home' ? 'text-cyan-500' : null } hover:text-cyan-500 transition duration-300 hover:border-b text-sm lg:text-base`}>HOME</li>
                <li 
                    onClick={() => handleScroll('education', educationRef)}
                    className={`cursor-pointer ${active === 'education' ? 'text-cyan-500' : null } hover:text-cyan-500 transition duration-300 hover:border-b text-sm lg:text-base`}>EDUCATION</li>
                <li 
                    onClick={() => handleScroll('researchInterests', researchInterestsRef)}
                    className={`cursor-pointer ${active === 'researchInterests' ? 'text-cyan-500' : null } hover:text-cyan-500 transition duration-300 hover:border-b text-sm lg:text-base`}>RESEARCH INTERESTS</li>
                <li 
                    onClick={() => handleScroll('publications', publicationsRef)}
                    className={`cursor-pointer ${active === 'publications' ? 'text-cyan-500' : null } hover:text-cyan-500 transition duration-300 hover:border-b text-sm lg:text-base`}>PUBLICATIONS</li>
                <li 
                    onClick={() => handleScroll('skills', skillsRef)}
                    className={`cursor-pointer ${active === 'skills' ? 'text-cyan-500' : null } hover:text-cyan-500 transition duration-300 hover:border-b text-sm lg:text-base`}>SKILLS</li>
                <li 
                    onClick={() => handleScroll('awards', awardsRef)}
                    className={`cursor-pointer ${active === 'awards' ? 'text-cyan-500' : null } hover:text-cyan-500 transition duration-300 hover:border-b text-sm lg:text-base`}>AWARDS</li>
                {/* <li className='cursor-pointer hover:text-cyan-500 transition duration-300 hover:border-b text-sm lg:text-base'>ABOUT</li> */}
                <li 
                    onClick={() => handleScroll('contact', contactRef)}
                    className={`cursor-pointer ${active === 'contact' ? 'text-cyan-500' : null } hover:text-cyan-500 transition duration-300 hover:border-b text-sm lg:text-base`}>CONTACT</li>
            </ul>

            <div className='flex gap-6 mt-10'>
                <a href="https://scholar.google.com/citations?user=6594j8IAAAAJ&hl=en" className='text-gray-500 hover:text-cyan-500' target='_blank'>
                    <FaGoogleScholar size={25}/>
                </a>
                <a href="https://www.researchgate.net/profile/Redwan-Ananta" className='text-gray-500 hover:text-cyan-500' target='_blank'>
                    <SiResearchgate size={25}/>
                </a>
                <a href="https://orcid.org/my-orcid?orcid=0009-0000-1572-5555" className='text-gray-500 hover:text-cyan-500' target='_blank'>
                    <FaOrcid size={25}/>
                </a>
            </div>


            <div className='py-4 mt-6 text-gray-500'>
                © 2025 build by <a href="https://github.com/rajin-al-maruf">Rajin Al-Maruf</a>
            </div>
        </div>

        {/* Footer */}
    </div>
  )
}

export default Sidebar
