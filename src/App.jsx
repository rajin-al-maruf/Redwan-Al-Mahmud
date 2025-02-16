import Sidebar from "./components/Sidebar"
import Page from "./Page/Page"
import { useRef } from "react"


function App() {

      const homeRef = useRef(null)
      const educationRef = useRef(null)
      const researchInterestsRef = useRef(null)
      const publicationsRef = useRef(null)
      const skillsRef = useRef(null)
      const awardsRef = useRef(null)
      const contactRef = useRef(null)
  

  return (
    <div className="flex">
      <div className='sticky top-0 bg-gray-300 w-[0%] md:w-[25%] hidden md:block h-screen'>
        <Sidebar 
          homeRef={homeRef}
          educationRef={educationRef}
          researchInterestsRef={researchInterestsRef}
          publicationsRef={publicationsRef}
          skillsRef={skillsRef}
          awardsRef={awardsRef}
          contactRef={contactRef}
        />
      </div>
      <div className="w-full md:w-[75%]">
        <Page 
          homeRef={homeRef}
          educationRef={educationRef}
          researchInterestsRef={researchInterestsRef}
          publicationsRef={publicationsRef}
          skillsRef={skillsRef}
          awardsRef={awardsRef}
          contactRef={contactRef}
        />
      </div>
      
    </div>
  )
}

export default App
