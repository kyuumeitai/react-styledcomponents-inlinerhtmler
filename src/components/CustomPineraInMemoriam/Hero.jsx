import React from 'react'
import styled, { css } from 'styled-components'
import LogoElecciones from './LogoElecciones'
import Bg from './Bg'
import Sharer from './Sharer'

const imports = css``

const Hero = styled.article`
  padding: 1rem 1rem 1rem;
  position: relative;
  color: white;
  overflow: hidden;
  .logo {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 240px;
  }
`

const Excerpt = styled.p`
  max-width: 700px;
  /* margin-right: auto; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.3rem;
  text-align: left;
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
        font-size: 1.6rem;
        letter-spacing: 0.1em;
        display: block;
        text-wrap: balance;
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
      filter: grayscale(100%);
    }
  }

  .fl-right {
    text-align: right;
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

const Custom = () => {
  return (
    <CustomBg>
      <style dangerouslySetInnerHTML={{ __html: imports }}></style>
      <MaxWidth>
        <Hero>
          <h2 className="logo"></h2>
          <div className="texto">
            <h1>
              <strong>
                Sebastián Piñera: <br />
                (1949-2024):
              </strong>
              <small>
                Las historias que marcan una vida
                <br />
              </small>
            </h1>
            <Excerpt>
              Nadie pensó que su paso por Radio Duna, el 17 de enero pasado,
              sería su última entrevista. Dos veces presidente y figura
              fundamental de la política y los negocios de los últimos 35 años,
              en este especial se encuentra a Sebastián Piñera en todas sus
              facetas públicas: el empresario, el político, además del
              Presidente que cerró el penal Cordillera y que tuvo que enfrentar
              un terremoto, un estallido social y una pandemia.
            </Excerpt>

            <Sharer
              url="https://www.latercera.com/sebastian-pinera-1949-2024/"
              description={`Sebastián Piñera: 1949-2024 - La Tercera`}
              hashtags="SebastianPiñera,InMemoriam,LaTercera"
            />
          </div>
        </Hero>
        <div className="bg">
          <Bg />
        </div>

        <div className="fotobg">
          <img
            src="https://www.latercera.com/resizer/KlSIo6wL7Zf6417LswCLN3c3D84=/arc-anglerfish-arc2-prod-copesa/public/5GOJKLDTVZBPNEOOIJBU563WBA.jpg"
            alt="Sebastián Piñera: 1949 - 2024"
          />
        </div>
      </MaxWidth>
    </CustomBg>
  )
}

export default Custom
