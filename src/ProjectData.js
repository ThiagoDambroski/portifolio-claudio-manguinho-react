import projeto1Image from './assets/images/projeto1.png';
import projeto2Image from './assets/images/projeto2.png';
import projeto3Image from './assets/images/projeto3.png';
import projeto4Image from './assets/images/projeto4.png';
import projeto5Image from './assets/images/projeto5.png';
import projeto6Image from './assets/images/projeto6.png';
import projeto7Image from './assets/images/projeto7.png';
import projeto8Image from './assets/images/projeto8.png';
import projeto9Image from './assets/images/projeto9.png';
import projeto10Image from './assets/images/projeto10.png';
import projeto11Image from './assets/images/projeto11.png';
import projeto12Image from './assets/images/projeto12.png';
import projeto13Image from './assets/images/projeto13.png';
import projeto14Image from './assets/images/projeto14.png';
import projeto15Image from './assets/images/projeto15.png';
import projeto16Image from './assets/images/projeto16.png';
import projeto17Image from './assets/images/projeto17.png';
import projeto18Image from './assets/images/projeto18.png';
import projeto19Image from './assets/images/projeto19.png';
import projeto20Image from './assets/images/projeto20.png';
import projeto21Image from './assets/images/projeto21.png';
import projeto22Image from './assets/images/projeto22.png';
import projeto23Image from './assets/images/projeto23.png';
import projeto24Image from './assets/images/projeto24.png';
import projeto25Image from './assets/images/projeto25.png';
import projeto26Image from './assets/images/projeto26.png';
import projeto27Image from './assets/images/projeto27.png';
import projeto28Image from './assets/images/projeto28.png';
import projeto29Image from './assets/images/projeto29.png';
import projeto30Image from './assets/images/projeto30.png';
import projeto31Image from './assets/images/projeto31.png';
import projeto32Image from './assets/images/projeto32.png';
import projeto33Image from './assets/images/projeto33.png';
import placeHolderImage from './assets/images/placeholder.png';

export const projectData = [

  ///TOPICO RESIDENCIAL -> 1
  ///TOPICOS INSTUTICIONAL -> 2
  ///TOPICOS CONCURSOS -> 3
  ///TOPICOS COMERCIAL -> 4

  {
    id: 1,
    title: 'MASTER PLAN GOIANA ',
    description: 'GLEBA 54 ha. Edifícios Residenciais. Condomínio de casas unifamiliares.',
    location: 'Goiana - PE',
    image: [projeto1Image],
    topic: 1 // RESIDENCIAL
  },
  {
    id: 2,
    title: 'MASTER PLAN FAZENDA MODELO',
    description: 'GLEBA 35 ha. Edifícios Residenciais. Condomínio de casas unifamiliares.',
    location: 'Caruaru - PE',
    image: [projeto2Image],
    topic: 1 // RESIDENCIAL
    
  },
  {
    id: 3,
    title: 'AMPLIAÇÃO AEROPORTO JK BRASÍLIA',
    description: 'Ampliação Terminal de Passageiros e Carga do Aeroporto Presidente Juscelino Kubitschek.',
    location: 'BRASÍLIA - DF',
    image: [projeto3Image] ,
    topic: 2 //INSTITUCIONAL 
  },
  {

    id: 4, 
    title: 'PROPOSTA URBANISMO OLINDA',
    description: 'Estudo para Requalificação de Pontos Estratégicos na Cidade de Olinda',
    location: 'OLINDA – PE',
    image: [projeto4Image,projeto5Image,projeto6Image,projeto7Image,projeto8Image,projeto9Image] ,
    topic: 2 //INSTITUCIONAL 
  },
  
  {
   
    id: 5,
    title: 'PROPOSTA URBANISMO OLINDA',
    description: 'Estudo para Requalificação da Praia do Quartel, Orla do Bairro Novo.',
    location: 'OLINDA – PE',
    image: [projeto10Image,projeto11Image] ,
    topic: 2 //INSTITUCIONAL
  },
  {
    id: 6,
    title: 'ESTUDO CONCEITUAL',
    description: 'Estudo CONCEITO para Terminais de Passageiros – BRT’s e VLT’s.',
    location: 'SALVADOR – BA',
    image: [projeto12Image] ,
    topic: 2 //INSTITUCIONAL
  },
  {

    id: 7,
    title: 'REFORMA E AMPLIAÇÃO CECON - UFPE',
    description: 'Projeto Arquitetônico de Reforma e Ampliação do Centro de Convenções da UFPE.',
    location: 'RECIFE – PE',
    image: [projeto13Image],
    topic: 2 //INSTITUCIONAL
  },
  {
    id: 8,
    title: 'REFORMA E AMPLIAÇÃO CECON - EMPETUR',
    description: 'Projeto Arquiettônico de Reforma e Ampliação do Centro de Convenções de Pernambuco.',
    location: 'OLINDA – PE',
    image: [projeto14Image] ,
    topic: 2 //INSTITUCIONAL
  },
  {
  
    id: 9,
    title: 'SEDE DO GOVERNO DO MARANHÃO',
    description: 'Projeto Arquitetônico para Nova Sede do Governo do Estado do Maranhão.',
    location: 'SÃO LUÍS – MA',
    image: [projeto15Image],
    topic: 3 //CONCURSOS
  },
  {

    id: 10,
    title: 'PAÇO MUNICIPAL E UBERLÂNDIA',
    description: 'Projeto Arquitetônico para o Paço Municipal de Uberlândia.',
    location: 'UBERLÂNDIA – MG',
    image: [projeto16Image] ,
    topic: 3 //CONCURSOS
  },
  {

    id: 11,
    title: 'SEDE BANCO BANORTE',
    description: 'Projeto Arquitetônico para Nova Sede do Banco Banorte.',
    location: 'RECIFE – PE',
    image: [projeto17Image],
    topic: 3 //CONCURSOS
  },
  {

    id: 12,
    title: 'SEDE BANCO DO NORDESTE DO BRASIL',
    description: 'Projeto Arquitetônico para Nova Sede do Banco do Nordeste do Brasil.',
    location: 'RECIFE – PE',
    image: [projeto18Image],
    topic: 3 //CONCURSOS
  },
  {

    id: 13,
    title: 'BIBLIOTECA PÚBLICA E ESPAÇO MULTICULTURAL',
    description: 'Projeto Arquitetônico para Biblioteca Pública e Espaço Multicultural.',
    location: 'RIO DE JANEIRO – RJ e FLORESTA - PE',
    image: [projeto19Image],
    topic: 3 //CONCURSOS
  },
  {

    id: 14,
    title: 'CONDOMÍNIO DE GALPÕES',
    description: 'Projeto Arquitetônico para Galpões Comerciais.',
    location: 'CABO DE SANTO AGOSTINHO – PE',
    image: [projeto20Image],
    topic: 4 //COMERCIAL
  },
  {
    id: 15,
    title: 'MERCADO PÚBLICO',
    description: 'Projeto Arquitetônico em Contêineres para um Mercado Público de Peixinhos.',
    location: 'OLINDA – PE',
    image: [projeto21Image] ,
    topic: 4 //COMERCIAL
  },
  {
    id: 16,
    title: 'MERCADO DE CAVALEIRO',
    description: 'Place Holder',
    location: 'JABOATÃO DOS GUARARAPES - PE',
    image: [projeto22Image],
    topic: 1 // RESIDENCIAL
  },
  {
    id: 17,
    title: 'EDIFÍCIO EMPRESARIAL',
    description: 'Place Holder',
    location: 'RECIFE',
    image: [projeto23Image],
    topic: 1 // RESIDENCIAL
  },
  {
    id: 18,
    title: 'EDIFÍCIOS RESIDENCIAIS E EMPRESARIAL',
    description: 'Place Holder',
    location: 'PLACE HOLDER',
    image: [projeto24Image] ,
    topic: 1 // RESIDENCIAL

  },
  {
    id: 19,
    title: 'EDIFÍCIO RESIDENCIAL',
    description: 'Place Holder',
    location: 'OLINDA',
    image: [projeto25Image] ,
    topic: 1 // RESIDENCIAL

  },
  {
    id: 20,
    title: 'RESIDÊNCIAS UNIFAMILIARES',
    description: 'Place Holder',
    location: 'PLACE HOLDER',
    image: [projeto26Image],
    topic: 1 // RESIDENCIAL
  },
  {
    id: 21,
    title: 'RESIDÊNCIAS UNIFAMILIARES',
    description: 'Place Holder',
    location: 'PLACE HOLDER',
    image: [projeto27Image] ,
    topic: 1 // RESIDENCIAL
  },
  {
    id: 22,
    title: 'RESIDÊNCIAS UNIFAMILIARES parte 2 ?',
    description: 'Place Holder',
    location: 'PLACE HOLDER',
    image: [projeto28Image],
    topic: 1// RESIDENCIAL
  },
  {
    id: 23,
    title: 'CONDOMÍNIO ALDEIA - RESIDÊNCIAS MÓDULO CONFORT',
    description: 'Place Holder',
    location: 'PLACE HOLDER',
    image: [projeto29Image ],
    topic: 1// RESIDENCIAL
  },
  {
    id: 24,
    title: ' KASCO - RESIDÊNCIAS MÓDULO BASIC',
    description: 'Place Holder',
    location: 'PLACE HOLDER',
    image: [projeto30Image] ,
    topic: 1// RESIDENCIAL
  },
  {
    id: 25,
    title: ' KASCO - RESIDÊNCIAS MÓDULO DYNAMIC',
    description: 'Place Holder',
    location: 'PLACE HOLDER',
    image: [projeto31Image],
    topic: 1// RESIDENCIAL 
  },
  {
    id: 26,
    title: '  KASCO - RESIDÊNCIAS MÓDULO DYNAMIC part 2 ?',
    description: 'Place Holder',
    location: 'PLACE HOLDER',
    image: [projeto32Image ],
    topic: 1// RESIDENCIAL 
  },
  {
    id: 27,
    title: '  KASCO - RESIDÊNCIAS MÓDULO DYNAMIC part 3 ?',
    description: 'Place Holder',
    location: 'PLACE HOLDER',
    image: [projeto33Image] ,
    topic: 1// RESIDENCIAL 
  },
  {
    id: 28,
    title: 'Place Holder',
    description: 'Place Holder',
    location: 'Place Holder',
    image: [placeHolderImage],
    topic: 1// RESIDENCIAL 
  },
];
