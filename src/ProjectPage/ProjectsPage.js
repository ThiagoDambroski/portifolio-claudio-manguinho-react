import React, { useState } from 'react';
import Project from './Project';
import projeto1Image from '../assets/images/projeto1.png';

function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);

  const projects = [
    {
      id: 1,
      image: projeto1Image,
      title: 'MASTER PLAN NORTHVILLE',
      location: 'Goiana - PE',
    },
  ];

  const handleImageClick = (image) => {
    setExpandedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setExpandedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Project
        image={projects[0].image}
        title={projects[0].title}
        location={projects[0].location}
        onClick={() => handleImageClick(projects[0].image)}
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
    </div>
  );
}

export default ProjectsPage;
