import React from 'react';
import { NavLink } from 'react-router-dom';

function Question({ question, toggleAnswer }) {

    const handleClick = () => {
        const phoneNumber = '5581996364197';
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
    }

  return (
    <>
      <div>
        <button
          className={`button-fqa ${question.expanded ? 'button-clicked' : ''}`}
          onClick={() => toggleAnswer(question.id)}
        >
          {question.question}
        </button>
      </div>

      {question.expanded && (
        <div className="div-answer">
          <p className="answer">{question.answer}</p>
          {question.button === 'wpp' ? (
            <button onClick={handleClick} className='button-answer'>Fale conosco</button>
          ) : (
            <NavLink to={question.button} ><button className='button-answer'>Veja Mais</button></NavLink>
            
          )}
        </div>
      )}
    </>
  );
}

export default Question;
