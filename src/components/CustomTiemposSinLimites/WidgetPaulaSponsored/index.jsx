import React from 'react'
import LogoTiemposColor from '../LogoTiemposColor'
import { Paula } from 'copesa-logos'
import styled from 'styled-components'

const Wrap = styled.div`
  grid-column: 1 / -1 !important;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  background-color: black;
  padding: 1rem;
  /* > div {
    grid-column: span 1 !important;
    > div {
      grid-column: span 1 !important;
    }
  } */
  .logoWrap {
    grid-area: 1 / 1 / 2 / 4;
  }
  .sectionWrap {
    grid-area: 1 / 4 / 2 / 10;
  }
  .presentedWrap {
    grid-area: 1 / 10 / 2 / 13;
  }
  @media (max-width: 768px) {
    .logoWrap {
      grid-area: 1 / 1 / 2 / 8;
    }
    .sectionWrap {
      grid-area: 2 / 1 / 3 / 8;
    }
    .presentedWrap {
      grid-area: 1 / 9 / 3 / 13;
    }
  }
`

const LogoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .logoTiempos {
    max-height: 40px;
  }
`

const SectionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  .logoEdicion {
    max-height: 25px;
  }
`

const PresentedWrap = styled.div`
  span {
    font-size: 11px;
    color: white;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', franklin-gothic-urw, helvetica, arial,
      verdana, sans-serif;
    display: block;
    text-align: right;
  }
  img {
    max-width: 130px;
    margin-right: auto;
    @media (max-width: 768px) {
      max-width: 80px;
    }
  }
`

const BrandWrap = styled.div`
  a {
    padding: 5px;
    display: block;
  }
  &.secondary {
    margin-top: 5px;
    img {
      max-height: 25px;
      @media (max-width: 768px) {
        max-height: 15px;
      }
    }
  }
`

const BrandsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const CustomTiemposLT = ({ bgColor = '#000' }) => {
  return (
    <Wrap>
      <LogoWrap className="logoWrap">
        <Paula className="logoPoder" schema="light" width="140px" />
      </LogoWrap>
      <SectionWrap className="sectionWrap">
        <LogoTiemposColor className="logoTiempos" mainColor={bgColor} />
      </SectionWrap>
      <PresentedWrap className="presentedWrap">
        <span>Presentado por:</span>
        <BrandsWrap>
          <BrandWrap className="main">
            <a
              href="https://tanner.cl/?utm_source=latercera&utm_medium=web&utm_campaign=widgetHomeLT"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://www.latercera.com/resizer/IT0UfvMI_E-8QrhcHx21aJIPoZs=/arc-anglerfish-arc2-prod-copesa/public/YBT6WXJRPVHQXH2HF5ARPND2K4.png"
                alt="Tanner"
              />
            </a>
          </BrandWrap>
          <BrandWrap className="secondary">
            <a
              href="https://www.tricot.cl/?utm_source=latercera&utm_medium=web&utm_campaign=widgetHomeLT"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://www.latercera.com/resizer/xPcoWuVK69_SPRr_XYIST5XuAIY=/arc-anglerfish-arc2-prod-copesa/public/5OVWWMPNVFFYVAM7O5MQNQQZ5A.png"
                alt="Tricot"
              />
            </a>
          </BrandWrap>
        </BrandsWrap>
      </PresentedWrap>
    </Wrap>
  )
}

export default CustomTiemposLT
