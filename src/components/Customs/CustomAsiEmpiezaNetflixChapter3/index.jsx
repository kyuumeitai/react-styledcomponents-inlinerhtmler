import React from 'react'
import {
  Wrap,
  WrapChapter,
  WrapMenu,
} from '../CustomAsiEmpiezaNetflix/style.css'
import LogoAsiEmpiezaConBajada from './logo-asi-empieza-con-bajada.jsx'
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
                <iframe
                  id="vrudo"
                  class="vrudo"
                  src="https://rudo.video/vod/bYcMJ38e7B5?stv=0"
                  width="560"
                  height="315"
                  allowscriptaccess="always"
                  allowfullscreen="true"
                  webkitallowfullscreen="true"
                  frameborder="0"
                  scrolling="no"
                  allow="autoplay; fullscreen"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="video-description">
          <div className="meta-description">
            <h2>
              <small>Capítulo 03:</small> Paulina Villalobos
            </h2>
            <p>
              La mitad de nuestra vida ocurre en la oscuridad. Son 12 horas en
              las que la luz nocturna inunda las calles y, aún así, las ciudades
              han sido construidas sin considerar este ciclo natural. La
              diseñadora de iluminación, Paulina Villalobos, ha dedicado su
              carrera a investigar la luz, los efectos que tiene sobre el ser
              humano y nuestro entorno. ¿Cómo iluminar de manera más amigable
              con la biodiversidad nocturna, de manera eficiente y sin perder el
              contacto con las estrellas? ¿Cómo se relaciona la luz y el color
              con las emociones humanas?
            </p>
          </div>
          <CustomSharer
            url="https://www.latercera.com/asi-empieza/03-paulina-villalobos/"
            description="Capítulo 3: Paulina Villalobos - Lightning Designer"
            hashtags="AsíEmpieza"
          />
        </div>
      </WrapChapter>
      <CustomNetflixChapters />
    </Wrap>
  )
}

export default CustomAsiEmpiezaNetflix
