import React from 'react'
import SvgLogoPaulaArquetipos from './output/LogoPaulaArquetipos'
import styled from 'styled-components'
import SvgAltoLasCondes from './output/AltoLasCondes'

const HeroWrap = styled.div`
  background-image: url('https://especiales.latercera.com/8m-files/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
`

const Col = styled.div`
  max-width: 40%;
  padding-top: 20%;
  @media (max-width: 768px) {
    max-width: 50%;
    padding-top: 14%;
  }
`

const Wrap = styled.div``

const PresentadoWrap = styled.div`
  max-height: 100px;
  margin-top: 40px;
  margin-bottom: 10px;
  svg {
    max-height: 100px;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    span {
      margin-right: 10px;
    }
  }
  @media (max-width: 768px) {
    max-height: 60px;
    svg {
      max-height: 60px;
    }
  }
`

const DottedHr = styled.hr`
  border: 0;
  border-top: 3px dotted #d99400;
  margin-left: 100px;
  margin-right: 100px;
`

const Intro = styled.p`
  font-size: 2rem;
  margin: 40px 100px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 20px 10px;
    font-size: 18px;
  }
`

const PresentadoPor = () => {
  return (
    <PresentadoWrap>
      <p>
        <span>Presentado por:</span> <SvgAltoLasCondes />
      </p>
    </PresentadoWrap>
  )
}

const Hero = () => {
  return (
    <Wrap>
      <HeroWrap>
        <Col>
          {' '}
          <SvgLogoPaulaArquetipos />
        </Col>
      </HeroWrap>
      <PresentadoPor />
      <Intro>
        El 8M es el día en que recordamos que la sociedad aún tiene una deuda
        con las mujeres, por la violencia y discriminación que vivimos a diario.
        Por eso salimos a las calles. Pero esta lucha no se desarrolla solo
        desde un lugar. Por eso definimos ocho arquetipos de mujeres que, de
        manera explícita y combativa u otras de manera silenciosa y cotidiana,
        son parte de este movimiento.{' '}
      </Intro>
      <DottedHr />
    </Wrap>
  )
}

export default Hero
