import React from 'react'
import { WrapMenuFull } from '../CustomAsiEmpiezaNetflix/style.css'

const CustomNetflixChapters = () => {

  return (
    <WrapMenuFull>
      <div className="hero-chapters">
        <div className="chapter available">
          <a href="https://www.latercera.com/asi-empieza/01-sebastian-lelio/" className="chap-wrap">
            <div className="chapter-img">
              <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/ZYVAUS6LAZAGFEIHHSOXBICXTU.jpg" alt="" />
            </div>
            <div className="chapter-info">
              <div className="wrap">
                <h3>
                  <small>Capítulo 01:</small>
                    Sebastián Lelio</h3>
                <p>Cineasta</p>
              </div>
            </div>
            <div className="chapter-iframe">
              <div className="video-proportion-16by9">
                <video src="https://rudo.video/redirector/320/ccc2162da35f15c11df3d9a78dc2a691.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
              </div>
            </div>

          </a>
        </div>

      </div>
    </WrapMenuFull>
  )
}

export default CustomNetflixChapters