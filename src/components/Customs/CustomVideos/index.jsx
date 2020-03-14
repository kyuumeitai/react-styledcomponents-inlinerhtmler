import React from 'react'
import {StCustomWidget, Col, Bg} from './style.css'

const CustomWidget = () => {
  return (
    <StCustomWidget>
      <a href="https://interactivo.latercera.com/los-videos-del-estallido-social/" target="_blank" rel="noopener noreferrer">
        <div className="logo">
          <img src="https://www.latercera.com/wp-content/uploads/2019/12/la-tercera-render-white.png" alt="La Tercera" />
        </div>
        <Col>
          <Bg><img src="https://www.latercera.com/wp-content/uploads/2019/12/txt-videos.png" alt="" /></Bg>
          <img src="https://www.latercera.com/wp-content/uploads/2019/12/videos-estallido.jpg" alt="" />
        </Col>
        <Col>
          <h2>
            <img src="https://www.latercera.com/wp-content/uploads/2019/12/title-videos-estallido.png" alt="Los Videos del estallido social" />
          </h2>

          <div className="footer">
            <span className="button"> Ver Interactivo </span>
          </div>
        </Col>
      </a>
    </StCustomWidget>
  )
}

export default CustomWidget