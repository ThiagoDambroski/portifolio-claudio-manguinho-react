import React from 'react'
import Type from './Type'

function ProjectTypes({projects}) {
  return (
    <div className='type-box'>
        <div className='row'>
            <Type
                image = {projects[2].image}
                description={"Arquitetura Residencial"}
            />
            <Type
                image = {projects[2].image}
                description={"Arquitetura Comercial"}
            />
        </div>
        <div className='row'>
            <Type
                image = {projects[2].image}
                description={"Institucional"}
            />
           <Type
                image = {projects[2].image}
                description={"Concursos"}
            />
        </div>
        
    </div>
  )
}






export default ProjectTypes