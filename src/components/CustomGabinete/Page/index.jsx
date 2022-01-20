import React from 'react'
import Sharer from '../Sharer'
import styled from 'styled-components'
import Ficha from '../Ficha'

const Excerpt = styled.p`
  max-width: 700px;
  /* margin-right: auto; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.6rem;
  text-align: center;
  @media (orientation: portrait) {
    text-align: center;
  }
`

const HeaderWrap = styled.div`
  margin: 2rem auto;
  max-width: 700px;
  text-align: center;
  .sharer{
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
}
`

const Header = () => {
  return (
    <HeaderWrap>
      <h1>Conoce a los 24 ministros del nuevo gobierno</h1>
      <Sharer
        className="sharer"
        url="https://www.latercera.com/el-gabinete-de-gabriel-boric/"
        description={`El gabinete de Gabriel Boric - La Tercera`}
        hashtags="GabineteDeBoricLT"
      />
      <Excerpt>
        Llegará con 36 años, el gobernante{' '}
        <strong>más joven de la historia de Chile</strong> desde Ramón Freire en
        1823. Además, será el primer presidente de una coalición distinta a las
        dos que dominaron el panorama político desde el retorno a la democracia.
        Acá, distintos ángulos para comprender a Gabriel Boric Font.
      </Excerpt>
    </HeaderWrap>
  )
}

const Body = () => {
  return (
    <div>
      <Ficha
        nombre="Gabriel Boric"
        cargo="Presidente"
        edad="36 años"
        partido="Partido de los Trabajadores"
        profesion="Político"
        nivelAcademico="Licenciado en Derecho"
        colegio="Colegio de Derecho"
        universidad="Universidad de Chile"
        biografia="Gabriel Boric es un político chileno"
      />
    </div>
  )
}

const Page = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

export default Page
