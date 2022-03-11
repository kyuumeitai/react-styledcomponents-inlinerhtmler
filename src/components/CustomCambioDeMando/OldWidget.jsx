import React from 'react'
import styled, { css } from 'styled-components'
import Separador from './Separador'
import LogoElecciones from './LogoElecciones'
import Bg from './Bg'
import Sharer from './Sharer'

import Gabriel from './Gabriel'
import Boric from './Boric'

const imports = css``

const Hero = styled.article`
  padding: 1rem 1rem 1rem;
  position: relative;
  color: white;
  overflow: hidden;
  .logo {
    z-index: 2;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 240px;
    @media (max-width: 768px) {
      display: none;
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
`

const Content = styled.div`
  padding: 1rem 0;
`

const CustomBg = styled.a`
  position: relative;
  overflow: hidden;
  display: block;
  background-color: black;
  text-decoration: none;
  .texto {
    margin-top: 12rem;
    max-width: 900px;
    text-align: left;
    position: relative;
    z-index: 4;

    h1 {
      font-weight: normal;
      @media (orientation: portrait) {
        font-size: 2.8rem;
      }
      strong {
        font-family: 'Acta Display', serif;
        font-size: 8rem;
        line-height: 0.8;
        display: block;
        position: relative;
        padding-bottom: 1rem;
        font-weight: bold;
        text-shadow: 5px 5px 0px black, -3px -3px 10px rgba(0, 0, 0, 0.5);
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
  .gabriel {
    position: absolute;
    bottom: -5%;
    right: 0;
    pointer-events: none;
    width: 60%;
    opacity: 0.6;
    z-index: 3;
  }
  .boric {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 50%;
    opacity: 0.3;
    z-index: 2;
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

const Button = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 3px solid white;
  color: white;
  font-size: 1.2rem;
  border-radius: 30px;
  margin-bottom: 3rem;
`

const Custom = () => {
  return (
    <CustomBg href="https://latercera.com/cambio-de-mando-pinera-boric/?utm_source=widgethomelt&utm_medium=web&utm_campaign=cambiogabinetepineraboric">
      <style dangerouslySetInnerHTML={{ __html: imports }}></style>
      <MaxWidth>
        <Hero>
          <h2 className="logo">
            <LogoElecciones />
          </h2>
          <div className="texto">
            <h1>
              <strong>
                Gabriel
                <br /> Boric Font
              </strong>
              <small>
                Una nueva generación
                <br /> entra a La Moneda
              </small>
            </h1>
            <Excerpt>
              Llegará con 36 años,{' '}
              <strong>el gobernante más joven de la historia de Chile</strong>{' '}
              desde Ramón Freire en 1823. Revisa este especial.
            </Excerpt>
            <Button>Ver el especial</Button>
          </div>
        </Hero>
        <div className="bg">
          <Bg />
        </div>

        <Gabriel className="gabriel" />
        <Boric className="boric" />
        <div className="fotobg">
          <img
            src="https://especiales.latercera.com/boric-presidente-assets/president-boric.jpg"
            alt="Gabriel Boric Presidente"
          />
        </div>
      </MaxWidth>
    </CustomBg>
  )
}

export default Custom
