import React from 'react'
import styled from 'styled-components'
import LogoTMP from '../comps/LogoTheMatchProject'
import LogoLeft from '../comps/LogoLeft'
import LogoRight from '../comps/LogoRight'

const HeroStyled = styled.div`
  background-color: #f0faff;
  padding: 4rem 2rem;
  text-align: center;
  .wrap {
    max-width: 1200px;
    margin: 0 auto;
    .excerpt {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      p {
        font-size: 1.6rem;
        font-family: 'Acta Book', serif;
        line-height: 1.2;
        text-align: center;
        padding-bottom: 1rem;
      }
    }
  }
  .children-wrap {
    padding: 1rem 1rem 0;
    span {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      text-transform: uppercase;
      font-size: 0.9rem;
      font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
      letter-spacing: 0.05em;
      margin-bottom: 1rem;
      display: block;
    }
  }
`

const Logo = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  margin-top: 30px;
  margin-bottom: 60px;
  .logoleft,
  .logoright {
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .logoleft {
    right: 0;
  }
  .logoright {
    left: 0;
  }
`

const Hero = ({ text, children }) => {
  return (
    <HeroStyled>
      <div className="wrap">
        <Logo>
          <h2>
            <LogoTMP />
          </h2>
          <LogoLeft className="logoleft" />
          <LogoRight className="logoright" />
        </Logo>
        <div
          className="excerpt"
          dangerouslySetInnerHTML={{ __html: text }}></div>
        <div className="children-wrap">
          <span>Especiales relevantes</span>
          {children}
        </div>
      </div>
    </HeroStyled>
  )
}

export default Hero
