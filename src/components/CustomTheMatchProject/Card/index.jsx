import React from 'react'

const Card = ({ date, title, image, url }) => {
  return (
    <div>
      <div>
        <img src={image} alt={title} />
      </div>
      <time>{date}</time>
      <h2>{title}</h2>
      <a href={url} target="_blank">
        ver
      </a>
    </div>
  )
}

export default Card
