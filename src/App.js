import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './MenuBar/MenuBar';
import Page1 from './Home/Page1/Page1';
import Page2 from './Home/Page2/Page2';
import Home from './Home/Home';
import projeto1Image from './assets/images/projeto1.png'
import projeto2Image from './assets/images/projeto2.png'
import ProjectsPage from './ProjectPage/ProjectsPage';

const App = () => {

  const projectData = [
    {
      id: 1,
      title: 'MASTER PLAN NORTHVILLE',
      description: 'MASTER PLAN NORTHVILLE em Goiana PE',
      image: projeto1Image
    },
    {
      id: 2,
      title: 'FAZENDA MODELO',
      description: 'FAZENDA MODELO em caruaru',
      image: projeto2Image
    }
  ]

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

  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={

          <Home
            key={activeProject.id}
            activeProject={activeProject}
            handlePreviousProject={handlePreviousProject}
            handleNextProject={handleNextProject}   
          />
        
        } />
        <Route path="/projetos" element={<ProjectsPage />} />
      </Routes>
      
    </Router>
  );
};

export default App;
