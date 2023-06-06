import React from 'react'
import { NavLink } from 'react-router-dom'

function Type({image,description,path}) {
  return (
    <div className='type'>
        <NavLink to={path} ><img src={image[0]} className='type-img'/></NavLink>
        <h1  className='type-title'>{description}</h1>
    </div>
  )
}

export default Type