import React from 'react'
import './ContentPage2.css'


function ContentPage2({activeProject,handlePreviousProject,handleNextProject}) {
  return (
    <div className='page'>
        <button className='carousel-button-left' onClick={handlePreviousProject}/>
        <div className = 'description'>
            <h1>{activeProject.title}</h1>
            <p>{activeProject.description}</p>
            <div className='button-container'>
                <button >VEJA MAIS</button>
            </div>
            
        </div>
        <div className = 'image'>
            <img src={activeProject.image}/>
        </div>
        
        <button className='carousel-button' onClick={handleNextProject}/>
        
    </div>
  )
}

export default ContentPage2