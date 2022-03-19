import React from 'react'
import styled, { keyframes } from 'styled-components'
import LogoCopihue from '../output/LogoCopihueLacuarta'
import Collage from '../Collage'
import Charly from '../output/Charly'

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

  > div {
    grid-column: span 1 !important;
    > div {
      grid-column: span 1 !important;
    }
  }
  @media (max-width: 768px) {
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: auto;
  }
`

const StText = styled.div`
  font-size: 4rem;
  text-transform: uppercase;
  display: block;
  line-height: 0.8;
  background-color: white;
  padding: 1.5rem 1rem 0.5rem;
  text-align: center;
  border-radius: 1rem;
  border: 3px solid black;
  box-shadow: 6px 7px 0 0 black;
  position: relative;
  font-weight: bold;
  font-family: 'Roboto Condensed Bold', sans-serif;
  letter-spacing: -2px;
  small {
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    font-size: 16px;
    text-transform: uppercase;
    top: 5px;
    text-align: center;
    letter-spacing: 1px;
  }
`

const StBgLolla = styled(Collage)`
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

const ColCharly = styled.div`
  position: relative;
  z-index: 2;
  margin-right: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 60% 39%;
    align-items: center;
  }
`

const StLogoCopihue = styled(LogoCopihue)`
  background-color: #0aa34a;
  padding: 10px 1px 10px 10px;
  height: 100px;
  border-radius: 10px;
  border: 3px solid white;
  margin-top: -30px;
  animation-name: ${rebotin};
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  animation-duration: 6s;
  animation-iteration-count: infinite;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    height: 90px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
  }
`
const Cols = styled.div``

const Button = styled.a`
  margin-top: 15px;
  font-size: 4rem;
  display: block;
  line-height: 0.8;
  background-color: #0aa34a;
  padding: 1rem 1rem 0.5rem;
  text-align: center;
  border-radius: 1rem;
  border: 3px solid black;
  box-shadow: 6px 7px 0 0 black;
  color: #fcc903;
  letter-spacing: -2px;
  text-shadow: 4px 4px 0 black;
  font-weight: bold;
  font-family: 'Roboto Condensed Bold', sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  will-change: transform;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`

const CustomLollazo = () => {
  return (
    <Wrap>
      <Center>
        <ColCharly>
          <Charly />
          <StLogoCopihue />
        </ColCharly>
        <Cols>
          <StText>
            <small>Queda:</small>{' '}
            <span id="the-final-countdown-turururu">¡Muy poco!</span>
          </StText>
          <Button
            href="https://www.copihuedeoro.cl/?utm_source=widget&utm_medium=web&utm_campaign=l4countdown"
            target="_blank"
            rel="noopener noreferrer">
            Vota aquí
          </Button>
        </Cols>
      </Center>
      <StBgLolla mainColor="#FCC903" bgColor="#E32417" />
    </Wrap>
  )
}

export default CustomLollazo
