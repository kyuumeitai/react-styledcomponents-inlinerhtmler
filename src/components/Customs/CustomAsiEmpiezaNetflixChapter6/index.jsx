import React from 'react'
import {
  Wrap,
  WrapChapter,
  WrapMenu,
} from '../CustomAsiEmpiezaNetflix/style.css'
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
                  src="https://rudo.video/vod/bNOnJk?stv=0"
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
              <small>Capítulo 06:</small> Francisca Valenzuela
            </h2>
            <p>
              Francisca Valenzuela habla rápido, y a la misma velocidad crea. Ya
              sea escribiendo las ideas en un papel o en las notas del celular,
              las canciones en su cabezas no paran. “Le ponen luz a algo que tu
              no estás viendo, pero sabes que está ahí”, cuenta.
            </p>
            <p>
              A 14 años de “peces”, su primer sencillo y el que escribió una
              tarde después del colegio -guitarra, lápiz y cuaderno en mano-, la
              cantautora reflexiona sobre su carrera, el impulso creativo que la
              ha acompañado desde que tiene memoria y ese momento en que todo se
              configura para que una composición salga de una sentada.
            </p>
            <p>
              Te presentamos el penúltimo capítulo de Así Empieza. Recuerda que
              puedes ver aquí los capítulos las veces que quieras.
            </p>
          </div>
          <CustomSharer
            url="https://www.latercera.com/asi-empieza/06-francisca-valenzuela/"
            description="Capítulo 6: Francisca Valenzuela - Cantautora"
            hashtags="AsíEmpieza"
          />
        </div>
      </WrapChapter>
      <CustomNetflixChapters />
    </Wrap>
  )
}

export default CustomAsiEmpiezaNetflix
