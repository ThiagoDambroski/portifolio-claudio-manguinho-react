import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './MenuBar/MenuBar';
import Home from './Home/Home';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import BigProjectPage from './BigProjectPage/BigProjectPage';
import ProjectTypes from './ProjectsPage/ProjectTypes';
import { projectData } from './ProjectData';
import ContactFooter from './ContactFooter/ContactFooter';

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
            projectType = 'Todos os Projetos'
            projects = {projectData}
            isModalOpen={isModalOpen}
            expandedImage={expandedImage}
            handleImageClick={handleImageClick}
            closeModal={closeModal}
            />
        } />
        <Route path="/projetosResidencial" element={
          <ProjectsPage
            projectType = 'Arquitetura Residencial'
            projects = {projectData.filter((item) => item.topic === 1)}
            isModalOpen={isModalOpen}
            expandedImage={expandedImage}
            handleImageClick={handleImageClick}
            closeModal={closeModal}
            />
        } />
        <Route path="/projetosInstitucional" element={
          <ProjectsPage
            projectType = 'Institucional'
            projects = {projectData.filter((item) => item.topic === 2)}
            isModalOpen={isModalOpen}
            expandedImage={expandedImage}
            handleImageClick={handleImageClick}
            closeModal={closeModal}
            />
        } />
        <Route path="/projetosConcurso" element={
          <ProjectsPage
            projectType = 'Concursos'
            projects = {projectData.filter((item) => item.topic === 3)}
            isModalOpen={isModalOpen}
            expandedImage={expandedImage}
            handleImageClick={handleImageClick}
            closeModal={closeModal}
            />
        } />
        <Route path="/projetosComercial" element={
          <ProjectsPage
            projectType = 'Arquitetura Comercial'
            projects = {projectData.filter((item) => item.topic === 4)}
            isModalOpen={isModalOpen}
            expandedImage={expandedImage}
            handleImageClick={handleImageClick}
            closeModal={closeModal}
            />
        } />
        <Route path= "/bigProjetosid=4" element={

          <BigProjectPage
            projects={projectData[3]}
            isModalOpen={isModalOpen}
            expandedImage={expandedImage}
            handleImageClick={handleImageClick}
            closeModal={closeModal}
          />
        }  />
        <Route path= "/bigProjetosid=5" element={

          <BigProjectPage
            projects={projectData[4]}
            isModalOpen={isModalOpen}
            expandedImage={expandedImage}
            handleImageClick={handleImageClick}
            closeModal={closeModal}
          />
        }  />
        <Route path= "/bigProjetosid=5" element={

          <BigProjectPage
            projects={projectData[4]}
            isModalOpen={isModalOpen}
            expandedImage={expandedImage}
            handleImageClick={handleImageClick}
            closeModal={closeModal}
          />
          }  />
        
        <Route path='/projectType' element={
            <ProjectTypes
              projects={projectData}
            />

        }

        />
      </Routes>
      <ContactFooter/>
      
    </>
  );
};

export default App;
