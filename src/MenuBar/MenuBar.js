import React from 'react';
import './MenuBar.css'; 
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav>
      <ul>
        <li className='left'><a href="/">Claudio Manguinho</a></li>
        <li><NavLink to="/bigProjetos">Projetos</NavLink></li>
        <li><NavLink to="/projectType">ProjectTypes</NavLink></li>
        <li><a href="/">Experiências</a></li>
      </ul>
    </nav>
  );
};

export default MenuBar;