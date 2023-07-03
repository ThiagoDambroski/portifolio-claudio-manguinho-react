import React, { useState } from 'react';
import Project from './Project';
import { useNavigate } from 'react-router-dom';


function ProjectsPage({projectType,projects,isModalOpen,expandedImage,handleImageClick,closeModal}) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  
  return (
    
    <div>
      <button onClick={goBack} className="back-button"/>
      <h1 className='projet-type'>{projectType}</h1>
      {projects.map((item) =>
        <Project
        id={item.id}
        image={item.image}
        title={item.title}
        location={item.location}
        description = {item.description}
        topic
        handleImageClick={handleImageClick}
        
      />
      )}
      
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
    </div>
  );
}

export default ProjectsPage;
