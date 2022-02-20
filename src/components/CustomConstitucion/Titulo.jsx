import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

const TituloStyled = styled.div`
  max-width: 350px;

  position: sticky;
  top: 4rem;
  margin-bottom: 4rem;
  h2 {
    line-height: 1.1;
    font-size: 30px;
    small {
      font-size: 28px;
      line-height: 0.8;
    }
  }
  .numberbg {
    font-size: 15vw;
    position: absolute;
    top: -6rem;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    line-height: 1;
    display: block;
    letter-spacing: -1rem;
    z-index: -1;
    color: ${props =>
      props.mainColor ? transparentize(0.5, props.mainColor) : '#ccc'};
  }
`

const Wrap = styled.div``

const Titulo = ({ title, excerpt, index, mainColor, bgColor }) => {
  return (
    <TituloStyled bgColor={bgColor} mainColor={mainColor}>
      <Wrap>
        <h2>
          <small className="amano">{index}.</small>
          {title}
        </h2>
        <p>{excerpt}</p>
        <span className="numberbg">{index}</span>
      </Wrap>
    </TituloStyled>
  )
}

export default Titulo
