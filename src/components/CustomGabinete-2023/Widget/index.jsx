import React from 'react'
import Sharer from '../Sharer'
import styled from 'styled-components'
import Face from '../Face'
import data from '../Data'
import LogoGabineteChico from '../LogoGabineteChico'

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
  padding: 1px 15px 30px;
  border-radius: 25px;
  background: linear-gradient(#fbe1d1 0%, #e6f8ff 80%, #e6f8ff 100%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

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
    padding: 0 10px;
  }
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
  grid-column: span 1 !important;
  > article {
    grid-column: span 1 !important;
  }
  @media (orientation: portrait) {
    grid-template-columns: repeat(3, 30%);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 23%);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 30%);
  }
`

const StLogo = styled.h2`
  display: block;
  width: 100%;
  .logowr {
    position: relative;
    &::after,
    &::before {
      content: '';
      border-top: 1px solid black;
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

const Header = () => {
  return (
    <HeaderWrap>
      <StLogo>
        <div className="logowr">
          <a href="https://www.latercera.com/el-gabinete-de-gabriel-boric/">
            <LogoGabineteChico />
          </a>
        </div>
      </StLogo>
    </HeaderWrap>
  )
}

const Body = () => {
  return (
    <Wrap>
      <Header />

      {/* <WrapBig>
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
      </WrapBig> */}
      <WrapSmall>
        {data.map((item, index) => {
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
      <Body />
    </div>
  )
}

export default Widget
