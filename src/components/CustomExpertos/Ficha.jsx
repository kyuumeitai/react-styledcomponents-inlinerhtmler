import React from 'react'
import styled from 'styled-components'

const Field = ({ label, value, type = 'data', className = '' }) => {
  if (type === 'data') {
    return (
      <h3 className={`${className}`}>
        <span>{label}</span>
        {value && value.length > 0 ? value : '--'}
      </h3>
    )
  } else {
    return (
      <p className={`${className}`}>
        <span>{label}</span>
        {value && value.length > 0 ? value : '--'}
      </p>
    )
  }
}

const Ficha = ({
  nombre,
  apellido,
  edad,
  profesion,
  universidad,
  filiacion,
  cupo,
  posgrado,
  cargoactual,
  cargosanteriores,
  foto,
  url,
  origen,
  size = 'small',
}) => {
  const nombrecompleto = `${nombre} ${apellido}`
  return (
    <Wrap>
      <Inner>
        <Header>
          <Figure src={foto} alt={nombrecompleto} />
          <h2>{nombrecompleto}</h2>
        </Header>
        <Data>
          <BasicData>
            <Field label="Edad" value={edad} />
            <Field label="Profesión" value={profesion} />
            <Field label="Universidad" value={universidad} className="full-m" />
            <Field label="Postgrado" value={posgrado} className="full" />
          </BasicData>
          <PoliticalData>
            <Field label="Partido Político" value={filiacion} />
            <Field label="Cupo" value={cupo} />
          </PoliticalData>
        </Data>
        <Biografia>
          <Field label="Cargo actual" value={cargoactual} type="bio" />
        </Biografia>
        <Biografia>
          <Field
            label="Cargos públicos anteriores"
            value={cargosanteriores}
            type="bio"
          />
        </Biografia>
      </Inner>
    </Wrap>
  )
}

const Inner = styled.div`
  grid-column: span 1 !important;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  @media (max-width: 768px) {
    gap: 6px;
  }
`

const Header = styled.header`
  text-align: left;
  margin-bottom: 16px;
  grid-column: span 2 !important;
  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 1;
    margin-top: 5px;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    a {
      color: #000;
      text-decoration: none;
    }
    @media (max-width: 768px) {
      font-size: 19px;
    }
  }
  p {
    text-transform: uppercase;
    letter-spacing: 1.8px;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
  }
`

const Data = styled.div`
  grid-column: span 4 !important;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media (max-width: 768px) {
    gap: 6px;
  }
  h3 {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 1.4px;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    @media (max-width: 768px) {
      font-size: 11px;
      letter-spacing: 1.1px;
    }
  }
  span {
    display: block;
    font-size: 12px;
    color: #aaa;
    text-transform: none;
    letter-spacing: 0;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    @media (max-width: 768px) {
      font-size: 11px;
    }
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

const Wrap = styled.article`
  padding: 30px;
  border-radius: 25px;
  background: linear-gradient(#fbe1d1 0%, #e6f8ff 80%, #e6f8ff 100%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  @media (max-width: 768px) {
    padding: 15px;
  }
`

const Biografia = styled.div`
  grid-column: 1 / -1 !important;
  span {
    display: block;
    font-size: 12px;
    color: #aaa;
    text-transform: none;
    letter-spacing: 0;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    @media (max-width: 768px) {
      font-size: 11px;
    }
  }
  p {
    margin: 0 !important;
  }
`

const Picture = styled.figure`
  max-width: 120px;
  display: block;
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

const PoliticalData = styled.div`
  display: grid;
  grid-column: 1 / -1 !important;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const BasicData = styled.div`
  display: grid;
  grid-column: 1 / -1 !important;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    .full-m {
      grid-column: 1 / -1 !important;
    }
  }
  .full {
    grid-column: 1 / -1 !important;
  }
`

export default Ficha
