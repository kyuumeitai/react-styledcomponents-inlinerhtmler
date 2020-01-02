import React from 'react'
import {StCustomWidget, Content, Bg} from './style.css'

const CustomWidget = () => {
  return (
    <StCustomWidget>
      <Content>
        <p>
          <strong>Conexión China</strong> es un canal que busca visibilizar la <strong>cultura china en Chile</strong> en el año de la conmemoración del <strong>cincuentenario</strong> del establecimiento de las <strong>relaciones entre ambos países</strong>, y forma parte de una <strong>alianza</strong> entre <strong>el Grupo de Medios de China y La Tercera</strong>.
        </p>
      </Content>
      <Bg imgbg='https://www.latercera.com/wp-content/uploads/2019/12/li-yang-5h_dMuX_7RE-unsplash-cut.jpg'>
      </Bg>
    </StCustomWidget>
  )
}

export default CustomWidget