import React from 'react'
import LogoTiemposBlanco from '../LogoTiemposBlanco'
import LogoEdicion72 from '../LogoEdicion72'
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
  float: right;
  a {
    padding: 5px;
    background-color: white;
    display: block;
  }
`

const CustomTiemposLT = ({ bgColor = '#000' }) => {
  return (
    <Wrap>
      <LogoWrap className="logoWrap">
        <LogoTiemposBlanco className="logoTiempos" mainColor={bgColor} />
      </LogoWrap>
      <SectionWrap className="sectionWrap">
        <LogoEdicion72 className="logoEdicion" mainColor={bgColor} />
      </SectionWrap>
      <PresentedWrap className="presentedWrap">
        <span>Presentado por:</span>
        <BrandWrap className="main">
          <a
            href="https://tanner.cl/?utm_source=latercera&utm_medium=web&utm_campaign=widgetHomeLT"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://www.latercera.com/resizer/dg5yTfkOZ4rkYFbdBxXXdG8fmr0=/arc-anglerfish-arc2-prod-copesa/public/6YBPUQZX7VESFITBZ6Z2DRPVO4.png"
              alt="Tanner"
            />
          </a>
        </BrandWrap>
        {/* <BrandWrap className="secondary">
          <a
            href="https://www.ivitalia.cl/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://www.latercera.com/resizer/PYQxSGhSv9HpkjNGocj701g8cDE=/arc-anglerfish-arc2-prod-copesa/public/J2TK5HCGWVEA5L36DRDQEYSO2U.png"
              alt="Vitalia"
            />
          </a>
        </BrandWrap> */}
      </PresentedWrap>
    </Wrap>
  )
}

export default CustomTiemposLT
