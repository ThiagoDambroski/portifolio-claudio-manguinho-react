import React from 'react';
import Type from './Type';
import TypeBig from './TypeBig';


function ProjectTypes({ projects }) {
  return (
    <>
    <div className='type-box'>
      <div className='row'>
        <Type
          image={projects[27].image}
          description={"Arquitetura Residencial"}
          path='/projetosResidencial'
        />
        <Type
          image={projects[27].image}
          description={"Arquitetura Comercial"}
          path='/projetosComercial'
          

        />
      </div>
      <div className='row'>
        <Type
          image={projects[27].image}
          description={"Institucional"}
          path='/projetosInstitucional'

        />
        <Type
          image={projects[27].image}
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
