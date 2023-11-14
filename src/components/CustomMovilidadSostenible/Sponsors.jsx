import React from 'react'
import styled from 'styled-components'

export const Brand = ({ imageUrl, siteUrl, name, width, height }) => {
  return (
    <a
      className="brand"
      href={siteUrl}
      target="_blank"
      rel="noopener noreferrer">
      <img src={imageUrl} alt={name} width={width} height={height} />
    </a>
  )
}

export const Sponsors = ({ sponsors }) => {
  return (
    <Wrap>
      {sponsors.map((sponsor, index) => {
        return <Brand key={index} {...sponsor} />
      })}
    </Wrap>
  )
}

const Wrap = styled.div`
  max-width: max-content;
  background-color: #fff;
  border-bottom-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;
  gap: 2rem;
  margin-left: auto;
  margin-right: auto;
  .brand {
    img {
      max-height: 60px;
      max-width: 130px;
      @media (max-width: 768px) {
        max-height: 30px;
        max-width: 65px;
      }
    }
  }
`
