import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Culto } from 'copesa-logos'
import LogoMaraton from '../output/LogoMaraton'
import LogoDecathlon from '../output/LogoDecathlon'

const BgMaraton = `https://www.latercera.com/resizer/BgYDSycgR3wfavN5rzvGlo-Ty5Y=/arc-anglerfish-arc2-prod-copesa/public/B5KGUSG5KRFCPD2KXANIALDHOU.png`
const BgPic = `https://www.latercera.com/resizer/Dez9Qs6wH25qGluVBw3xJJTEbSE=/arc-anglerfish-arc2-prod-copesa/public/POTCAGW5KFE4VCBYBZB5Z2IT5Q.jpg`

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
  /* background: #20247c; */
  /* background-color: #efa400; */

  background-image: linear-gradient(252deg, #20247c, #efa400);
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
  /* background-color: white; */
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
  position: relative;
  z-index: 2;
  min-width: 1200px;
  padding: 10px 0;
  @media (max-width: 1200px) {
    min-width: 100%;
    padding: 10px;
  }
`

const ColMaraton = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column: span 1 !important;

  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  svg {
    margin-right: 0px;
  }
  > div:last-child {
    display: flex;
    justify-content: flex-end;
    span {
      font-size: 12px;
      color: white;
      text-transform: uppercase;
      margin-right: 5px;
      font-family: 'Roboto Condensed', franklin-gothic-urw, helvetica, arial;
    }
    @media (max-width: 900px) {
      flex-direction: column;
      align-items: flex-end;
    }
  }
  /* @media (max-width: 768px) {
    margin-top: -14px;
    margin-bottom: -12px;
  } */
`

const StLogoDecathlon = styled(LogoDecathlon)`
  height: 30px;
  @media (max-width: 768px) {
    height: 15px;
  }
`

const StLogoMaraton = styled(LogoMaraton)`
  height: 120px;
  padding: 1px 0;
  animation-name: ${rebotin};
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  animation-duration: 6s;
  animation-iteration-count: infinite;
  @media (max-width: 768px) {
    height: 120px;
  }
`

const StBgMaraton = styled.div`
  position: absolute;
  display: block;
  max-width: initial;
  width: 1920px;
  height: 1920px;
  transform: scale(1.3) translate3d(-12%, 12%, 0);
  animation-direction: alternate;
  animation: ${move} 20s infinite;
  transform-origin: center center;
  animation-timing-function: ease;
  z-index: 1;
  filter: brightness(120%) contrast(144%) saturate(200%) blur(50px);
  opacity: 0.9;
  background-image: url(${BgMaraton});
`

const StPic = styled.img`
  position: absolute;
  display: block;
  object-position: center center;
  object-fit: contain;
  filter: grayscale(100%) blur(4px);
`

const CustomMaratonazo = () => {
  return (
    <Wrap>
      <Center>
        <ColMaraton>
          <div>
            <StLogoMaraton />
          </div>
          <div>
            <span>Presentado por:</span>
            <StLogoDecathlon />
          </div>
        </ColMaraton>
      </Center>

      <StBgMaraton />
      <StPic src={BgPic} />
    </Wrap>
  )
}

export default CustomMaratonazo
