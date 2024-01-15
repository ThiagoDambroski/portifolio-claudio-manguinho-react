import React, { useState } from 'react'
import './aboutUs.css'
import placeHolder from '../../assets/aboutUs/placeholderMan.jpg'
import placeHolder2 from '../../assets/aboutUs/placeHolderWoman.jpg'
import leftArrow from '../../assets/aboutUs/compact-left-arrow.png'
import rightArrow from '../../assets/aboutUs/compact-right-arrow.png'

import CarrouselAboutUs from './CarrouselAboutUs'


function AboutUs() {

  
  const [index,setIndex] = useState(0)

  const employes = [
    {
      photo: placeHolder,
      name: "Hugo",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.`,
      profession: "arquiteto"

    },
    {
      photo: placeHolder,
      name:"Claudio",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.`,
      profession:"arquiteto"
    }
  ]

  const nextEmploy = () => {

    setIndex((index + 1) % employes.length);
  };

  const previousEmploy = () => {
    setIndex((index - 1 + employes.length) % employes.length);
  };


  

  return (
    <div className="about-us-page">

      
      <div className="carousel-container" style={{ transform: `translateX(-${index * 100}%)` }}>
        {employes.map((employee, i) => (
          <div key={i} className="carousel-item">
            <CarrouselAboutUs
              photo={employee.photo}
              name={employee.name}
              description={employee.description}
              profession={employee.profession}
              index={index}
              setIndex={setIndex}
              employeeNumber={employes.length}
            />
          </div>
        ))}
      </div>
      <img src={leftArrow} alt="left-arrow" className="about-us-arrow arrow-right" onClick={() => previousEmploy()} />
      <img src={rightArrow} alt="right-arrow" className="about-us-arrow arrow-left" onClick={() => nextEmploy()} />
    </div>
  );
}

export default AboutUs