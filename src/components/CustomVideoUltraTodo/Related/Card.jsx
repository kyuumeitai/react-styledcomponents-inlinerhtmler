import React from 'react'

const Card = ({ logo, bgimg, title, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="card">
      <span className="overlay">
        <span className="card__logo">
          <img src={logo} alt={title} />
        </span>
        <span className="card__title">{title}</span>
      </span>
      <span className="bg">
        <img className="card__bgimg" src={bgimg} alt={title} />
      </span>
    </a>
  )
}

export default Card
