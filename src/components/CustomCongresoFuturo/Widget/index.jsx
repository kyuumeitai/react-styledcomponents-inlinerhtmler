import React from 'react'
import LogoAprender from '../LogoAprenderAConvivir'
import LogoCongresoFuturo from '../LogoCongresoFuturo'
import styled from 'styled-components'
import { QuePasa } from '@labcon/copesa-logos'

const Wrap = styled.div`
  grid-column: 1 / -1 !important;
  display: grid;
  grid-template-columns: 400px 1fr 400px;
  gap: 1rem;
  > div {
    grid-column: span 1;
    > div {
      grid-column: span 1 !important;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const LogoWrap = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media(max-width: 768px) {
    grid-column: span 2 !important;
  }
  .logo-aprender{
    max-height: 80px;
    margin-right: 10px;
  }
  .logo-congreso{
    max-height: 80px;
  }
  @media(max-width: 768px) {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  svg{
    max-width: 100%;
    height: 200px;
    max-height: 80px;
    @media (max-width: 768px) {
      max-height: 40px;
    }
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
    max-width: 160px;
    margin-right: 40px;
  }
  a.logo2 {
    max-width: 130px;
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
        <LogoAprender mainColor={bgColor} className="logo-aprender" />
        <LogoCongresoFuturo mainColor={bgColor} className="logo-congreso" />
      </LogoWrap>
      <SectionWrap>
        <Section>
          <QuePasa dark="#4bc7bd" />
        </Section>
      </SectionWrap>
      <PresentedWrap>
        <span>Presentado por: </span>
        <Presented>
          <a
            className="logo1"
            href="https://www.usm.cl/?utm_source=latercera&utm_medium=web&utm_campaign=congresofuturo"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://www.latercera.com/resizer/1GzmOgppjm6hqGr2uGqmMvN8lCI=/arc-anglerfish-arc2-prod-copesa/public/MYZOOESANZHKLCZY7ZIAN2EPHU.png"
              alt="Universidad Técnica Federico Santa María"
            />
          </a>
          <a
            className="logo2"
            href="https://www.arauco.cl/chile/?utm_source=latercera&utm_medium=web&utm_campaign=congresofuturo"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://www.latercera.com/resizer/X_Z4qB5FCi-spJuz8F1ivJTsHuo=/arc-anglerfish-arc2-prod-copesa/public/VKVT5Q3WM5GY7JDE3NMH6DO2IQ.png"
              alt="Arauco"
            />
          </a>
        </Presented>
      </PresentedWrap>
    </Wrap>
  )
}

export default Custom2022Widget
