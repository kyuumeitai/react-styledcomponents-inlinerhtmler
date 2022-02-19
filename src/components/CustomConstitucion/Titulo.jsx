import React from 'react'
import styled from 'styled-components'

const TituloStyled = styled.div`
  position: relative;
  overflow: hidden;
  h2 {
    line-height: 1.1;
    font-size: 30px;
  }
  .numberbg {
    font-size: 25vw;
    position: absolute;
    top: -3rem;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 1;
    display: block;
    letter-spacing: -1rem;
    z-index: -1;
    color: ${props => (props.mainColor ? props.mainColor : '#ccc')};
  }
`

const Titulo = ({ title, excerpt, index, mainColor, bgColor }) => {
  return (
    <TituloStyled bgColor={bgColor} mainColor={mainColor}>
      <h2>
        <small className="amano">{index}:</small>
        {title}
      </h2>
      <p>{excerpt}</p>
      <span className="numberbg">{index}</span>
    </TituloStyled>
  )
}

export default Titulo
