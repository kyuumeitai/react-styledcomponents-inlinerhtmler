import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const SideCardStyled = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  grid-gap: 1rem;
  grid-column: 1 / -1;
  align-items: center;
  > div {
    grid-column: span 1;
  }
  margin-bottom: 2rem;
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
    }
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
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      figure {
        order: 0;
      }
      .sidecard-content {
        order: 1;
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  border-bottom: 1px solid black;
  padding-bottom: 25px;
  padding-top: 25px;
  img {
    max-width: 100%;
  }
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 1.1;
    font-family: 'miller-headline', serif;
    a {
      text-decoration: none;
      color: black;
    }
  }
  time {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    letter-spacing: 0.05em;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.3;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    margin-bottom: 1rem;
  }
`

const SideCard = ({ date, title, image, url, description, side }) => {
  return (
    <SideCardStyled className={side}>
      <figure>
        <a href={url} target="_blank">
          <img src={image} alt={title} />
        </a>
      </figure>
      <div className="sidecard-content">
        <time>{date}</time>
        <h2>
          <a href={url} target="_blank">
            {title}
          </a>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <Button href={url}>view</Button>
      </div>
    </SideCardStyled>
  )
}

export default SideCard
