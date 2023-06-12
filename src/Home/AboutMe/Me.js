import React from 'react'

function Me({name,description,photo}) {
  return (
    <div className='about-me slide'>
        <div className='about-me-desc'>
          <h1 className='about-me-title'>{name}</h1>
          <span className='about-me-text'>{description}</span>
        </div>
        <img className='about-me-img' src={photo}/>
    </div>
  )
}

export default Me