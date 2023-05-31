import React from 'react';
import BigProject from './BigProject';


function BigProjectPage({projects}) {
    

  return (

    <BigProject
        image = {projects[0].image}
        title =  {projects[0].title}
    />

  )
}

export default BigProjectPage