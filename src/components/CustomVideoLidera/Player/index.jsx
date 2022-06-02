import React from 'react'
import { WrapChapter } from '../style.css'
import Sharer from '../Sharer'

const Player = ({ chapter }) => {
  const {
    url,
    img,
    status,
    pretitle,
    name,
    title,
    preview,
    label,
    description,
    iframe,
  } = chapter

  return (
    <WrapChapter>
      <div className="video-wrapper">
        <div className="hero-video-wrapper">
          <div className="video-cut-top-bottom">
            <div className="video-proportion-16by9">
              <iframe
                id="vrudo"
                class="vrudo"
                src={`${iframe}?stv=0`}
                width="560"
                height="315"
                allowscriptaccess="always"
                allowfullscreen="true"
                webkitallowfullscreen="true"
                frameborder="0"
                scrolling="no"
                allow="autoplay; fullscreen"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="video-description">
        <div className="meta-description">
          <h2>
            <small>{pretitle}:</small> {name}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <Sharer
          url={url}
          description={`${pretitle}: ${name} ${title} - Lidera Paula`}
          hashtags="LideraPaula"
        />
      </div>
    </WrapChapter>
  )
}

export default Player
