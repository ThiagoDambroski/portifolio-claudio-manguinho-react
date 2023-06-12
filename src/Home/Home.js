import React from 'react'
import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'
import AboutMe from './AboutMe/AboutMe'
import DuvidasFrequentes from './FQA/DuvidasFrequentes'

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
        <AboutMe/>
        <DuvidasFrequentes/>
    </>
  )
}

export default Home