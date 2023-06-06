import React from 'react'
import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'
import AboutMe from './AboutMe/AboutMe'

function Home({activeProject,handleNextProject,handlePreviousProject}) {
  return (
    <>
        <Page1/>
        <Page2
          key={activeProject.id}
          activeProject={activeProject}
          handlePreviousProject={handlePreviousProject}
          handleNextProject={handleNextProject}
        />
        <AboutMe
          
        />
    </>
  )
}

export default Home