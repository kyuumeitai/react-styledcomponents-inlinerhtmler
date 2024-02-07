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
  padding: 6rem 1rem;
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

const Article = styled.article`
  font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
  padding: 6rem 1rem;
  > div {
    /* border: 1px solid #0f0; */
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
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
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
      font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
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

const Custom = () => {
  return (
    <CustomBg>
      <style dangerouslySetInnerHTML={{ __html: imports }}></style>
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
          The path of the righteous man is beset on all sides By the inequities
          of the selfish and the tyranny of evil men Blessed is he who, in the
          name of charity and good will Shepherds the weak through the valley of
          darkness For he is truly his brother's keeper and the finder of lost
          children And I will strike down upon thee With great vengeance and
          furious anger Those who attempt to poison and destroy my brothers And
          you will know my name is the Lord When I lay my vengeance upon thee.
        </Excerpt>

        <Sharer
          url="https://www.latercera.com/gabriel-boric-presidente-chile/"
          description={``}
          hashtags="BoricPresidenteChile"
        />
        <Content>
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
                votes="4.608.362"
                titulo="Segunda vuelta presidencial"
                bajada="Año 2021"
              />
            </div>
          </Div5>
        </Content>
      </Hero>
      <div className="bg">
        <Bg />
      </div>
    </CustomBg>
  )
}

export default Custom
