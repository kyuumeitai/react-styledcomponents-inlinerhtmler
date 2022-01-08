import React from 'react'
import styled from 'styled-components'

import HistorialVotaciones from './HistorialVotaciones'
import FichaPersonal from './FichaPersonal'
import HistorialPolitico from './HistorialPolitico'
import CirculoPolitico from './CirculoPolitico'

const Wrap = styled.div`
  position: relative;
  background-color: #edecec;
  .wrap {
    max-width: 1300px;
    margin: 0 auto;
  }

  #g-CirculoPolitico-large,
  #g-FichaPersonal-large,
  #g-HistorialPolitico-large,
  #g-HistorialVotaciones-large {
    display: block;
  }
  #g-CirculoPolitico-small,
  #g-FichaPersonal-small,
  #g-HistorialPolitico-small,
  #g-HistorialVotaciones-small {
    display: none;
  }
  @media (max-width: 768px) {
    #g-CirculoPolitico-large,
    #g-FichaPersonal-large,
    #g-HistorialPolitico-large,
    #g-HistorialVotaciones-large {
      display: none;
    }
    #g-CirculoPolitico-small,
    #g-FichaPersonal-small,
    #g-HistorialPolitico-small,
    #g-HistorialVotaciones-small {
      display: block;
    }
  }
`

const Illustrators = () => {
  return (
    <Wrap>
      <div className="wrap">
        <CirculoPolitico />
      </div>
    </Wrap>
  )
}

export default Illustrators
