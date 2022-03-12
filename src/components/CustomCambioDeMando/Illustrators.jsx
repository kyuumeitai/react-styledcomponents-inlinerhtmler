import React from 'react'
import styled from 'styled-components'

import HistorialVotaciones from './illustrators/historialvotaciones'
import FichaPersonal from './illustrators/fichapersonal'
import HistorialPolitico from './illustrators/historialpolitico'
import AmigosTrazado from './illustrators/amigos-trazado'

const Wrap = styled.div`
  position: relative;
  background-color: #edecec;
  .wrap {
    max-width: 1300px;
    margin: 0 auto;
  }

  #g-fichapersonal-large,
  #g-historialpolitico-large,
  #g-historialvotaciones-large,
  #g-amigos-trazado-large {
    display: block;
  }
  #g-fichapersonal-small,
  #g-historialpolitico-small,
  #g-historialvotaciones-small,
  #g-amigos-trazado-small {
    display: none;
  }
  @media (max-width: 768px) {
    #g-fichapersonal-large,
    #g-historialpolitico-large,
    #g-historialvotaciones-large,
    #g-amigos-trazado-large {
      display: none;
    }
    #g-fichapersonal-small,
    #g-historialpolitico-small,
    #g-historialvotaciones-small,
    #g-amigos-trazado-small {
      display: block;
    }
  }
`

const Illustrators = () => {
  return (
    <Wrap>
      <div className="wrap">
        <AmigosTrazado />
      </div>
    </Wrap>
  )
}

export default Illustrators
