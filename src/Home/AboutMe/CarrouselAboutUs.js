import React from 'react'
import { useState } from 'react';
import './aboutUs.css'

import whatsapp from '../../assets/aboutUs/whatsapp.png'
import instagram from '../../assets/aboutUs/instagram.png'
import linkedin from '../../assets/aboutUs/linkedin.png'
import whatsappBlack from '../../assets/aboutUs/whatsappBlack.png'
import instagramBlack from '../../assets/aboutUs/instagramBlack.png'
import linkedinBlack from '../../assets/aboutUs/linkedinBlack.png'


function CarrouselAboutUs({photo,name,description,profession,index,setIndex,employeeNumber}) {

    const [currentImage, setCurrentImage] = useState(null);

    

  return (
    <>
    

    <div className='about-us-picture'>
            <img src={photo} alt='self'/>
            <h1>{name}</h1>
            <h3>{profession}</h3>
        </div>
        <div className='about-us-content'>
                <h1>Um pouco sobre {name}</h1>
                <p>
                    {description}
                </p>
            

        </div>
        <div className='about-us-socialMedia'>

          
          <img 
            src={currentImage === 'linkedin' ? linkedinBlack : linkedin} 
            onMouseEnter={() => setCurrentImage('linkedin')}
            onMouseLeave={() => setCurrentImage(null)}
            className='about-us-socialMedia-img'
            alt='linkedin-icon'
          
          />
          <img 
            src={currentImage === 'whatsapp' ? whatsappBlack : whatsapp}
            onMouseEnter={() => setCurrentImage('whatsapp')}
            onMouseLeave={() => setCurrentImage(null)}
            className='about-us-socialMedia-img'
            alt='whatsapp-icon'
          />
          <img 
            src={currentImage === 'instagram' ? instagramBlack : instagram}
            onMouseEnter={() => setCurrentImage('instagram')}
            onMouseLeave={() => setCurrentImage(null)}
            className='about-us-socialMedia-img'
            alt='instagram-icon'

          />
         
          
        </div>
      
    </>
  )
  
}

export default CarrouselAboutUs