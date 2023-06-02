import React from 'react'
import './BigProject.css'

function BigProject({image,title,location,description}) {
  return (
    <div className='big-project'>
        <img src = {image[0]} className='big-image'></img>
        <h1>{title}</h1>
            <p>A elegância dessa residência com traços contemporâneos e volumes em madeira, vidro e porcelanato textura natural.
            Mais um lar permeado por jardins com máximo aproveitamento de iluminação e ventilação natural como agentes de conforto e bem-estar.
            Um proejto pensado para trazer momentos ao ar livre de qualidade e descanso.</p>

    </div>
  )
}

export default BigProject