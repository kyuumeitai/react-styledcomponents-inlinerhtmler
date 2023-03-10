import React from 'react'
import styled from 'styled-components'

const Wrap = styled.article`
  text-align: center;
  h2 {
    font-weight: bold;
    font-size: 32px;
    line-height: 0.9;
    margin-bottom: 4px;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    a {
      color: #000;
      text-decoration: none;
    }
  }
  p {
    text-transform: uppercase;
    letter-spacing: 1.8px;
    line-height: 1.1;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
  }
  &.small {
    h2 {
      font-size: 21px;
      @media (max-width: 768px) {
        font-size: 19px;
      }
    }
    p {
      font-size: 11px;
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

const LinkOrSpan = ({ url, children }) => {
  if (url) {
    return <a href={url}>{children}</a>
  }
  return <span>{children}</span>
}

const Face = ({ nombre, cargo, foto, url, size = 'small' }) => {
  return (
    <Wrap className={size}>
      <LinkOrSpan url={url}>
        <Figure src={foto} alt={nombre} />
      </LinkOrSpan>
      <h2>
        <LinkOrSpan url={url}>{nombre}</LinkOrSpan>
      </h2>
      <p>{cargo}</p>
    </Wrap>
  )
}

export default Face
