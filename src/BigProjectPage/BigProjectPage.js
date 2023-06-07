import React from 'react';
import BigProject from './BigProject';


function BigProjectPage({projects,isModalOpen,expandedImage,handleImageClick,closeModal}) {
    


  return (
    <>
    <BigProject
        image = {projects.image}
        title =  {projects.title}
        description={projects.description}
        handleImageClick = {handleImageClick}
    />

    {isModalOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img src={expandedImage} alt="Project" className="expanded-image" />
        </div>
      </div>
    )}
    </>
  )
}

export default BigProjectPage