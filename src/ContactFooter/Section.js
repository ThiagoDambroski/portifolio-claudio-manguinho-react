import React, { useState } from 'react';

function Section({ color, icon, title, information, type }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);

    setTimeout(() => {
      
      if (type === 'email') {
        window.location.href = 'mailto:cmplanejamento@gmail.com';
      }
      if (type === 'tel') {
        const phoneNumber = '5581996364197';
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
      }
      if (type === 'loc') {
        const place = 'Av. Min. Marcos Freire, 1815 - Bairro Novo, Olinda - PE, 53030-000';
        window.open(`https://maps.google.com/maps?q=${encodeURIComponent(place)}`, '_blank');
      }

      setIsPressed(false);
    }, 300);
  };

  const darkenColor = (color) => {
    const darkenAmount = 0.5;
  
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
  
    const darkenR = Math.max(0, Math.floor(r * (1 - darkenAmount)));
    const darkenG = Math.max(0, Math.floor(g * (1 - darkenAmount)));
    const darkenB = Math.max(0, Math.floor(b * (1 - darkenAmount)));
  
    const darkenedColor = `#${darkenR.toString(16).padStart(2, '0')}${darkenG.toString(16).padStart(2, '0')}${darkenB.toString(16).padStart(2, '0')}`;
  
    return darkenedColor;
  };
  
  

  return (
    <div
      className={`color-section ${isPressed ? 'pressed' : ''}`} 
      style={{ backgroundColor: isPressed ? darkenColor(color) : color }}
      onMouseDown={handleClick}
    >
      
      <img src={icon} alt='icon' />
      <div className='footer-information'>
        <span className='footer-information-title'>{title}</span>
        <span className='footer-information-description'>{information}</span>
      </div>
    </div>
    
  );
} 

export default Section;
