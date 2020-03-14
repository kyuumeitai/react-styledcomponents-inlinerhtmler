import React from 'react'
import {StCustomWidget, Content, Bg} from './style.css'

const CustomWidget = () => {
  return (
    <StCustomWidget>
      <Content>
        <h1>
          <img src="https://www.latercera.com/wp-content/uploads/2019/12/logo-conexion-china-big.png" alt="Conexión China" />
        </h1>
        <h1>
          <img src="https://www.latercera.com/wp-content/uploads/2019/12/logo-latercera-white-color.png" alt="La Tercera"/>
        </h1>
      </Content>
      <Bg>
      </Bg>
    </StCustomWidget>
  )
}

export default CustomWidget