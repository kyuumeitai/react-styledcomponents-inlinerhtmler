import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
const CardStyled = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 8px;
  border: 1px solid black;
  padding: 1rem;
  text-align: center;
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
`
const Card = ({ date, title, image, url }) => {
  return (
    <CardStyled>
      <div>
        <a href={url} target="_blank">
          <img src={image} alt={title} />
        </a>
      </div>
      <time>{date}</time>
      <h2>
        <a href={url} target="_blank">
          {title}
        </a>
      </h2>
      <Button href={url}>ver</Button>
    </CardStyled>
  )
}

export default Card
