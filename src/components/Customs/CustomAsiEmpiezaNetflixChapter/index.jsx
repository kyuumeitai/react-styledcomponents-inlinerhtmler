import React from 'react'
import { Wrap, WrapChapter, WrapMenu } from '../CustomAsiEmpiezaNetflix/style.css'
import LogoAsiEmpiezaConBajada from './logo-asi-empieza-con-bajada.jsx'
import CustomNetflixChapters from '../CustomNetflixChapters'

const CustomAsiEmpiezaNetflix = () => {
  return (
    <Wrap>
      <WrapChapter>
        <div className="video-wrapper">
          <div className="hero-video-wrapper">
            <div className="video-cut-top-bottom">
              <div className="video-proportion-16by9">
                <iframe id="vrudo" class="vrudo" src="https://rudo.video/vod/bJEzkl" width="560" height="315" allowscriptaccess="always" allowfullscreen="true" webkitallowfullscreen="true" frameborder="0" scrolling="no" allow="autoplay; fullscreen" ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="video-description">
          <div className="meta-description">
            <h2>
              <small>Capítulo 01:</small> Sebastián Lelio</h2>
            <p>“Siempre pienso cuando nacen las tortugas y corren al agua antes de que se las coman los pájaros. Hay algo de eso con las ideas para mí”, reflexiona el cineasta Sebastián Lelio, ganador del Oscar a Mejor película extranjera por Una mujer fantástica.</p>
            <p>En este capítulo de Así Empieza, el director hace un recorrido por su proceso creativo: desde cómo nace la idea hasta que termina en la pantalla grande. ¿Cómo sabe cuál vale la pena perseguir? Descúbrelo acá.</p>
          </div>
        </div>
      </WrapChapter>
      <CustomNetflixChapters />
    </Wrap >
  )
}

export default CustomAsiEmpiezaNetflix