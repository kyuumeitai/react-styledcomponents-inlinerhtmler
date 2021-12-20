import React from 'react'
import styled, { css } from 'styled-components'
import Separador from './Separador'
import LogoElecciones from './LogoElecciones'
import Bg from './Bg'

import Gabriel from './Gabriel'
import Boric from './Boric'

const imports = css``

const Hero = styled.article`
  padding: 6rem 1rem 0rem;
  position: relative;
  .logo {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 300px;
  }
`

const Excerpt = styled.p`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.6rem;
  text-align: justify;
  @media (orientation: portrait) {
    text-align: center;
  }
`

const Content = styled.div`
  padding: 1rem 0;
`

const CustomBg = styled.div`
  position: relative;
  overflow: hidden;
  h1 {
    font-size: 4rem;
    font-weight: normal;
    max-width: 900px;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;

    @media (orientation: portrait) {
      font-size: 2.8rem;
    }
    strong {
      font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
      font-size: 6rem;
      line-height: 0.8;
      display: block;
      position: relative;
      padding-bottom: 1rem;
      font-weight: bold;
      @media (orientation: portrait) {
        font-size: 4rem;
      }
    }
    line-height: 1;

    small {
      font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
      text-transform: uppercase;
      font-size: 2.6rem;
      letter-spacing: 0.1em;
    }
  }
  .bg {
    z-index: -1;
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
  .gabriel {
    position: absolute;
    bottom: 0;
    right: 0;
    pointer-events: none;
    width: 60%;
    opacity: 0.6;
    z-index: -1;
  }
  .boric {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 60%;
    opacity: 0.4;
    z-index: -1;
  }
  .bor-title {
    float: right;
    text-align: right;
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

const Foto = styled.div`
  position: absolute;
  left: -10%;
  top: 0;
  bottom: 0;
  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
`

const Custom = () => {
  return (
    <CustomBg>
      <style dangerouslySetInnerHTML={{ __html: imports }}></style>
      <MaxWidth>
        <Hero>
          <h2 className="logo">
            <LogoElecciones />
          </h2>
          <div className="bor-title">
            <h1>
              <strong>
                Gabriel
                <br /> Boric Font
              </strong>
              <Separador class="fl-right" />
              <small>Presidente electo de Chile</small>
            </h1>
            <Excerpt>
              Llegará a La Moneda con 36 años, el gobernante más joven de la
              historia de Chile desde Ramón Freire en 1823. Además, será el
              primer presidente de una coalición distinta a las dos que
              dominaron el panorama político desde el retorno a la democracia.
              Acá, distintos ángulos para comprender a Gabriel Boric Font.
            </Excerpt>
          </div>
          <Foto>
            <img
              alt="Gabriel Boric Font, presidente de Chile"
              src="
https://www.latercera.com/resizer/1lwvDZDklCPXtJhzRCa2jZg64g4=/arc-anglerfish-arc2-prod-copesa/public/EVSHN2BH55BBLGCGOPHJN53IWY.png"
            />
          </Foto>
        </Hero>
        <div className="bg">
          <Bg />
        </div>

        <Gabriel className="gabriel" />
        <Boric className="boric" />
      </MaxWidth>
    </CustomBg>
  )
}

export default Custom
