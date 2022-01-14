import React from 'react'

const Hero = ({ text }) => {
  return (
    <div>
      <h2>Hero</h2>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  )
}

export default Hero
