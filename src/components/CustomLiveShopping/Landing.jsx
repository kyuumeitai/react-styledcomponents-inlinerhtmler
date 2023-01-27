import React from 'react'
import styled from 'styled-components'

const Landing = () => {
  const iframeurl =
    'https://on.mediastre.am/events/mediastream--eventos-us/liveshop-epico'
  return (
    <Wrap>
      <iframe
        src={iframeurl}
        width="100%"
        height="640"
        allow="autoplay; fullscreen; encrypted-media"
        frameborder="0"
        allowfullscreen
        allowscriptaccess="always"></iframe>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
  }
`

export default Landing
