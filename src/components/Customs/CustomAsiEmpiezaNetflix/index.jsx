import React from 'react'
import { Wrap } from './style.css'
import LogoAsiEmpiezaConBajada from './logo-asi-empieza-con-bajada.jsx'

const CustomAsiEmpiezaNetflix = () => {
  return (
    <Wrap>
      <div className="hero-image-wrapper">
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/YJR5544SLZDLBNJPFVA4TJJVTU.jpg" />
      </div>
      <span className="bg-vignette"></span>
      <div className="meta-layer">
        <div className="title-wrapper">
          <div className="logo-wrapper">
            <LogoAsiEmpiezaConBajada />
          </div>
        </div>
      </div>
      <h1>Así empieza netflix</h1>
    </Wrap>
  )
}

export default CustomAsiEmpiezaNetflix