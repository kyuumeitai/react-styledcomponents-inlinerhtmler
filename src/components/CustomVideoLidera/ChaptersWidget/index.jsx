import React from 'react'
import { Wrap } from '../style.css'

import Chapters from '../Chapters'
import Footer from '../Footer'

import { data } from '../Data/lidera'

const VideoHome = () => {
  return (
    <Wrap>
      <Chapters chapters={data} />
      <Footer />
    </Wrap>
  )
}

export default VideoHome
