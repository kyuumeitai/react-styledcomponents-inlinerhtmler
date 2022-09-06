import React from 'react'
import { Wrap } from '../style.css'
import Hero from '../HeroBanner'
const videomobile = `https://ads-lt.digitalproserver.com/ads/lab/lidera-paula/loop-home-banner-comp.mp4`
const videodesktop = `https://ads-lt.digitalproserver.com/ads/lab/lidera-paula/loop-home-banner-comp.mp4`
const image = `https://www.latercera.com/resizer/9-xENSLfEN7gvnVcUFahEoofPyg=/arc-anglerfish-arc2-prod-copesa/public/DGULDB6IPBHVJIXCAXYG25PN54.jpg`

const metadata = {
  logo:
    'https://www.latercera.com/resizer/PdCpQu1erE8K_UpGYS_QKUkSqd0=/arc-anglerfish-arc2-prod-copesa/public/UZUNOYXQOVEIFKQE7AAMDBQEEY.png',
  title: 'Lidera Paula',
  supplemental:
    '<small>Mujeres, trabajo y nuevos liderazgos</small> <br />Capítulo 6: Alessia Injoque',
  synopsis:
    'Un nuevo espacio de conversación que busca conocer las claves detrás del liderazgo femenino y se propone indagar en los desafíos que existen en materia de género y trabajo.',
  mainlink:
    'https://www.latercera.com/lidera/06-alessia-injoque/?utm_source=widgetLT&utm_medium=web&utm_campaign=lidera-paula',

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
