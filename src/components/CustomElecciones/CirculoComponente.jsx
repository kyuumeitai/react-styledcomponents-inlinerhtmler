import React from 'react'
import Circulos from './Circulos'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  background-color: #edecec;
  .wrap {
    max-width: 1300px;
    margin: 0 auto;
  }
  #g-pag-4-large {
    display: block;
  }
  #g-pag-4-small {
    display: none;
  }
  @media (max-width: 768px) {
    #g-pag-4-large {
      display: none;
    }
    #g-pag-4-small {
      display: block;
    }
  }
`

const CirculoComponente = () => {
  return (
    <Wrap>
      <div className="wrap">
        <Circulos />
      </div>
    </Wrap>
  )
}

export default CirculoComponente
