import React from 'react'
import { WrapChapter } from '../style.css'
import Sharer from '../Sharer'

import styled from 'styled-components'

const Btn = styled.a`
  display: inline-block;
  border: 1px solid red;
  border-radius: 3px;
  background-color: #c00;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
  letter-spacing: 0.05em;
  font-size: 14px;
  font-stretch: 100%;
  font-weight: 500;
  padding: 10px 16px;
  font-family: Roboto, Noto, sans-serif;
  text-transform: uppercase;
  text-decoration: none !important;
  text-align: center;
  margin-bottom: 2rem;
`

const ViewOnYoutubeButton = ({ url }) => {
  return (
    <Btn href={url} target="_blank" rel="noopener noreferrer">
      Ver conversación extendida en YouTube
    </Btn>
  )
}

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
    extendedVideo,
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
          {extendedVideo && <ViewOnYoutubeButton url={extendedVideo} />}
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
        <Sharer
          url={url}
          description={`${pretitle}: ${name} ${title} - Lidera - La Tercera`}
          hashtags="Lidera"
        />
      </div>
    </WrapChapter>
  )
}

export default Player
