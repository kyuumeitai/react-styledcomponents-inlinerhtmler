import React from 'react'
import { Wrap } from './style.css'
import LogoAsiEmpiezaConBajada from './logo-asi-empieza-con-bajada.jsx'

const CustomAsiEmpiezaNetflix = () => {
  return (
    <Wrap>
      <div className="hero-video-wrapper">
        <div className="video-cut-top-bottom">
          <div className="video-proportion-16by9">
            <iframe data-height="315" data-width="560" src="https://rudo.video/vod/bJCryV?volume=0&amp;loop=1"></iframe>
          </div>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/YJR5544SLZDLBNJPFVA4TJJVTU.jpg" />
      </div>
      <span className="bg-vignette"></span>
      <div className="meta-layer">
        <div className="title-wrapper">
          <div className="logo-wrapper">
            <LogoAsiEmpiezaConBajada />
          </div>
          <div className="info-wrapper">
            <div className="supplemental">Ve el capítulo 1</div>
            <div className="episode-title">Sebastián Lelio</div>
            <p className="synopsis">
              Breves lecciones de historia responden las preguntas más acuciantes de la humanidad: ¿de dónde venimos y a dónde vamos?
            </p>
            <div className="video-actions">
              <a className="btn-action" href="#">
                <div className="btn-icon">
                  <div className="btn-icon-play" role="presentation">
                    <svg viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z" fill="currentColor"></path></svg>
                  </div>
                </div>
                <span className="btn-text">REANUDAR</span>
              </a>
              <a className="btn-action" href="#">
                <div className="btn-icon">
                  <div className="btn-icon-play" role="presentation">
                    <svg viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z" fill="currentColor"></path></svg>
                  </div>
                </div>
                <span className="btn-text">VER</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  )
}

export default CustomAsiEmpiezaNetflix