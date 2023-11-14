import React from 'react'
import styled from 'styled-components'
import { Sponsors } from './Sponsors'

const data = {
  sponsors: [
    {
      name: 'Copec Voltex',
      imageUrl:
        'https://especiales.latercera.com/movilidad-sostenible-assets/logo-copec-voltex.svg',
      width: '300',
      height: '139',
      siteUrl: 'https://copecvoltex.cl/',
    },
    {
      name: 'SQM',
      imageUrl:
        'https://especiales.latercera.com/movilidad-sostenible-assets/logo-sqm.svg',
      width: '300',
      height: '139',
      siteUrl: 'https://www.sqm.com/en/',
    },
    {
      name: 'ISA Intervial',
      imageUrl:
        'https://especiales.latercera.com/movilidad-sostenible-assets/logo-isa-intervial.svg',
      width: '300',
      height: '139',
      siteUrl: 'https://www.intervialchile.cl/',
    },
  ],
}

const CustomMovilidad = () => {
  return (
    <Wrap>
      <Sponsors sponsors={data.sponsors} />
      <div className="intro">
        <div className="col1">
          <h3>
            <img
              src="https://especiales.latercera.com/movilidad-sostenible-assets/logo-anac.svg"
              alt="ANAC"
              className="logo-anac"
            />
          </h3>
          <h2>
            <img
              src="https://especiales.latercera.com/movilidad-sostenible-assets/logo-movilidad-sostenible.svg"
              alt="Movilidad Sostenible"
              className="logo-brand"
            />
          </h2>
          <div className="text">
            <p>
              La industria automotriz en Chile ha dado un salto exponencial en
              las últimas tres décadas. El camino a la movilidad sostenible
              llegó para quedarse.
            </p>
          </div>
        </div>
        <div className="col2">
          <img
            src="https://especiales.latercera.com/movilidad-sostenible-assets/auto.svg"
            alt="Movilidad Sostenible"
            className="auto"
          />
        </div>
      </div>
    </Wrap>
  )
}

export default CustomMovilidad

const Wrap = styled.div`
  background-color: #151924;
  color: #ffffff;

  font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
  .intro {
    max-width: 1200px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-end;
    padding-bottom: 2rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    .col1,
    .col2 {
      grid-column: 1 span;
    }

    p {
      max-width: 600px;
      margin: 0 auto;
      font-size: 1.6rem;
      font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
      text-align: center;
    }
  }
  .logo-anac {
    max-width: 300px;
    display: block;
    margin: 2rem auto 1rem;
  }
  .logo-brand {
    max-width: 600px;
    display: block;
    margin: 0 auto;
  }
  .auto {
    max-width: 700px;
    margin: 0 auto 2rem;
    display: block;
  }
`
