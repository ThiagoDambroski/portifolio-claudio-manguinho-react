import React from 'react'


function Section({color,icon,title,information}) {
  return (
    <div className='color-section' style={{ backgroundColor: color }}>
        <img src={icon}/>
        <div className='footer-information'>
            <span className='footer-information-title'>{title}</span>
            <span className='footer-information-description'>{information}</span>
        </div>
        
    </div>
  )
}

export default Section