import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Culto } from 'copesa-logos'
import LogoParra from '../output/LogoParraBlancoSimple'

const Wrap = styled.div`
  grid-column: 1 / -1 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-color: #038fff;
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
  justify-content: space-between;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
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

const ColParra = styled.div`
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
  height: 60px;
  @media (max-width: 768px) {
    height: 40px;
  }
`

const StLogoParra = styled(LogoParra)`
  height: 80px;
  padding: 5px 0;

  @media (max-width: 768px) {
    height: 60px;
  }
`

const CustomParrazo = () => {
  return (
    <Wrap>
      <Center>
        <ColParra>
          <StLogoParra />
        </ColParra>
        <Cols>
          <StCulto schema="white" />
        </Cols>
      </Center>
    </Wrap>
  )
}

export default CustomParrazo
