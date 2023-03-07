import React from 'react'
import SvgPaula8M from './output/Logo8m2023'
import styled from 'styled-components'
import LogoFalabella from './output/LogoFalabella'

const HeroWrap = styled.div`
  background-image: url('https://www.latercera.com/resizer/EUpDByNJpC_WboXlkG7BmyRvp0I=/arc-anglerfish-arc2-prod-copesa/public/IMDTWY34NRHDJI5D4HKC6ATSKE.jpg');
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
    svg {
      max-width: 80px;
    }
  }
  @media (max-width: 768px) {
    max-height: 60px;
    svg {
      max-height: 60px;
      max-width: 60px;
    }
  }
`

const DottedHr = styled.hr`
  border: 0;
  border-top: 3px dotted #8460a6;
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
        <span>Presentado por:</span> <LogoFalabella />
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
          <SvgPaula8M />
        </Col>
      </HeroWrap>
      <PresentadoPor />
      <Intro>
        En esta nueva versión del 8M queremos hacerle un zoom al éxito femenino
        para visibilizar la red de apoyo que existe en cada una de estas
        historias descubriendo a las mujeres comunes que hay detrás, la
        relevancia de la mentoría, networking, diversidad y cómo encontrar a la
        mujer exitosa que está cerca de ti.{' '}
      </Intro>
      <DottedHr />
    </Wrap>
  )
}

export default Hero
