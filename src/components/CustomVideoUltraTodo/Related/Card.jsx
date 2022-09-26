import React from 'react'

const Card = ({ logo, bgimg, title, url }) => {
  return (
    <a
      href={`${url}?utm_source=carouselOtrasSeriesLT&utm_medium=web&utm_campaign=ultratodo`}
      target="_blank"
      rel="noopener noreferrer"
      className="card">
      <span className="overlay">
        <span className="card__logo">
          <img src={logo} alt={title} />
        </span>
      </span>
      <span className="bg">
        <img className="card__bgimg" src={bgimg} alt={title} />
      </span>
    </a>
  )
}

export default Card
