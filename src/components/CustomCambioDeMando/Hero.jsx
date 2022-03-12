import React from 'react'
import styled, { css } from 'styled-components'
import Separador from './Separador'
import LogoElecciones from './LogoElecciones'
import Bg from './Bg'
import Sharer from './Sharer'

import LT from './svg/output/IsoLt'
import CambioWhite from './svg/output/CambioWhite'

const imports = css``

const Hero = styled.article`
  padding: 1rem 1rem 1rem;
  position: relative;
  color: white;
  overflow: hidden;
  .logo {
    position: absolute;
    top: 40px;
    right: 20px;
    width: 80px;
    z-index: 3;
    @media (max-width: 768px) {
      width: 30px;
      top: 5px;
      right: 5px;
    }
  }
`

const Excerpt = styled.p`
  max-width: 700px;
  /* margin-right: auto; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.6rem;
  text-align: left;
  @media (orientation: portrait) {
    text-align: center;
    font-size: 1.2rem;
  }
`

const Content = styled.div`
  padding: 1rem 0;
`

const CustomBg = styled.div`
  position: relative;
  overflow: hidden;
  background-color: black;

  .texto {
    margin-top: 12rem;
    max-width: 900px;
    text-align: left;
    position: relative;
    z-index: 3;

    h1 {
      font-weight: normal;
      @media (orientation: portrait) {
        font-size: 2.8rem;
      }
      strong {
        font-family: 'Acta Display', serif;
        font-size: 6rem;
        line-height: 0.8;
        display: block;
        position: relative;
        padding-bottom: 1rem;
        font-weight: bold;
        text-shadow: 5px 5px 0px black, -3px -3px 10px rgba(0, 0, 0, 0.5);
        @media (orientation: portrait) {
          font-size: 3.3rem;
        }
        span {
          font-size: 4rem;
          display: block;
          @media (orientation: portrait) {
            font-size: 2rem;
          }
        }
      }
      line-height: 1;

      small {
        font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
        text-transform: uppercase;
        font-size: 2.6rem;
        letter-spacing: 0.1em;
        @media (orientation: portrait) {
          font-size: 1.4rem;
          line-height: 1.1;
          display: block;
        }
      }
    }
  }

  .bg {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    svg {
      width: 200%;
      opacity: 0.3;
    }
  }
  .fotobg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    img {
      width: 100%;
    }
  }

  .fl-right {
    text-aligh: right;
    svg {
      display: inline-block;
    }
  }
`

const MaxWidth = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (orientation: portrait) {
    padding: 1rem;
  }
`

const CambioStyled = styled(CambioWhite)`
  max-width: 300px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    max-width: 200px;
  }
`

const Custom = () => {
  return (
    <CustomBg>
      <style dangerouslySetInnerHTML={{ __html: imports }}></style>
      <MaxWidth>
        <Hero>
          <h2 className="logo">
            <LT />
          </h2>
          <div className="texto">
            <h1>
              <CambioStyled />
              <strong>
                <span>De Sebastián Piñera</span>a Gabriel Boric
              </strong>
              {/* <small>
                Cambio de mando <br />
                presidencial 2022
              </small> */}
            </h1>
            <Excerpt>
              El nuevo mandatario fue investido formalmente hoy 11 de marzo en
              el Salón de Honor del Congreso. Revisa aquí toda la cobertura de
              La Tercera.
            </Excerpt>

            <Sharer
              url="https://www.latercera.com/cambio-de-mando-pinera-boric/"
              description={`De Piñera a Boric - Cambio de Mando - La Tercera`}
              hashtags="PresidenteBoric"
            />
          </div>
        </Hero>
        <div className="bg">
          <Bg />
        </div>
        {/* 
        <Gabriel className="gabriel" />
        <Boric className="boric" /> */}
        <div className="fotobg">
          <img
            src="https://especiales.latercera.com/boric-presidente-assets/president-boric-2.jpg"
            alt="Gabriel Boric Presidente"
          />
        </div>
      </MaxWidth>
    </CustomBg>
  )
}

export default Custom
