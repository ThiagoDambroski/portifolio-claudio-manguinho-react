import React, { useState } from 'react';
import Project from './Project';

function ProjectsPage({projects,isModalOpen,expandedImage,handleImageClick,closeModal}) {

  return (
    <div>
      {projects.map((item) =>
        <Project
        image={item.image}
        title={item.title}
        location={item.location}
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
