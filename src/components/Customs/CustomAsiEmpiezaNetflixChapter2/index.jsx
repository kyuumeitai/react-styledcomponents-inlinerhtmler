import React from 'react'
import { Wrap, WrapChapter, WrapMenu } from '../CustomAsiEmpiezaNetflix/style.css'
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
                <iframe id="vrudo" class="vrudo" src="https://rudo.video/vod/bJENgx" width="560" height="315" allowscriptaccess="always" allowfullscreen="true" webkitallowfullscreen="true" frameborder="0" scrolling="no" allow="autoplay; fullscreen" ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="video-description">
          <div className="meta-description">
            <h2>
              <small>Capítulo 02:</small> Susannah Buchan</h2>
            <p>Las ballenas azules cantan. Y no sólo eso: cada grupo o población de ballenas tiene un dialecto distinto, un canto particular. ¿Cuál es la melodía de las ballenas azules de Chile? La oceanógrafa, Sussanah Buchan, llegó a Chile hace 13 años para responder esta pregunta y entender cómo y para qué se comunican los mamíferos más grandes del mundo, los únicos animales que nunca han podido ser encerrados por los humanos.</p>
            <p>En este segundo capítulo de Así Empieza, la científica hace un recorrido de lo que significa poder escuchar el sonido biológico más poderoso del mundo, una mezcla entre arte y ciencia. “Yo creo que la vinculación de la ciencia con el arte es muy simple, porque el arte también busca responder preguntas”, dice la científica inglesa. “Finalmente, el ser humano se caracteriza por la curiosidad”.</p>
          </div>
          <CustomSharer url="https://www.latercera.com/asi-empieza/02-susannah-buchan/" description="Capítulo 2: Susannah Buchan - Oceanógrafa" hashtags="AsíEmpieza" />
        </div>
      </WrapChapter>
      <CustomNetflixChapters />
    </Wrap >
  )
}

export default CustomAsiEmpiezaNetflix