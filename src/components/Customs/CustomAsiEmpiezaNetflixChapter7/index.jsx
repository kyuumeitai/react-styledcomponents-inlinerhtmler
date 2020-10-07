import React from 'react'
import { Wrap, WrapChapter, WrapMenu } from '../CustomAsiEmpiezaNetflix/style.css'
import CustomNetflixChapters from '../CustomNetflixChapters'
import CustomSharer from '../CustomAsiEmpiezaSharers'

const CustomAsiEmpiezaNetflix = () => {
  return (
    <Wrap>
      <WrapChapter>
        <div className="video-wrapper">
          <div className="hero-video-wrapper">
            <div className="video-cut-top-bottom">
              <div className="video-proportion-16by9">
                <iframe id="vrudo" class="vrudo" src="https://rudo.video/vod/bJMsk4" width="560" height="315" allowscriptaccess="always" allowfullscreen="true" webkitallowfullscreen="true" frameborder="0" scrolling="no" allow="autoplay; fullscreen" ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="video-description">
          <div className="meta-description">
            <h2>
              <small>Capítulo 07:</small> Alejandro Zambra</h2>
            <p>“Creo que el escribir está relacionado siempre con el deseo de dar forma a algo que no tiene tanta forma y que no sabes bien qué es, pero que se presenta como unaobsesión”, dice el autor de las novelas “Formas de volver a casa” y “Bonsái”.</p>
            <p>En este nuevo capítulo de Así Empieza, Alejandro Zambra cuenta -y demuestra- cómo sus ideas se transforman en palabras.</p>
          </div>
          <CustomSharer url="https://www.latercera.com/asi-empieza/07-alejandro-zambra/" description="Capítulo 7: Alejandro Zambra - Escritor" hashtags="AsíEmpieza" />
        </div>
      </WrapChapter>
      <CustomNetflixChapters />

    </Wrap >
  )
}

export default CustomAsiEmpiezaNetflix