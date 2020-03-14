import React from 'react'
import {StCustomWidget, Body} from './style.css'

const CustomWidget = () => {
  return (
    <a href="https://especiales.latercera.com/paula-amigas/?utm_source=widget&utm_medium=paula" target="_blank" rel="noopener noreferrer">
      <StCustomWidget>
        <Body>
          <img className="desktop" src="https://www.paula.cl/wp-content/uploads/2020/02/amigas-desktop.jpg" alt=""/>
          <img className="mobile" src="https://www.paula.cl/wp-content/uploads/2020/02/amigas-mobile.jpg" alt=""/>
        </Body>
      </StCustomWidget>
    </a>
  )
}

export default CustomWidget