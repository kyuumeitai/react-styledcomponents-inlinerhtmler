import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const SideCardStyled = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
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
    grid-template-columns: 1fr 30%;

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
  border-bottom: 1px solid #f2f2eb;
  padding-bottom: 25px;
  padding-top: 25px;
  img {
    max-width: 100%;
  }
  h2 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 1.1;
    font-family: 'miller-headline', serif;
    a {
      text-decoration: none;
      color: #f2f2eb;
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
    color: #f2f2eb;
  }
`

const SideCard = ({ title, image, url, description, side = 'left' }) => {
  return (
    <SideCardStyled className={side}>
      <figure>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      </figure>
      <div className="sidecard-content">
        <h2>
          <a href={url} target="_blank">
            {title}
          </a>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <Button href={url}>ver especial</Button>
      </div>
    </SideCardStyled>
  )
}

export default SideCard
