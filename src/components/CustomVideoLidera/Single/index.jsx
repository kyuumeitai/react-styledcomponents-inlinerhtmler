import React from 'react'
import { Wrap } from '../style.css'

import Player from '../Player'
import Chapters from '../Chapters'
import Footer from '../Footer'

import { data, metadata } from '../Data/lidera'

const VideoHome = () => {
  const chapter = data[15]

  return (
    <Wrap>
      <Player chapter={chapter} sitemetadata={metadata} />
    </Wrap>
  )
}

export default VideoHome
