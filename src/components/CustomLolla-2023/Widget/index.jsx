import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Culto } from 'copesa-logos'
import LogoLolla from '../output/LogoLolla2023'

const BgLolla = `https://www.latercera.com/resizer/-1OsBILFziq6zadl-KFDmqZe5Vg=/arc-anglerfish-arc2-prod-copesa/public/LJI6JHF2X5GTVMPXTZIP7AZDNE.png`

const move = keyframes`
  0% {
      transform: scale(1.3) translate3d( -12%, 12%, 0 );
  }
  25% {
      transform: scale(1.3) translate3d( 12%, -12%, 0 );
  }
  50% {
      transform: scale(1.3) translate3d( 12%, 12%, 0 );
  }
  75% {
      transform: scale(1.3) translate3d( -12%, -12%, 0 );
  }
  100% {
      transform: scale(1.3) translate3d( -12%, 12%, 0 );
  }
`

const rebotin = keyframes`
  0%   { transform: scale(1,1)      translateY(0); }
  1%  { transform: scale(1.1,.9)   translateY(0); }
  3%  { transform: scale(.9,1.1)   translateY(-10px); }
  8%  { transform: scale(1.05,.95) translateY(0); }
  10%  { transform: scale(1,1)      translateY(-3px); }
  14%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
`

const Wrap = styled.div`
  grid-column: 1 / -1 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(
    252deg,
    rgba(52, 14, 95, 0.8),
    rgba(146, 100, 204, 0.7)
  );
  > div {
    grid-column: span 1 !important;
    > div {
      grid-column: span 1 !important;
    }
  }
`

const Presented = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

const PresentedWrap = styled.div`
  background-color: white;
  padding: 10px;
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
  img {
    max-width: 130px;
    margin-right: auto;
    @media (max-width: 768px) {
      max-width: 80px;
    }
  }
`

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 15px;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: auto;
  }
`

const Cols = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ColLolla = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    margin-top: -14px;
    margin-bottom: -12px;
  }
`

const StCulto = styled(Culto)`
  padding: 10px 0 2px;
  height: 80px;
  @media (max-width: 768px) {
    height: 50px;
  }
`

const StLogoLolla = styled(LogoLolla)`
  height: 120px;
  padding: 1px 0 20px;
  animation-name: ${rebotin};
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  animation-duration: 6s;
  animation-iteration-count: infinite;
  @media (max-width: 768px) {
    height: 120px;
  }
`

const StBgLolla = styled.img`
  position: absolute;
  display: block;
  max-width: initial;
  width: 1920px;
  height: 1920px;
  transform: scale(1.3) translate3d(-12%, 12%, 0);
  animation-direction: alternate;
  animation: ${move} 30s infinite;
  transform-origin: center center;
  animation-timing-function: ease;
  z-index: -1;
`

const CustomLollazo = () => {
  return (
    <Wrap>
      <Center>
        <Cols>
          <StCulto schema="white" />
        </Cols>
        <ColLolla>
          <StLogoLolla />
        </ColLolla>
      </Center>
      <Presented>
        {/* <PresentedWrap>
            <span>Presentado por: </span>
            <a
              href="https://www.wa2.cl/?utm_source=latercerapaula&utm_medium=web&utm_campaign=2022"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://www.latercera.com/resizer/Oqf0OLiRHjYGCkDtr5kj20OBNk8=/arc-anglerfish-arc2-prod-copesa/public/AYWNA6GQL5F23B3JTDCAWGSSEI.png
"
                alt="Wados"
              />
            </a>
          </PresentedWrap> */}
      </Presented>
      <StBgLolla src={BgLolla} />
    </Wrap>
  )
}

export default CustomLollazo
