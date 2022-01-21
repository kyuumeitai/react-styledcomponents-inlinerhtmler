import React from 'react'
import Sharer from '../Sharer'
import styled from 'styled-components'
import Face from '../Face'
import data from '../Data'
import LogoGabinete from '../LogoGabinete'

const HeaderWrap = styled.div`
  margin: 2rem auto;
  max-width: 700px;
  text-align: center;
  .sharer {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`

const Wrap = styled.div`
  padding: 0 30px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

const WrapBig = styled.div`
  display: grid;
  padding: 0 30px;
  @media (max-width: 768px) {
    padding: 0 10px;
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
    padding: 0 10px;
  }
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
  grid-column: span 1 !important;
  > article {
    grid-column: span 1 !important;
  }
  @media (orientation: portrait) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Header = () => {
  return (
    <HeaderWrap>
      <LogoGabinete />
      <h1>El Gabinete de Gabriel Boric</h1>
    </HeaderWrap>
  )
}

const Body = () => {
  return (
    <Wrap>
      <WrapBig>
        {data
          .filter((item, index) => index <= 7)
          .map((item, index) => {
            return (
              <Face
                key={index}
                nombre={item.nombre}
                cargo={item.cargo}
                foto={item.foto}
                url={item.url}
                size={'big'}
              />
            )
          })}
      </WrapBig>
      <WrapSmall>
        {data
          .filter((item, index) => index > 7)
          .map((item, index) => {
            return (
              <Face
                key={index}
                nombre={item.nombre}
                cargo={item.cargo}
                foto={item.foto}
                url={item.url}
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
      <Header />
      <Body />
    </div>
  )
}

export default Widget
