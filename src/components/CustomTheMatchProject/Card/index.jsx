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
`
const Card = ({ date, title, image, url }) => {
  return (
    <CardStyled>
      <div>
        <img src={image} alt={title} />
      </div>
      <time>{date}</time>
      <h2>{title}</h2>
      <Button href={url}>ver</Button>
    </CardStyled>
  )
}

export default Card
