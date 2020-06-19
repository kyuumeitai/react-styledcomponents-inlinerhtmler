import React from 'react'
import { Wrap, WrapChapter, WrapMenu } from '../CustomAsiEmpiezaNetflix/style.css'
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
                <iframe id="vrudo" class="vrudo" src="https://rudo.video/vod/bJJO5G" width="560" height="315" allowscriptaccess="always" allowfullscreen="true" webkitallowfullscreen="true" frameborder="0" scrolling="no" allow="autoplay; fullscreen" ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="video-description">
          <div className="meta-description">
            <h2>
              <small>Capítulo 05:</small> Caiozzama</h2>
            <p>Durante el estallido social y los meses que lo siguieron, las calles de Santiago Centro se llenaron de intervenciones artísticas. Algunas de las más fotografiadas fueron los collages del artista nacional Claudio Caiozzi, más conocido como Caiozzama.</p>
            <p>“Pasa mucho con mis obras, que a la gente de repente no le gustan, las rompen, las intervienen, agregan cosas que las hacen mejor. O le agregan frases. Cosas que no pasarían en una galería”</p>
            <p>Y esa es la gracia de sus obras: están ahí, en la calle. ¿De dónde nace la idea para sus composiciones? Descúbrelo en este capítulo de Así Empieza.</p>
          </div>
          <CustomSharer url="https://www.latercera.com/asi-empieza/05-caiozzama/" description="Capítulo 5: Caiozzama - Artista" hashtags="AsíEmpieza" />
        </div>
      </WrapChapter>
      <CustomNetflixChapters />

    </Wrap >
  )
}

export default CustomAsiEmpiezaNetflix