import React from 'react'
import Hero from './Hero'
import styled from 'styled-components'
import WhatsappButton from './WhatsappButton'
import Sharer from './Sharer'

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column: 1 / -1;
  grid-gap: 16px;
  > div {
    grid-column: span 1;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Overall = styled.div`
  background-color: #5d31ff;
  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  .featured-title {
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    display: block;
  }
`
const CustomTheMatchProject = () => {
  return (
    <Overall>
      <Hero>
        <p>
          Sin ti,
          <br /> no hay <span className="chueco">futuro.</span>
        </p>
        {/* <p className="secondary">
          {' '}
        </p> */}
        <p className="tertiary">
          Súmale tu voz al futuro de la próxima década. Sé parte del Proyecto
          20.30 y abramos el diálogo para conversar sobre: salud mental, tiempo
          libre, sexualidad, trabajo y familia. Escríbenos por WhatsApp y
          envíanos un audio, video o texto contando una historia u opinión sobre
          cualquiera de los temas que te proponemos.
        </p>
        <div className="centered">
          <WhatsappButton />
        </div>
        <div className="centered">
          <Sharer
            url="https://www.latercera.com/proyecto2030/"
            description="Sé parte"
            hashtags={['proyecto2030']}
          />
        </div>
      </Hero>
    </Overall>
  )
}

export default CustomTheMatchProject
