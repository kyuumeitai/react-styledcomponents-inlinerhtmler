import React from 'react'

const SideCard = ({ date, title, image, url, description, side }) => {
  return (
    <div className={side}>
      <div>
        <img src={image} alt={title} />
      </div>
      <time>{date}</time>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <a href={url} target="_blank">
        ver
      </a>
    </div>
  )
}

export default SideCard
