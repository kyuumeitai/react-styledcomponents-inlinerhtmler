import React from 'react'
import LogoTorpedo from './LogoTorpedo'
import BtnDescarga from './BtnDescarga'
import ImgMuchaches from './ImgMuchaches'
import TxtClaim from './TxtClaim'

import styled from 'styled-components'

const Wrap = styled.div`
  border: 1px solid #ccc;
  padding: 2rem;
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  overflow: hidden;
  gap: 2rem;
  background-color: #ffeb98;
  .div1 {
    grid-area: 1 / 1 / 4 / 4;
  }
  .div2 {
    grid-area: 1 / 4 / 2 / 7;
  }
  .div3 {
    grid-area: 2 / 4 / 3 / 7;
  }
  .div4 {
    grid-area: 3 / 4 / 4 / 7;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
  @media (max-width: 600px) {
    .div1 {
      grid-area: 2 / 1 / 3 / 3;
    }
    .div2 {
      grid-area: 1 / 1 / 2 / 7;
    }
    .div3 {
      grid-area: 2 / 3 / 3 / 7;
    }
    .div4 {
      grid-area: 3 / 1 / 4 / 7;
    }
  }
`

const CustomWidgetMatch = () => {
  return (
    <Wrap>
      <div className="div1">
        <a
          href="https://bit.ly/3RCn7j8"
          target="_blank"
          rel="noopener noreferrer">
          <ImgMuchaches />
        </a>
      </div>
      <div className="div2">
        <a
          href="https://bit.ly/3RCn7j8"
          target="_blank"
          rel="noopener noreferrer">
          <LogoTorpedo />
        </a>
      </div>
      <div className="div3">
        <a
          href="https://bit.ly/3RCn7j8"
          target="_blank"
          rel="noopener noreferrer">
          <TxtClaim />
        </a>
      </div>
      <div className="div4">
        <a
          href="https://bit.ly/3RCn7j8"
          target="_blank"
          rel="noopener noreferrer">
          <BtnDescarga />
        </a>
      </div>

      {/* <Btn
        className="match-btn"
        href="https://interactivo.latercera.com/match-constituyente-el-barometro-del-plebiscito/?utm_source=widgetLTBtn&utm_medium=web"
        target="_blank"
        rel="noopener noreferrer"></Btn> */}
    </Wrap>
  )
}

export default CustomWidgetMatch
