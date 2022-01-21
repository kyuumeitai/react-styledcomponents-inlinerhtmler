import React from 'react'
import styled from 'styled-components'

const Wrap = styled.article`
  padding: 30px;
  border-radius: 25px;
  background: linear-gradient(#fbe1d1 0%, #e6f8ff 80%, #e6f8ff 100%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`

const Header = styled.header`
  text-align: center;
  margin-bottom: 16px;
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
`

const Data = styled.div`
  grid-column: span 1 !important;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  h3 {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 1.4px;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
  }
  span {
    display: block;
    font-size: 12px;
    color: #aaa;
    text-transform: none;
    letter-spacing: 0;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
  }
`

const Link = styled.a`
  text-decoration: none;
  background: #1d43de 0% 0% no-repeat;
  border-radius: 20px;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 1.4px;
  display: block;
  padding: 15px;
  text-align: center;
  font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
`

const Biografia = styled.div`
  padding: 16px 0;
  p {
    margin: 0;
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

const Ficha = ({
  nombre,
  cargo,
  edad,
  partido,
  profesion,
  nivelAcademico,
  colegio,
  universidad,
  biografia,
  foto,
  url,
}) => {
  return (
    <Wrap>
      <Header>
        <a href={url}>
          <Figure src={foto} alt={nombre} />
        </a>
        <h2>
          <a href={url}>{nombre}</a>
        </h2>
        <p>{cargo}</p>
      </Header>
      <Data>
        <h3>
          <span>Edad </span>
          {edad}
        </h3>
        <h3>
          <span>Partido Político </span>
          {partido}
        </h3>
        <h3>
          <span>Profesión/Oficio </span>
          {profesion}
        </h3>
        <h3>
          <span>Nivel académico </span>
          {nivelAcademico}
        </h3>
        <h3>
          <span>Colegio </span>
          {colegio}
        </h3>
        <h3>
          <span>Universidad </span>
          {universidad}
        </h3>
      </Data>
      <Biografia>
        <p>{biografia}</p>
      </Biografia>
      <Link href={url}>Ver Ficha</Link>
    </Wrap>
  )
}

export default Ficha
