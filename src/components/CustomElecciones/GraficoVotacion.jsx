import React from 'react'
import styled, { css } from 'styled-components'
import Sharer from './Sharer'
import Separador from './Separador'
import LogoElecciones from './LogoElecciones'
import Bg from './Bg'
import PercentageBox from './PercentageBox'
import Title from './Title'

const Hero = styled.article`
  font-family: 'Acta Book', 'Times New Roman', Times, serif;
  padding: 2rem 1rem;
  position: relative;
  .logo {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 300px;
  }
  figure {
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    figcaption {
      padding: 6px 1px;
      font-family: 'Acta Sans', sans-serif;
      text-transform: uppercase;
      border-bottom: 1px solid #666;
      strong {
        font-weight: bold;
      }
      @media (orientation: portrait) {
        font-size: 0.9rem;
      }
      &:before {
        content: '▲';
        display: inline-block;
        margin-right: 4px;
        margin-left: 4px;
      }
    }
    img {
      width: 100%;
      display: block;
    }
  }

  h1 {
    font-family: 'Acta Display', 'Times New Roman', Times, serif;
    font-size: 4rem;
    font-weight: normal;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    @media (orientation: portrait) {
      font-size: 2.8rem;
    }
    strong {
      font-size: 6rem;
      line-height: 0.8;
      display: block;
      font-family: 'Acta Display', 'Times New Roman', Times, serif;
      position: relative;
      padding-bottom: 1rem;
      font-weight: bold;
      @media (orientation: portrait) {
        font-size: 4rem;
      }
    }
    line-height: 1;
    text-align: center;
    small {
      font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
      text-transform: uppercase;
      font-size: 2.6rem;
      letter-spacing: 0.1em;
    }
  }
`

const Wrapper = styled.div`
  padding: 1rem 0;
  margin: 0 auto;
  max-width: 1300px;
`

const CustomBg = styled.div`
  position: relative;
  pointer-events: none;
  overflow: hidden;

  .bg {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    svg {
      width: 120%;
    }
  }
`

const Div5 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1;
  grid-gap: 20px;
  grid-column: span 1 !important;
  .sep {
    grid-column: span 1 !important;
    border-right: 1px dashed #666;
  }
`

const Parrafo = styled.p`
  font-size: 1.2rem;
  font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
  line-height: 1.1;
  margin-top: 1rem;
`

const Custom = () => {
  return (
    <CustomBg>
      <Hero>
        <Wrapper>
          <Title>Historial de Votaciones</Title>
          <Div5>
            <div className="sep">
              <PercentageBox
                percentage="26.18"
                votes="15.417"
                titulo="Parlamentarias"
                bajada="Año 2013 <br />Exdistrito 60*"
              />
            </div>
            <div className="sep">
              <PercentageBox
                percentage="32.82"
                votes="18.626"
                titulo="Parlamentarias"
                bajada="Año 2017 <br />Distrito 28*"
              />
            </div>
            <div className="sep">
              <PercentageBox
                percentage="60.42"
                votes="1.059.060"
                titulo="Primarias Presidenciales"
                bajada="Año 2021 <br />Apruebo Dignidad"
              />
            </div>
            <div className="sep">
              <PercentageBox
                percentage="25.82"
                votes="1.815.024"
                titulo="Primera vuelta presidencial"
                bajada="Año 2021"
              />
            </div>
            <div className="sep">
              <PercentageBox
                percentage="55.9"
                votes="4.617.385"
                titulo="Segunda vuelta presidencial"
                bajada="Año 2021"
              />
            </div>
          </Div5>
          <Parrafo>
            *Ambos distritos representan a las comunas de Antártica, Cabo de
            Hornos, Laguna Blanca, Natales, Porvenir, Primavera, Punta Arenas,
            Río Verde, San Gregorio, Timaukel, Torres del Paine.
          </Parrafo>
        </Wrapper>
      </Hero>
      <div className="bg">
        <Bg />
      </div>
    </CustomBg>
  )
}

export default Custom
