import React from 'react'
import { Wrap } from '../style.css'
import Hero from '../HeroBanner'
const videomobile = `https://ads-lt.digitalproserver.com/ads/lab/ultra-todo/intro-desktop-comp-v2.mp4`
const videodesktop = `https://ads-lt.digitalproserver.com/ads/lab/ultra-todo/intro-desktop-comp-v2.mp4`
const image =
  'https://www.latercera.com/ultra-todo/04-como-se-crea-una-estrella/?utm_source=widget&utm_medium=web&utm_campaign=ultra-todo'

const metadata = {
  logo: 'https://www.latercera.com/resizer/6nNsneiQ1HThThlJveV0zTMW_pw=/arc-anglerfish-arc2-prod-copesa/public/H6FCZSAEEZGK7BKIHCATD5VY4M.png',
  title: 'Ultra Todo',
  supplemental: 'Disponible Capítulo 4: <br />Cómo se crea una estrella: La industria y su fandom',
  synopsis:
    '¿Qué tan decisivo es el uso de RRSS en los artistas que emergen y  en los que se consolidan? ¿Importa aún tener sello discográfico y estar en MTV? En este último capítulo, los artistas y la escena hablan sobre lo que se necesita para lograr lo que ellos describen como "pegarse".',
  mainlink:
    'https://www.latercera.com/ultra-todo/04-como-se-crea-una-estrella/?utm_source=widget&utm_medium=web&utm_campaign=ultra-todo',

  btntext: 'Reproducir',
}

const VideoHome = () => {
  return (
    <Wrap>
      <Hero
        desktop={videodesktop}
        mobile={videomobile}
        image={image}
        metadata={metadata}
        className="wrap-small"
      />
    </Wrap>
  )
}

export default VideoHome
