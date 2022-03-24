import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import dasherize from './dasherize'

const Wrap = styled.div`
  padding: 3.5vw;
  @media (max-width: 768px) {
    padding: 5vw;
  }
  margin-bottom: 4rem;
  background-color: ${props =>
    props.bgColor ? transparentize(0.8, props.bgColor) : '#ccc'};
  h2 {
    font-size: 26px;
    margin-bottom: 26px;
    small {
      padding-right: 0.3rem;
      font-family: 'Homemade Apple', cursive;
      font-size: 22px;
    }
  }
  p {
    font-size: 18px;
    padding-bottom: 18px;
  }
  .tachado {
    text-decoration: line-through;
    opacity: 0.3;
  }
  h3 {
    font-family: 'Homemade Apple', cursive;
    text-align: center;
    font-size: 22px;
    line-height: 1.1;
    margin-bottom: 10px;
  }
`

const BlockStyled = styled.div`
  &.mt {
    margin-top: 30px;
  }
  h2 {
    margin-bottom: 5px;
    border-bottom: dashed 1px black;
  }
  a {
    color: black;
  }
  dl {
    padding-top: 5px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column: span 1 !important;
    gap: 10px;
    dd {
      grid-column: span 1 !important;
      padding: 10px 0 0;
      line-height: 1;
      text-align: center;
      position: relative;
      margin: 0;
      &::before {
        content: '';
        display: block;
        position: absolute;
        left: -5px;
        border-left: dashed 1px black;
        height: 100%;
        top: 3px;
      }
      &:first-of-type {
        border-left: none;
        &::before {
          display: none;
        }
      }
      font-weight: bold;
      strong {
        display: block;

        font-weight: normal;
      }
    }
  }
`

const AprobadaStyled = styled.div`
  margin-top: 2rem;
  p {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  strong {
    font-weight: bold;
  }
`

const Articulo = ({
  abstencion,
  afavor,
  aprobado,
  comision,
  conceptos,
  encontra,
  estado,
  fecha,
  indAbstencion,
  indAfavor,
  indEncontra,
  indFecha,
  indicacion,
  numero,
  quesignifica,
  texto,
  textodefinitivo,
  titulo,
  bgColor,
  mainColor,
  index,
  aprobadaEn,
  normaAprobada,
}) => {
  const tituloStr = dasherize(`${comision.slice(0, 40)}-${titulo.slice(0, 40)}`)
  if (!textodefinitivo || textodefinitivo.length === 0) return null
  return (
    <Wrap bgColor={bgColor} mainColor={mainColor} id={tituloStr}>
      <h2>
        <small>Artículo {numero}:</small>
        {titulo}
      </h2>
      {textodefinitivo && textodefinitivo.length > 0 ? (
        <p>{textodefinitivo}</p>
      ) : null}

      {fecha && fecha.length > 0 && (
        <Votacion
          afavor={afavor}
          encontra={encontra}
          abstencion={abstencion}
          fecha={fecha}
        />
      )}
      {<Aprobada aprobadaEn={aprobadaEn} normaAprobada={normaAprobada} />}
      {conceptos && conceptos.length > 0 && <Glosario conceptos={conceptos} />}
    </Wrap>
  )
}

const Votacion = ({ afavor, abstencion, encontra, fecha }) => {
  return (
    <BlockStyled>
      <h2>Votación</h2>
      <dl>
        <dd>
          <strong>Inicio de Votación:</strong> {fecha}
        </dd>
        {/* <dd>
          <strong>A favor:</strong> {afavor}
        </dd>
        <dd>
          <strong>En contra:</strong> {encontra}
        </dd>
        <dd>
          <strong>Abstenciones:</strong> {abstencion}
        </dd> */}
      </dl>
    </BlockStyled>
  )
}

const Aprobada = ({ aprobadaEn, normaAprobada }) => {
  return (
    <AprobadaStyled>
      {aprobadaEn && (
        <p>
          Aprobada en: <strong>{aprobadaEn}</strong>
        </p>
      )}
      {normaAprobada && (
        <p>
          Norma aprobada: <strong>{normaAprobada}</strong>
        </p>
      )}
    </AprobadaStyled>
  )
}

const Glosario = ({ conceptos }) => {
  const explotedConcepts = conceptos.split(',')
  return (
    <BlockStyled className="mt">
      <h2>
        Conceptos <span className="amano">clave</span>
      </h2>
      <nav>
        {explotedConcepts.map((concepto, index) => (
          <>
            <a
              key={concepto}
              href={`https://interactivo.latercera.com/glosario-constitucional/${dasherize(
                concepto,
              )}/?utm_source=LTconstitucionARC&utm_medium=referral&utm_campaign=glosario-constitucional`}
              target="_blank">
              <strong>{concepto}</strong>
            </a>
            {explotedConcepts.length - 1 !== index && <span>, </span>}
          </>
        ))}
      </nav>
    </BlockStyled>
  )
}

export default Articulo
