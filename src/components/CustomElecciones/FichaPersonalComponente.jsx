import React from 'react'
import FichaPersonal from './FichaPersonal'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  background-color: #edecec;
  .wrap {
    max-width: 1300px;
    margin: 0 auto;
  }
  #g-pag-ficha-personal-large {
    display: block;
  }
  #g-pag-ficha-personal-small {
    display: none;
  }
  @media (max-width: 768px) {
    #g-pag-ficha-personal-large {
      display: none;
    }
    #g-pag-ficha-personal-small {
      display: block;
    }
  }
`

const FichaPersonalComponente = () => {
  return (
    <Wrap>
      <div className="wrap">
        <FichaPersonal />
      </div>
    </Wrap>
  )
}

export default FichaPersonalComponente
