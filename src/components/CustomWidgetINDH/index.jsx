import React from 'react'
import { LogoIndhBatalla } from './LogoIndhBatalla'
import styled from 'styled-components'

const Wrap = styled.div`
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background-color: black;
  color: white;
  svg {
    max-width: fit-content;
    max-height: 260px;
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
  a.logo-indh-batalla {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .claim {
    font-family: 'franklin-gothic-urw', helvetica, arial, verdana, sans-serif;
    line-height: 1;
    font-size: 1.2rem;
    font-weight: normal;
    text-align: left;
    margin-top: 2rem;
    strong {
      font-weight: bold;
    }
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
  margin-top: 2rem;
  &:hover {
    box-shadow: 6px 7px 0 0 black;
  }
`

const CustomWidgetMatch = () => {
  return (
    <Wrap>
      <a
        href="https://especiales.latercera.com/indh-la-batalla-espiritual-del-estallido/?utm_source=Widget&utm_medium=web&utm_campaign=indh"
        className="logo-indh-batalla"
        target="_blank"
        rel="noopener noreferrer">
        <LogoIndhBatalla schema="light" />
      </a>

      <h3 className="claim">
        Mientras en Plaza Baquedano se peleaba cada centímetro de pavimento
        entre "primeras líneas" y la fuerza pública, en las oficinas del INDH se
        libraba una batalla aparte.
      </h3>

      <Btn
        className="indh-btn"
        href="https://especiales.latercera.com/indh-la-batalla-espiritual-del-estallido/?utm_source=Widget&utm_medium=web&utm_campaign=indh"
        target="_blank"
        rel="noopener noreferrer">
        Ver especial
      </Btn>
    </Wrap>
  )
}

export default CustomWidgetMatch
