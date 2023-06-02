import React from 'react'
import Section from './Section'
import './Footer.css'
import telefoneIcon from '../assets/icons/phone-call.png'
import emailIcon from '../assets/icons/mail.png'
import locationIcon from '../assets/icons/maps.png'

function ContactFooter() {
  return (
    <div >
        <div className='footer-div'>
          <h1 className='footer-title'>Contatos</h1>
          
          <p className='footer-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
          ed dapibus lorem eget arcu gravida, ac eleifend nisl volutpat. 
          Mauris consequat, leo id viverra placerat, leo purus posuere nunc, 
          id efficitur nisi nisl et ipsum. Suspendisse potenti. Duis facilisis 
          eleifend mauris sed dictum. Nunc ac nunc eget ligula iaculis aliquam.
         </p>
        </div>  
        <div className='footer-icons-div'>
            <Section 
              color='#07B8C7' 
              icon = {emailIcon}
              title = 'Email de contato'
              information= 'cmplanejamento@gmail.com'
            />
            <Section
              color='#FD9B00' 
              icon = {telefoneIcon}
              title= 'Ligue para nos'
              information= '(81) 99971-9990 | (81) 99636-4197'
             />
            <Section 
              color='#BB3036' 
              icon={locationIcon}
              title='Venha nos vistar'
              information='Rua Nao sei aonde numero 23 '

            />
        </div>

    </div>
  )
}

export default ContactFooter