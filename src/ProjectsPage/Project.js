import React from 'react';
import './Projects.css';

function Project({ image, title, location, isExpanded, onClick }) {
  return (
    <div className={`project-content ${isExpanded ? 'project-image-large' : ''}`} onClick={onClick}>
      <img src={image} alt="Project" />
      <div className="project-description">
        <h1>{title}</h1>
        <p>Localidade: {location}</p>
      </div>
    </div>
  );
}

export default Project;
