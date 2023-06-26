// AboutMe.js
import React from 'react';
import Me from './Me';
import placeHolder from '../../assets/images/placeholderMan.png';
import './AboutMe.css';
import { useState } from 'react';
import { useEffect } from 'react';

function AboutMe() {
  const [activeAboutMe, setActiveAboutMe] = useState(0);
  const [cicle,setCicle] = useState(true)

  useEffect(() => {

    let interval;
    if(cicle){
      interval = setInterval(() => {
        setActiveAboutMe(activeAboutMe === 0 ? 1 : 0);
      }, 6000);
    }

    

    return () => {
      clearInterval(interval);
    };
  }, [activeAboutMe]);


  const handleNext = () => {
    setActiveAboutMe(activeAboutMe === 0 ? 1 : 0);
    setCicle(false)
  }

  const handlePrevious = () => {
    setActiveAboutMe(activeAboutMe === 1 ? 0 : 1);
    setCicle(false)
  }

  return (
    <div className='page-about'>
        <button className='carousel-button-left' onClick={handlePrevious}/>

        {activeAboutMe === 1 ? (
          <Me
            name='Hugo Viera'
            photo={placeHolder}
            description="Hugo é um talentoso arquiteto cuja paixão pela criação de espaços inspiradores e funcionais é evidente em cada projeto que ele realiza. Com uma visão única e uma abordagem inovadora, Hugo transforma sonhos e conceitos em realidade arquitetônica.A criatividade de Hugo é evidente em cada detalhe de seus projetos. Ele combina habilmente formas, linhas e materiais para criar estruturas arquitetônicas que cativam os olhos e a mente. Seu estilo distintivo é marcado por uma harmonia entre o moderno e o clássico, resultando em projetos atemporais e elegantes. Além de sua habilidade técnica e talento artístico, Hugo também é conhecido por sua abordagem colaborativa. Ele valoriza a comunicação aberta e transparente com seus clientes, compreendendo suas necessidades e desejos individuais. Ao incorporar as ideias e aspirações de seus clientes, Hugo é capaz de criar espaços personalizados que refletem a identidade e o estilo de vida de cada pessoa. Ao longo de sua carreira, Hugo conquistou reconhecimento e prestígio pela excelência de seu trabalho. Seus projetos têm sido destaque em revistas de arquitetura e ele recebeu vários prêmios por suas realizações notáveis. No entanto, o maior elogio para Hugo é ver o impacto positivo que suas criações têm na vida das pessoas que as habitam."
          />
        ) : (
          <Me
            name='Claudio Manguinho'
            photo={placeHolder}
            description="Um arquiteto apaixonado por transformar sonhos em realidade. Com uma visão criativa e inovadora, trago um toque único aos projetos arquitetônicos, buscando sempre surpreender e encantar meus clientes. Com anos de experiência na área, desenvolvi uma abordagem holística que combina funcionalidade, estética e sustentabilidade. Acredito que a arquitetura vai além de simplesmente criar espaços, é sobre criar experiências que inspirem e melhorem a qualidade de vida das pessoas. Meu portfólio abrange uma ampla gama de projetos, desde residenciais e comerciais até espaços públicos e de lazer. Cada projeto é cuidadosamente planejado e executado, levando em consideração as necessidades e desejos únicos de cada cliente. Minha paixão pela arquitetura reflete-se em cada detalhe, desde a seleção de materiais até a escolha das cores e texturas. Além disso, estou sempre atualizado com as últimas tendências e tecnologias do setor, garantindo que meus projetos estejam alinhados com as demandas contemporâneas. Busco constantemente aprimorar minhas habilidades e conhecimentos para oferecer soluções arquitetônicas de vanguarda."
          />
        )}
        <button className='carousel-button'  onClick={handleNext} />
    </div>
  );
}

export default AboutMe;
