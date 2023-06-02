import React from 'react'

function Me({name,description,photo}) {
  return (
    <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={photo}/>
    </div>
  )
}

export default Me