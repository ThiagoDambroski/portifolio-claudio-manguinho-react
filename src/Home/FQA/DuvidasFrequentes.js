import React, { useState } from 'react';
import './FQA.css'
import Question from './Question';


function DuvidasFrequentes() {
  const [questions, setQuestions] = useState([
    {
        id: 1,
        question: 'Quais tipos de projetos a empresa de arquitetura realiza?',
        answer: ' Nossa empresa de arquitetura realiza uma ampla variedade de projetos, incluindo residenciais, comerciais, industriais e institucionais. Nossos arquitetos têm experiência em diversos tipos de construções.',
        expanded: false,
        button: '/projectType'
    },
    {
        id: 2,
        question: 'Como posso ver os projetos concluídos pela empresa?',
        answer: 'Temos uma seção dedicada em nosso site para mostrar nossos projetos concluídos. Você pode navegar por essa seção e explorar nossas criações anteriores. Cada projeto possui detalhes, imagens e informações relevantes.',
        expanded: false,
        button: '/projetos'
    },
    {
        id: 3,
        question: 'A empresa de arquitetura oferece serviços de design de interiores?',
        answer: 'Sim, oferecemos serviços de design de interiores integrados aos nossos projetos de arquitetura. Nossa equipe trabalha em estreita colaboração com os clientes para criar espaços harmoniosos e funcionais, considerando os aspectos estéticos e práticos do design de interiores.',
        expanded: false,
        button: 'wpp'
    },
    {
        id: 4,
        question: 'Como posso solicitar um orçamento para um projeto específico?',
        answer: ' Para solicitar um orçamento para o seu projeto, entre em contato conosco por meio do formulário de contato em nosso site. Forneça informações detalhadas sobre o tipo de projeto e suas necessidades específicas. Nossa equipe entrará em contato para discutir os detalhes e fornecer um orçamento personalizado.',
        expanded: false,
        button: 'wpp'
    },
    {
        id: 5,
        question: 'A empresa oferece serviços de consultoria arquitetônica?',
        answer: 'Sim, oferecemos serviços de consultoria arquitetônica para clientes que desejam orientações profissionais em projetos existentes. Nossa equipe de arquitetos pode ajudar com análises, sugestões de melhorias, soluções técnicas e recomendações para otimizar o espaço e a funcionalidade de um projeto arquitetônico.',
        expanded: false,
        button: 'wpp'
    }
  ]);

  const toggleAnswer = (id) => {
    const newList = questions.map((item) => item.id === id ? {...item,expanded: !item.expanded} : item)
    setQuestions(newList)
  };

  return (
    <div className="page-fqa">

      <div className='div-fqa'>
        <h3>F A Q</h3>
        <h1>Duvidas frequentes</h1>
      </div>
   
      
      {questions.map((question) => (
        <Question
          question={question}
          toggleAnswer = {toggleAnswer}
        />

      ))}
    </div>
  );
}

export default DuvidasFrequentes;
