import React from 'react';
import './Projects.css';
import { NavLink } from 'react-router-dom';

function Project({ id,image, title, location,description, isExpanded, handleImageClick }) {
  return (
    <div className={`project-content ${isExpanded ? 'project-image-large' : ''}`} >
      {image.length > 1 ?                
        (<NavLink to={"/bigProjetosid="+ id} className="custom-link">
          <img src={image[0]} className='project-image-custom-link' alt="Project"/>
        </NavLink>)
        :
        (<img src={image[0]} alt="Project" className='project-image' onClick={() => handleImageClick(image[0])}/>)
      }
      <div className="project-description">
        <h1>{title}</h1>
        <span className='project-description-desc'>{description}</span>
        <p>Localidade: {location}</p>
      </div>
    </div>
  );
}

export default Project;
