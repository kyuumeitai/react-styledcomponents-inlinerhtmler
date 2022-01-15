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
        font-family: 'Acta Book', serif;
        line-height: 1.2;
        text-align: center;
      }
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
        {children}
      </div>
    </HeroStyled>
  )
}

export default Hero
