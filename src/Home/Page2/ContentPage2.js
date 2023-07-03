import React from 'react'
import './ContentPage2.css'
import { NavLink } from 'react-router-dom'


function ContentPage2({activeProject,handlePreviousProject,handleNextProject}) {
  return (
    <div className='page'>
      <button className='carousel-button-left-page2' onClick={handlePreviousProject}/>
        <div className = 'description'>
            <h1>{activeProject.title}</h1>
            <p>{activeProject.description}</p>
            <div className='button-container'>
            {activeProject.image.length > 1 ? 
              (
                <NavLink to={"/bigProjetosid="+ activeProject.id}>
                <button className='button-veja-mais'>VEJA MAIS</button>
                </NavLink>
              )
              :
              (
                <NavLink to={"/projetos"}>
                <button className='button-veja-mais'>VEJA MAIS</button>
                </NavLink>
              )
            }
                
            </div>
            
        </div>
        <div className = 'image'>
            <img src={activeProject.image[0]}/>
        </div>

        
      <button className='carousel-button-page2' onClick={handleNextProject}/>
        
    </div>
  )
}

export default ContentPage2