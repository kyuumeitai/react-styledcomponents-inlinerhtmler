import React from 'react'
import styled, { css } from 'styled-components'
import Sharer from './Sharer'
import Separador from './Separador'
import LogoElecciones from './LogoElecciones'
import Bg from './Bg'
import PercentageBox from './PercentageBox'
import Title from './Title'

const imports = css`
  @font-face {
    font-family: 'Acta Display';
    src: url('https://especiales.latercera.com/11sept-assets/ActaDisplay-ExtraBold.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/ActaDisplay-ExtraBold.woff')
        format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Book';
    src: url('https://especiales.latercera.com/11sept-assets/Acta-Book.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/Acta-Book.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Book';
    src: url('https://especiales.latercera.com/11sept-assets/Acta-Bold.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/Acta-Bold.woff')
        format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Sans';
    src: url('https://especiales.latercera.com/11sept-assets/ActaAgate-Book.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/ActaAgate-Book.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Sans';
    src: url('https://especiales.latercera.com/11sept-assets/ActaAgate-Bold.woff')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/ActaAgate-Bold.woff')
        format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Headline';
    src: url('https://especiales.latercera.com/11sept-assets/ActaHeadline-Book.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/ActaHeadline-Book.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Headline';
    src: url('https://especiales.latercera.com/11sept-assets/ActaHeadline-BookItalic.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/ActaHeadline-BookItalic.woff')
        format('woff');
    font-weight: normal;
    font-style: italic;
  }
`

const Hero = styled.article`
  font-family: 'Acta Book', 'Times New Roman', Times, serif;
  padding: 6rem 1rem 0rem;
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
          <h2 className="logo">
            <LogoElecciones />
          </h2>
          <h1>
            <strong>
              Gabriel
              <br /> Boric Font
            </strong>
            <Separador />
            <small>Presidente electo de Chile</small>
          </h1>
          <Excerpt>
            Llegará a La Moneda con 36 años, el gobernante más joven de la
            historia de Chile desde Ramón Freire en 1823. Además, será el primer
            presidente de una coalición distinta a las dos que dominaron el
            panorama político desde el retorno a la democracia. Acá, distintos
            ángulos para comprender a Gabriel Boric Font.
          </Excerpt>

          <Sharer
            url="https://www.latercera.com/gabriel-boric-presidente-chile/"
            description={``}
            hashtags="11s"
          />
        </Hero>
        <div className="bg">
          <Bg />
        </div>
      </MaxWidth>
    </CustomBg>
  )
}

export default Custom
