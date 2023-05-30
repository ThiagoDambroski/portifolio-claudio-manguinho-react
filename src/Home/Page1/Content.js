import React from 'react'
import './Content.css'
import { NavLink } from 'react-router-dom';

const Content = () =>  {
  return (
    <div className='center'>
        <div className='content'>
            <h1>Hugo Viera</h1>
            <p>Sou um arquiteto apaixonado por criar espaços inspiradores e funcionais, combinando estética, 
            funcionalidade e personalidade para transformar seus sonhos em realidade. Explore meu portfólio e 
            deixe-me ajudar a transformar suas ideias em espaços incríveis e harmoniosos.</p>
            <div className='button-container'>
              <NavLink className='animated-button' to="/projetos">Projetos</NavLink>
            </div>
            

        </div>
    </div>
  )
}

export default Content