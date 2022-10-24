import React from 'react'
import { Wrap } from '../style.css'

import Player from '../Player'
import Chapters from '../Chapters'
import Footer from '../Footer'

import { data, metadata } from '../Data/UltraTodo'

const VideoHome = () => {
  const chapter = data[2]

  return (
    <Wrap>
      <Player chapter={chapter} sitemetadata={metadata} />
      <Chapters chapters={data} />
      <Footer />
    </Wrap>
  )
}

export default VideoHome
