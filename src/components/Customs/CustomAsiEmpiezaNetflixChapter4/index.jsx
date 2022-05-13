import React from 'react'
import {
  Wrap,
  WrapChapter,
  WrapMenu,
} from '../CustomAsiEmpiezaNetflix/style.css'
import LogoAsiEmpiezaConBajada from '../CustomAsiEmpiezaNetflix/logo-asi-empieza-con-bajada.jsx'
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
                  src="https://rudo.video/vod/bNOn6G?stv=0"
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
              <small>Capítulo 04:</small> Alex Anwandter
            </h2>
            <p>
              “Si uno analiza demasiado lo que está creando, mientras lo estás
              creando, empiezan a colarse en el proceso cosas que no tienen que
              ver con el arte mismo, sino con inseguridades, con comparaciones
              con otras cosas”, dice el cantautor chileno, Alex Anwandter.
            </p>
            <p>
              ¿Cómo protege esa idea inicial? ¿Cómo la potencia hasta
              transformarla en una canción? En este nuevo capítulo de Así
              Empieza, el artista devela las situaciones que lo inspiran y el
              rol de la vulnerabilidad en su proceso creativo.
            </p>
          </div>
          <CustomSharer
            url="https://www.latercera.com/asi-empieza/04-alex-anwandter/"
            description="Capítulo 4: Alex Anwandter - Cantautor"
            hashtags="AsíEmpieza"
          />
        </div>
      </WrapChapter>
      <CustomNetflixChapters />
    </Wrap>
  )
}

export default CustomAsiEmpiezaNetflix
