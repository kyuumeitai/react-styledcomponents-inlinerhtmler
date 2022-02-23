import React from 'react'
import Articulo from './Articulo'
import Titulo from './Titulo'
import styled from 'styled-components'
import data from './DataComisiones'

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column: span 1 !important;
  gap: 2rem;
  align-items: flex-start;
  transform: translate3d(0px, 0px, 0px);
  div,
  .ltcolfix {
    grid-column: span 1 !important;
  }
  @media (orientation: portrait) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const colors = [
  '#fee08b',

  '#FFE400',
  // '#fee08b',
  // '#e6f598',
  '#abdda4',
  '#66c2a5',
  '#3288bd',
  '#5e4fa2',
  '#9e0142',
  '#d53e4f',
  '#f46d43',
  '#fdae61',
]

const getColor = (index, luminanceQuantity) => {
  const color = colors[index % colors.length]

  return color
}

const Comision = ({ title, items, index }) => {
  //from index, generate number with 0 prefixes if less than 10
  const indexStr = index < 10 ? `0${index}` : index
  const comision = data.find(comision => comision.numero === index.toString())

  return (
    <Columns>
      <Titulo
        className="com"
        title={title}
        excerpt={comision.fecha}
        index={indexStr}
        mainColor={getColor(index, 0.5)}
        bgColor={getColor(index, 0.8)}
      />
      <div className="lt-colfix">
        {items.map((item, subindex) => {
          return (
            <Articulo
              key={subindex}
              {...item}
              index={indexStr}
              mainColor={getColor(index, 0.5)}
              bgColor={getColor(index, 0.8)}
            />
          )
        })}
      </div>
    </Columns>
  )
}

export default Comision
