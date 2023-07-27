import React from 'react'
import { Wrap } from '../style.css'
import Hero from '../HeroBanner'
import { desktop, mobile, image, metadata, data } from '../Data/lidera'

const VideoHome = () => {
  return (
    <Wrap>
      <Hero
        desktop={desktop}
        image={image}
        metadata={metadata}
        className="wrap-small"
      />
    </Wrap>
  )
}

export default VideoHome
