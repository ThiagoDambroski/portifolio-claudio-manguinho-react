import React from 'react'


function Section({color,icon,title,information,type}) {


  const handleClick = () => {
    if(type === 'email'){
      window.location.href = "mailto:cmplanejamento@gmail.com"
    }
   
  }

  return (
    <div className='color-section' style={{ backgroundColor: color }} onClick={handleClick}>
        <img src={icon}/>
        <div className='footer-information'>
            <span className='footer-information-title'>{title}</span>
            <span className='footer-information-description'>{information}</span>
        </div>
        
    </div>
  )
}

export default Section