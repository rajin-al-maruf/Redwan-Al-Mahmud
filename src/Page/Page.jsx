import React from 'react'
import Hero from '../components/Hero'
import Publications from '../components/Publications'
import About from '../components/About'
import Education from '../components/Education'
import ResearchInterests from '../components/ResearchInterests'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Awards from '../components/Awards'

const Page = ({homeRef, educationRef, researchInterestsRef, publicationsRef, skillsRef, awardsRef, contactRef}) => {
  return (
    <div className='flex flex-col gap-20'>
      <Hero homeRef={homeRef}/>
      <Education educationRef={educationRef}/>
      <ResearchInterests researchInterestsRef={researchInterestsRef}/>
      <Publications publicationsRef={publicationsRef}/>
      <Skills skillsRef={skillsRef}/>
      <Awards awardsRef={awardsRef}/>
      {/* <About /> */}
      <Contact contactRef={contactRef}/>
    </div>
  )
}

export default Page
