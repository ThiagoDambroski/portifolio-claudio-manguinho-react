import React from 'react';
import Type from './Type';
import TypeBig from './TypeBig';
import { useNavigate } from 'react-router-dom';

function ProjectTypes({ projects }) {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };
  return (
    <>
    <button onClick={goBack} className="back-button"/>
    <div className='type-box'>
      <div className='row'>
        <Type
          image={projects[1].image}
          description={"Arquitetura Residencial"}
          path='/projetosResidencial'
        />
        <Type
          image={projects[14].image}
          description={"Arquitetura Comercial"}
          path='/projetosComercial'
          

        />
      </div>
      <div className='row'>
        <Type
          image={projects[8].image}
          description={"Institucional"}
          path='/projetosInstitucional'

        />
        <Type
          image={projects[10].image}
          description={"Concursos"}
          path='/projetosConcurso'

        />
      
      </div>
    </div>
    <TypeBig
      image={projects[27].image}
      description={"Todos os projetos"}
      path='/projetos'
    />
    </>
    
  );
}

export default ProjectTypes;
