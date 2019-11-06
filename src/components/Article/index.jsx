import React from 'react'
import {StArticle} from './style.css'

const Article = ({title, url, tag, excerpt, img}) => {

  const addDefaultSrc = (e) => {
    e.target.src = 'https://www.placecage.com/700/450'
  }

  return (
    <StArticle>
      <a href={url}>
        <figure>
          <div className="imgwrap">
            <img
              onError={addDefaultSrc}
              src={img}
              alt={title} />
          </div>
          <figcaption>
            {
              tag && tag.length > 0 && (
                <span className="tag">
                  {tag}
                </span>
              )
            }
            <h2>
              {
                title && title.length > 0 ? title : 'Nostrud aliquip tempor excepteur ut eiusmod cillum.'
              }
            </h2>
            <p>{excerpt}</p>
          </figcaption>
        </figure>
      </a>
    </StArticle>
  )
}

export default Article