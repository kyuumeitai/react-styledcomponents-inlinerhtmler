import React from 'react'
import { Wrap } from '../style.css'
import Hero from '../Hero'
import { desktop, mobile, image, metadata, data } from '../Data/lidera'

const VideoHome = () => {
  return (
    <Wrap>
      <Hero
        desktop={desktop}
        mobile={mobile}
        image={image}
        metadata={metadata}
      />
    </Wrap>
  )
}

export default VideoHome
