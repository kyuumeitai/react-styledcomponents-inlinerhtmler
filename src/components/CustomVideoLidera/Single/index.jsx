import React from 'react'
import { Wrap } from '../style.css'

import Player from '../Player'
import Chapters from '../Chapters'
import Footer from '../Footer'

import { data } from '../Data/lidera'

const VideoHome = () => {
  const chapter = data[0]

  return (
    <Wrap>
      <Player chapter={chapter} />
      <Chapters chapters={data} />
      <Footer />
    </Wrap>
  )
}

export default VideoHome
