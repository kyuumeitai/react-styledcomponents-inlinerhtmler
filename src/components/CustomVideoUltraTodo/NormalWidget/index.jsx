import React from 'react'
import { Wrap } from '../style.css'
import Hero from '../HeroBanner'
const videomobile = `https://ads-lt.digitalproserver.com/ads/lab/ultra-todo/intro-desktop-comp-v2.mp4`
const videodesktop = `https://ads-lt.digitalproserver.com/ads/lab/ultra-todo/intro-desktop-comp-v2.mp4`
const image =
  'https://www.latercera.com/resizer/o1MrAkNSap319VEjgE9yoKguPYQ=/arc-anglerfish-arc2-prod-copesa/public/JQCYQKHNTVA5HAUQNCM3BA3PWY.jpg'

const metadata = {
  logo: 'https://www.latercera.com/resizer/6nNsneiQ1HThThlJveV0zTMW_pw=/arc-anglerfish-arc2-prod-copesa/public/H6FCZSAEEZGK7BKIHCATD5VY4M.png',
  title: 'Ultra Todo',
  supplemental: 'Disponible Capítulo 3: <br />Mujeres con Beat',
  synopsis:
    'Desde Daddy Yankee a Bad Bunny, un viaje que va desde los inicios del género, pasando por todas sus mutaciones, que han derivado en una nueva generación de músicos chilenos que se abren al mundo.',
  mainlink:
    'https://www.latercera.com/ultra-todo/03-mujeres-con-beat/?utm_source=widgetLT&utm_medium=web&utm_campaign=ultra-todo',

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
