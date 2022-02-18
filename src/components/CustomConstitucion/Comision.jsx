import React from 'react'
import Articulo from './Articulo'

const Comision = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {items.map((item, index) => {
          return <Articulo key={index} {...item} />
        })}
      </div>
    </div>
  )
}

export default Comision
