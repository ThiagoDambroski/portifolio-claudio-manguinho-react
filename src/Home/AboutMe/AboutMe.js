import React from 'react'
import Me from './Me'
import placeHolder from '../../assets/images/placeholderMan.png'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className='page-about'>
        
        <Me
            name = 'Hugo Viera'
            photo = {placeHolder}
            description = "Hugo é um talentoso arquiteto cuja paixão pela criação de espaços inspiradores e 
            funcionais é evidente em cada projeto que ele realiza. Com uma visão única e uma abordagem inovadora, 
            Hugo transforma sonhos e conceitos em realidade arquitetônica.A criatividade de Hugo é evidente em cada 
            detalhe de seus projetos. Ele combina habilmente formas, linhas e materiais para criar estruturas 
            arquitetônicas que cativam os olhos e a mente. Seu estilo distintivo é marcado por uma harmonia entre o 
            moderno e o clássico, resultando em projetos atemporais e elegantes.
            Além de sua habilidade técnica e talento artístico, Hugo também é conhecido por sua abordagem 
            colaborativa. Ele valoriza a comunicação aberta e transparente com seus clientes, 
            compreendendo suas necessidades e desejos individuais. Ao incorporar as ideias e aspirações de seus 
            clientes, Hugo é capaz de criar espaços personalizados que refletem a identidade e o estilo de vida de 
            cada pessoa.
            Ao longo de sua carreira, Hugo conquistou reconhecimento e prestígio pela excelência de seu trabalho. 
            Seus projetos têm sido destaque em revistas de arquitetura e ele recebeu vários prêmios por suas 
            realizações notáveis. No entanto, o maior elogio para Hugo é ver o impacto positivo que suas criações 
            têm na vida das pessoas que as habitam."
        />
    </div>
  )
}

export default AboutMe