import React from 'react'

function Type({image,description}) {
  return (
    <div className='type'>
        <img src={image}/>
        <h1>{description}</h1>
    </div>
  )
}

export default Type