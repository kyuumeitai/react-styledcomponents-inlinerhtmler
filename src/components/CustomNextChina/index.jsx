import React from 'react'
import {StCustomWidget, Content, Bg} from './style.css'

const CustomWidget = () => {
  return (
    <StCustomWidget>
      <Content>
        <h1>
          <img src="https://www.latercera.com/wp-content/uploads/2019/12/logo-conexion-china-big.png" alt="Conexión China" />
        </h1>
      </Content>
      <Bg imgbg='https://www.latercera.com/wp-content/uploads/2019/12/li-yang-5h_dMuX_7RE-unsplash-cut.jpg'>
      </Bg>
    </StCustomWidget>
  )
}

export default CustomWidget