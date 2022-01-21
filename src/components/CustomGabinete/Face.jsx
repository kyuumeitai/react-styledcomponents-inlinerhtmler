import React from 'react'
import styled from 'styled-components'

const Wrap = styled.article`
  text-align: center;
  h2 {
    font-weight: bold;
    font-size: 36px;
    line-height: 1;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    a {
      color: #000;
      text-decoration: none;
    }
  }
  p {
    text-transform: uppercase;
    letter-spacing: 1.8px;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
  }
  &.small {
    h2 {
      font-size: 16px;
    }
  }
`

const Picture = styled.figure`
  max-width: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 10px;
  img {
    max-width: 100%;
    display: block;
    border-radius: 25px;
  }
`

const Figure = ({ src, alt }) => {
  return (
    <Picture>
      <img src={src} alt={alt} />
    </Picture>
  )
}

const Face = ({ nombre, cargo, foto, url, size = 'small' }) => {
  return (
    <Wrap className={size}>
      <a href={url}>
        <Figure src={foto} alt={nombre} />
      </a>
      <h2>
        <a href={url}>{nombre}</a>
      </h2>
      <p>{cargo}</p>
    </Wrap>
  )
}

export default Face
