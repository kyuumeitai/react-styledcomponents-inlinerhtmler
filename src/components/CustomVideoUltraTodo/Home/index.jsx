import React from 'react'
import { Wrap } from '../style.css'
import Hero from '../Hero'
import Chapters from '../Chapters'
// import Header from '../Header'
import Footer from '../Footer'
import { desktop, mobile, image, metadata, data } from '../Data/UltraTodo'

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
