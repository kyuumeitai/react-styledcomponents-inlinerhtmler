import React from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'
import { Logo } from '../comps'

const fonts = `
  @font-face {
    font-family: 'wy';
    src: url('https://especiales.latercera.com/assets-2030/wy.woff2') format('woff2'),
        url('https://especiales.latercera.com/assets-2030/wy.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`

const GlobalStyle = createGlobalStyle`
  ${fonts}
`

const HeroStyled = styled.div`
  background-color: #5d31ff;
  padding: 4rem 2rem;
  text-align: left;
  .wrap {
    max-width: 1200px;
    margin: 0 auto;
    .excerpt {
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      p {
        color: #fff;
        font-size: 5rem;
        font-family: 'wy', sans-serif;
        line-height: 1.2;
        padding-bottom: 1rem;
        text-transform: uppercase;
        &.secondary {
          text-align: right;
          font-size: 3rem;
        }
        &.tertiary {
          font-family: franklin-gothic-urw, helvetica, arial, verdana,
            sans-serif;
          text-align: left;
          font-size: 1.5rem;
          text-transform: none;
          font-weight: normal;
        }
        @media (max-width: 768px) {
          font-size: 3rem;
          &.secondary {
            font-size: 2rem;
          }
        }
      }

      span.chueco {
        display: inline-block;
        transform: rotate(-4deg);
        background-color: #f36ff7;
        padding: 2.2rem 2rem 0.4rem;
        border-radius: 30px;
        line-height: 0.8;
        @media (max-width: 768px) {
          padding: 1.2rem 1rem 0.4rem;
        }
      }
    }
  }
`

const LogoWrap = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  margin-top: 30px;
  margin-bottom: 60px;
`

const Hero = ({ text, children }) => {
  return (
    <HeroStyled>
      <GlobalStyle />
      <div className="wrap">
        <LogoWrap>
          <h2>
            <Logo />
          </h2>
        </LogoWrap>
        <div className="excerpt">{children}</div>
      </div>
    </HeroStyled>
  )
}

export default Hero
