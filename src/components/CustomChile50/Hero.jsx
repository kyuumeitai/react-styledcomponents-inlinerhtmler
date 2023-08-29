import React from 'react'
import styled, { css } from 'styled-components'

import LogoChile50 from './LogoChile50'
import Sharer from './Sharer'

const imports = css``

const Hero = styled.article`
  padding: 1rem 1rem 1rem;
  position: relative;
  color: #1e1e1e;
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
  margin-left: auto;
  margin-right: auto;
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
  background-color: #f2f2eb;
  mask-image: url(https://especiales.latercera.com/chile50-assets/tear-mask-bottom.png);
  mask-position: bottom;
  mask-repeat: no-repeat;

  .texto {
    margin-top: 5rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    position: relative;
    z-index: 3;

    p {
      text-align: center;
    }
  }

  .bg {
    z-index: 1;
    position: relative;
    height: 60vh;
    overflow: hidden;
    background-color: #f2f2eb;
    @media (orientation: portrait) {
      height: 35vh;
    }
    .mask {
      position: absolute;
      top: 2rem;
      left: 2rem;
      right: 2rem;
      bottom: 2rem;
      mask-image: url(https://especiales.latercera.com/chile50-assets/chile50-positivo.svg);
      mask-position: top;
      mask-repeat: no-repeat;
      img {
        position: fixed;
        top: 0px;
        left: 0;
        right: 0;
        height: 100vh !important;
        width: 100%;
        object-fit: cover;
        object-position: center top;
        display: block;
      }
    }
  }
  .sharer-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: #1e1e1e;

    .sharer-content a {
      color: #1e1e1e;
      border-color: #1e1e1e;
    }
  }
  .tear-top {
    mask-image: url(https://especiales.latercera.com/chile50-assets/tear-mask-top.png);
    mask-position: top;
    mask-repeat: no-repeat;
    img {
      width: 100%;
      max-width: none;
    }
  }
  .tear-bottom {
    mask-image: url(https://especiales.latercera.com/chile50-assets/tear-mask-bottom.png);
    mask-position: bottom;
    mask-repeat: no-repeat;
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
            <Excerpt>
              Tres especiales de largo aliento. Diferentes focos, diferentes
              miradas y ángulos a través de reportajes y entrevistas. En este
              sitio pueden encontrar lo mejor de la cobertura de La Tercera del
              Golpe, el hecho al que terminamos volviendo, una y otra vez, para
              intentar entender el Chile actual.
            </Excerpt>
          </div>
        </Hero>
        <div className="bg">
          <div className="mask">
            <img
              src="https://especiales.latercera.com/chile50-assets/presos.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="sharer-bg">
          <Sharer
            url="https://www.latercera.com/chile50/"
            description={`Chile 50 - La Tercera`}
            hashtags="Chile50"
          />
        </div>
      </MaxWidth>
    </CustomBg>
  )
}

export default Custom
