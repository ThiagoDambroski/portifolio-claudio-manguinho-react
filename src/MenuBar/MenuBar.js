import React from 'react';
import './MenuBar.css'; 

const MenuBar = () => {
  return (
    <nav>
      <ul>
        <li className='left'><a href="/">Name</a></li>
        <li><a href="/">Projetos</a></li>
        <li><a href="/">Informações</a></li>
        <li><a href="/">Experiências</a></li>
      </ul>
    </nav>
  );
};

export default MenuBar;