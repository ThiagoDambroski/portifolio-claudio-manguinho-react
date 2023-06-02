import React, { useState } from 'react';
import Project from './Project';

function ProjectsPage({projectType,projects,isModalOpen,expandedImage,handleImageClick,closeModal}) {


  return (
    <div>
      <h1 className='projet-type'>{projectType}</h1>
      {projects.map((item) =>
        <Project
        image={item.image}
        title={item.title}
        location={item.location}
        description = {item.description}
        topic
        onClick={() => handleImageClick(item.image)}
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
