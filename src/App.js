import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './MenuBar/MenuBar';
import Home from './Home/Home';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import BigProjectPage from './BigProjectPage/BigProjectPage';
import ProjectTypes from './ProjectsPage/ProjectTypes';
import { projectData } from './ProjectData';

const App = () => {

  const [activeProject, setActiveProject] = useState(projectData[0])

  const handleNextProject = () => {
    const currentIndex = activeProject.id - 1
    const nextIndex = currentIndex === projectData.length - 1 ? 0 : currentIndex + 1
    setActiveProject(projectData[nextIndex])
  }

  const handlePreviousProject = () => {
    const currentIndex = activeProject.id - 1
    const previousIndex = currentIndex === 0 ? projectData.length - 1 : currentIndex - 1
    setActiveProject(projectData[previousIndex])
  }
  
  //Projects page props
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);


  const handleImageClick = (image) => {
    setExpandedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setExpandedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <MenuBar />
      <Routes>
        <Route exact path="/" element={

          <Home
            key={activeProject.id}
            activeProject={activeProject}
            handlePreviousProject={handlePreviousProject}
            handleNextProject={handleNextProject}   
          />
        
        } />
        <Route path="/projetos" element={
          <ProjectsPage
            projects = {projectData}
            isModalOpen={isModalOpen}
            expandedImage={expandedImage}
            handleImageClick={handleImageClick}
            closeModal={closeModal}
            />
        } />
        <Route path= "/bigProjetos" element={

          <BigProjectPage
            projects={projectData}
          />
        }  />
        <Route path='/projectType' element={
            <ProjectTypes
              projects={projectData}
            />

        }

        />
      </Routes>
      
    </>
  );
};

export default App;
