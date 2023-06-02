import React from 'react';
import './Projects.css';

function Project({ image, title, location,description, isExpanded, onClick }) {
  return (
    <div className={`project-content ${isExpanded ? 'project-image-large' : ''}`} >
      <img src={image[0]} alt="Project" onClick={onClick}/>
      <div className="project-description">
        <h1>{title}</h1>
        <span className='project-description-desc'>{description}</span>
        <p>Localidade: {location}</p>
      </div>
    </div>
  );
}

export default Project;
