import React from 'react'
import { Match2022, ProyectoMatch } from 'copesa-logos'
import Barometro from './Barometro'
import styled from 'styled-components'

const Wrap = styled.div`
  border: 1px solid #ccc;
  padding: 2rem;
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  overflow: hidden;
  gap: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  .claim {
    font-family: 'franklin-gothic-urw', helvetica, arial, verdana, sans-serif;
    line-height: 1;
    font-size: 2rem;
    font-weight: normal;
    text-align: right;
    strong {
      font-weight: bold;
    }
  }
  .barometro {
  }
  .logo-match {
    grid-area: 1 / 1 / 3 / 7;
  }
  .logo-proyecto-match {
    grid-area: 1 / 7 / 2 / 13;
  }
  .claim {
    grid-area: 2 / 7 / 3 / 13;
  }
  .match-btn {
    grid-area: 3 / 9 / 4 / 13;
  }
  @media (max-width: 768px) {
    .logo-match {
      grid-area: 1 / 1 / 2 / 3;
      svg {
        max-height: 200px;
        max-width: 100%;
        @media (max-width: 350px) {
          max-height: 100px;
        }
      }
    }
    .logo-proyecto-match {
      grid-area: 2 / 1 / 3 / 3;
    }
    .claim {
      grid-area: 3 / 1 / 4 / 3;
      font-size: 1.6rem;
    }
    .match-btn {
      grid-area: 4 / 1 / 5 / 3;
    }
  }
`

const WrBarometro = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  left: 1rem;
  bottom: 1rem;
  z-index: -1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    max-height: 100%;
    opacity: 0.5;
  }
  @media (max-width: 768px) {
  }
`

const Btn = styled.a`
  display: inline-block;
  border: 1px solid black;
  box-shadow: 3px 4px 0 0 black;
  border-radius: 40px;
  background-color: #f0faff;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
  letter-spacing: 0.05em;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
    Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
  text-align: center;
  &:hover {
    box-shadow: 6px 7px 0 0 black;
  }
`

const WrProyectoMatch = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    max-height: 40px;
    max-width: 100px;
  }
`

const CustomWidgetMatch = () => {
  return (
    <Wrap>
      <a
        href="https://interactivo.latercera.com/match-constituyente-el-barometro-del-plebiscito/?utm_source=widgetLTLogo&utm_medium=web"
        className="logo-match"
        target="_blank"
        rel="noopener noreferrer">
        <Match2022 />
      </a>
      <WrProyectoMatch className="logo-proyecto-match">
        <ProyectoMatch />
      </WrProyectoMatch>

      <h3 className="claim">
        ¿Te gustaría saber tu <strong>grado de afinidad</strong> con la
        propuesta de nueva Constitución? Estas 16 preguntas clave te ayudarán a
        tenerlo más claro.
      </h3>
      <WrBarometro className="barometro">
        <Barometro />
      </WrBarometro>
      <Btn
        className="match-btn"
        href="https://interactivo.latercera.com/match-constituyente-el-barometro-del-plebiscito/?utm_source=widgetLTBtn&utm_medium=web"
        target="_blank"
        rel="noopener noreferrer">
        Ver match
      </Btn>
    </Wrap>
  )
}

export default CustomWidgetMatch
