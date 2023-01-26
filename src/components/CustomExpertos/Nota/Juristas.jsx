import React from 'react'
import Sharer from '../Sharer'
import styled from 'styled-components'
import Ficha from '../Ficha'
import data from '../Data'
import LogoGabineteChico from '../LogoGabineteChico'

const Header = ({ children }) => {
  return (
    <HeaderWrap>
      <StLogo>
        <div className="logowr">{children}</div>
      </StLogo>
    </HeaderWrap>
  )
}

const Body = () => {
  const technicians = data.filter(item => item.origen === 'Comité')
  return (
    <Wrap>
      <Header>
        <h3>Comité Técnico de Admisibilidad</h3>
      </Header>
      <WrapSmall>
        {technicians.map((item, index) => {
          return (
            <Ficha
              key={index}
              nombre={item.nombre}
              apellido={item.apellido}
              edad={item.edad}
              profesion={item.profesion}
              universidad={item.universidad}
              filiacion={item.filiacion}
              cupo={item.cupo}
              posgrado={item.posgrado}
              cargoactual={item.cargoactual}
              cargosanteriores={item.cargosanteriores}
              foto={item.foto}
              url={item.url}
              origen={item.origen}
              size={'small'}
            />
          )
        })}
      </WrapSmall>
    </Wrap>
  )
}

const Widget = () => {
  return (
    <div>
      <Body />
    </div>
  )
}

const HeaderWrap = styled.div`
  margin: 2rem auto;
  text-align: center;
  h1 {
    line-height: 1.1;
    a {
      text-decoration: none;
      color: black;
      transition: all 0.3s;
      &:hover {
        color: #666;
      }
    }
  }
  .sharer {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`

const Wrap = styled.div`
  padding: 1px 5px 20px;
  color: black;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  /* border-radius: 25px;
  background: linear-gradient(#fbe1d1 0%, #e6f8ff 80%, #e6f8ff 100%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); */
  .hoja-title {
    text-align: center;
  }
  @media (max-width: 768px) {
    padding: 1px 5px 20px;
  }
`

const WrapBig = styled.div`
  display: grid;
  padding: 0 30px;
  @media (max-width: 768px) {
    padding: 0 5px;
  }
  margin-bottom: 30px;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  grid-column: span 1 !important;
  > article {
    grid-column: span 1 !important;
  }
  @media (orientation: portrait) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const WrapSmall = styled.div`
  display: grid;
  padding: 0 30px;
  @media (max-width: 768px) {
    padding: 0 0;
  }
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  grid-column: span 1 !important;
  > article {
    grid-column: span 1 !important;
  }
  /* @media (orientation: portrait) {
    grid-template-columns: repeat(2, 48%);
  } */
  /* @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 48%);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`

const StLogo = styled.h2`
  display: block;
  width: 100%;
  color: white;

  .logowr {
    position: relative;
    &::after,
    &::before {
      content: '';
      border-top: 1px solid white;
      position: absolute;
      top: 50%;
    }
    &::after {
      left: 0;
      width: calc(50% - 230px);
    }
    &::before {
      right: 0;
      width: calc(50% - 230px);
    }
  }
  a {
    display: block;
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px) {
      max-width: 300px;
    }
  }
  svg {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

export default Widget
