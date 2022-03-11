import React from 'react'
import HistorialPolitico from './HistorialPolitico'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  background-color: #edecec;
  .wrap {
    max-width: 1300px;
    margin: 0 auto;
  }
  #g-Elecciones-2021---Presidenciables-Boric-large {
    display: block;
  }
  #g-Elecciones-2021---Presidenciables-Boric-small {
    display: none;
  }
  @media (max-width: 768px) {
    #g-Elecciones-2021---Presidenciables-Boric-large {
      display: none;
    }
    #g-Elecciones-2021---Presidenciables-Boric-small {
      display: block;
    }
  }
`

const HistorialPoliticoComponente = () => {
  return (
    <Wrap>
      <div className="wrap">
        <HistorialPolitico />
      </div>
    </Wrap>
  )
}

export default HistorialPoliticoComponente
