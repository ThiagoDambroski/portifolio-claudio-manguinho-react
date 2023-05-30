import React from 'react'
import ContentPage2 from './ContentPage2'


const Page2 = ({activeProject,handleNextProject,handlePreviousProject}) => {
  return (
    <div >
     <ContentPage2
      activeProject = {activeProject}
      handleNextProject={handleNextProject}
      handlePreviousProject={handlePreviousProject}

     />
     
    </div>
  )
}

export default Page2