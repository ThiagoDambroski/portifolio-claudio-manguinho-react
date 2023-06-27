import React, { useState } from 'react'
import './BigProject.css'


function BigProject({image,title,location,description,handleImageClick}) {

  const projetosImages = image;
  const [activeBigProject, setActiveBigProject] = useState(projetosImages[0]);
  
  const handleNextProject = () => {
    const currentIndex = projetosImages.indexOf(activeBigProject);
    const nextIndex = currentIndex === projetosImages.length - 1 ? currentIndex : currentIndex + 1
  
    setActiveBigProject(projetosImages[nextIndex]);
  };
  const handlePreviousProject = () => {
    const currentIndex = projetosImages.indexOf(activeBigProject);
    const previousIndex = currentIndex === 0 ? currentIndex : currentIndex - 1
   
  
    setActiveBigProject(projetosImages[previousIndex]);
  };
  
  return (
    <div className='big-project'>
      <div className= 'page-big'>
        <button className='carousel-button-left' onClick={handlePreviousProject}/>
        <img src = {activeBigProject} className='big-image' onClick={() => handleImageClick(activeBigProject)}></img>
        <button className='carousel-button' onClick={handleNextProject}/>

      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default BigProject