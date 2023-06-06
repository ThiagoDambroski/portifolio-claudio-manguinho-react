import React from 'react'
import { NavLink } from 'react-router-dom'

function TypeBig({image,description,path}) {
  return (
    <div className='type-big-flex'>
        <div className='type-big'>
        <NavLink to={path} ><img src={image[0]} className='type-big-img'/></NavLink>
        <h1  className='type-title'>{description}</h1>
        </div>
    </div>
    
  )
}

export default TypeBig