import React from 'react'
import {StCustomWidget, Body} from './style.css'

const CustomWidget = () => {
  return (
    <a href="https://especiales.latercera.com/nike-react-infinity-run/?utm_source=widget&utm_medium=eldeportivo" target="_blank" rel="noopener noreferrer">
      <StCustomWidget>
        <header>
          <div>
            <h2>
              <img src="https://s2.latercera.com/wp-content/uploads/2020/02/txt-react-infinity-run@2x.png" alt=""/>
            </h2>
          </div>
          <div>
            <span> Presentado por </span>
            <img src="https://s2.latercera.com/wp-content/uploads/2020/02/logo-nike-swoosh@2x.png" alt="Nike" />
          </div>
        </header>
        <Body>
          <div>
            <div className="papel">
              <div className="img">
                <img src="https://s2.latercera.com/wp-content/uploads/2020/02/logo-nike-swoosh@2x.png" alt="Nike" />
              </div>
            </div>
            <h2>
              <img src="https://s1.latercera.com/wp-content/uploads/2020/02/txt-nike-react@2x.png" alt="" />
            </h2>
            <span>
              <div className="nbtn">
                <img  src="https://s2.latercera.com/wp-content/uploads/2020/02/btn-ver-mas@2x.png" alt="Ver más" />
              </div>
            </span>
          </div>
          <div>
            <img src="https://s2.latercera.com/wp-content/uploads/2020/02/zapatilla.png" alt="Nike React" />
          </div>
        </Body>
      </StCustomWidget>
    </a>
  )
}

export default CustomWidget