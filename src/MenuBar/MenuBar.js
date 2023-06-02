import React from 'react';
import './MenuBar.css'; 
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav>
      <ul>
        <li className='left'><NavLink to="/">Claudio Manguinho</NavLink></li>
        <li><NavLink to="/bigProjetos">Projetos</NavLink></li>
        <li><NavLink to="/projectType">ProjectTypes</NavLink></li>
      </ul>
    </nav>
  );
};

export default MenuBar;