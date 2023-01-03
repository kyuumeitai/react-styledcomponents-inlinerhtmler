import React from 'react'
import styled from 'styled-components'

const VideoWrap = styled.div`
  &.proportion-16-9 {
    @media (max-width: 768px) {
      display: none;
    }
    iframe {
      aspect-ratio: 16/9;
    }
  }
  &.proportion-9-16 {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
    iframe {
      aspect-ratio: 9/16;
    }
  }
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    object-fit: cover;
  }
`

export const Video = ({ mobile, desktop }) => {
  return (
    <div>
      <VideoPlayer iframe={mobile} proportion="9-16" />
      <VideoPlayer iframe={desktop} proportion="16-9" />
    </div>
  )
}

const VideoPlayer = ({ iframe, proportion = '16-9' }) => {
  if (!iframe) return null
  return (
    <VideoWrap className={`proportion-${proportion} video-wrap`}>
      <iframe src={iframe} />
    </VideoWrap>
  )
}
