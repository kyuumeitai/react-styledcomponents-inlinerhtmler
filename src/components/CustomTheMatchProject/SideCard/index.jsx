import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const SideCardStyled = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  grid-gap: 1rem;
  grid-column: 1 / -1;
  > div {
    grid-column: span 1;
  }
  margin-bottom: 2rem;
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.left {
  }
  &.right {
    grid-template-columns: 1fr 60%;
    .sidecard-content {
      order: 0;
    }
    figure {
      order: 1;
    }
  }
  border-bottom: 1px solid black;
  padding-bottom: 25px;
  padding-top: 25px;
`

const SideCard = ({ date, title, image, url, description, side }) => {
  return (
    <SideCardStyled className={side}>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="sidecard-content">
        <time>{date}</time>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <a href={url} target="_blank">
          ver
        </a>
      </div>
    </SideCardStyled>
  )
}

export default SideCard
