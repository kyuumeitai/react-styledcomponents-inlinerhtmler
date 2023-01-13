import React from 'react'
import LogoSinLimiteReal from '../LogoSinLimiteReal'
import LogoCongresoFuturo from '../LogoCongresoFuturo2022'
import LogoUAutonoma from '../LogoUAutonoma'
import LogoAntofagastaMineralsBlack from '../LogoAntofagastaMineralsBlack'

import styled from 'styled-components'
import { QuePasa } from 'copesa-logos'

const Wrap = styled.div`
  grid-column: 1 / -1 !important;
  display: grid;
  grid-template-columns: 400px 1fr 400px;
  padding: 1rem;
  gap: 1rem;
  background-color: #212529;
  > div {
    grid-column: span 1;
    > div {
      grid-column: span 1 !important;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  .presentado-por {
    background-color: transparent;
    color: white;
  }
  .logoautonoma {
    max-width: 100%;
    max-height: 100px;
    @media (max-width: 768px) {
      max-height: 50px;
      max-width: 80px;
    }
  }
`

const LogoWrap = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  a {
    display: block;
    padding-right: 10px;
  }
  @media (max-width: 768px) {
    grid-column: span 2 !important;
  }
  .logo-aprender {
    max-height: 80px;
    margin-right: 10px;
  }
  .logo-congreso {
    max-height: 80px;
  }
  @media (max-width: 768px) {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  svg {
    max-width: 100%;
    height: 200px;
    max-height: 80px;
    @media (max-width: 768px) {
      max-height: 40px;
    }
  }
`

const PresentedWrap = styled.div`
  @media (max-width: 768px) {
    grid-column: span 3 !important;
    margin-top: -20px;
    span {
      margin-bottom: -10px;
    }
  }
  span {
    font-size: 11px;
    font-size: 0.8rem;
    color: #000;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', franklin-gothic-urw, helvetica, arial,
      verdana, sans-serif;
    margin-right: 6px;
    display: block;
    text-align: right;
  }
`

const Presented = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    display: block;
  }
  a.logo1 {
    max-width: 140px;
    margin-right: 5px;
    svg {
      max-width: 100%;
    }
  }
  a.logo2 {
    max-width: 160px;
    svg {
      max-width: 100%;
    }
  }
  img {
    max-width: 100%;
    margin-right: auto;
    @media (max-width: 768px) {
      max-width: 80px;
    }
  }
`
const Section = styled.div`
  display: block;
  padding: 15px;
  @media (max-width: 768px) {
    padding: 4px;
  }

  svg {
    max-width: 100%;
    height: 200px;
    max-height: 80px;
    @media (max-width: 768px) {
      max-height: 40px;
    }
  }
`

const SectionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`

const Custom2022Widget = ({ bgColor = '#E51261' }) => {
  return (
    <Wrap>
      <LogoWrap>
        <a
          href="https://www.congresofuturo.cl/?utm_source=latercera&utm_medium=web&utm_campaign=congresofuturo"
          target="_blank"
          rel="noopener noreferrer">
          <LogoSinLimiteReal mainColor={bgColor} className="logo-aprender" />
        </a>
        <a
          href="https://www.congresofuturo.cl/?utm_source=latercera&utm_medium=web&utm_campaign=congresofuturo"
          target="_blank"
          rel="noopener noreferrer">
          <LogoCongresoFuturo mainColor={bgColor} className="logo-congreso" />
        </a>
      </LogoWrap>
      <SectionWrap>
        <Section>
          <QuePasa dark="#ccc" />
        </Section>
      </SectionWrap>
      <PresentedWrap>
        <span className="presentado-por">Presentado por: </span>
        <Presented>
          <a
            className="logo1"
            href="https://www.uautonoma.cl/?utm_source=latercera&utm_medium=web&utm_campaign=congresofuturo"
            target="_blank"
            rel="noopener noreferrer">
            <LogoUAutonoma className="logoautonoma" />
          </a>
          <a
            className="logo2"
            href="https://www.aminerals.cl/?utm_source=latercera&utm_medium=web&utm_campaign=congresofuturo"
            target="_blank"
            rel="noopener noreferrer">
            <LogoAntofagastaMineralsBlack />
          </a>
        </Presented>
      </PresentedWrap>
    </Wrap>
  )
}

export default Custom2022Widget
