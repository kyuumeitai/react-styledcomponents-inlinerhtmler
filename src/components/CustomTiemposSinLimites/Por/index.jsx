import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  grid-column: 1 / -1 !important;
  position: relative;
  background-color: black;
  padding: 6px;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    border-bottom: 1px solid white;
  }
`
const Logo = styled.div`
  grid-column: 1 / -1 !important;
  padding-left: 10px;

  svg {
    height: 20px;
    max-height: 20px;
  }
`

const Inner = styled.div`
  background-color: black;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 2;
  padding-right: 10px;
  padding-left: 10px;
  span {
    font-size: 11px;
    font-size: 0.8rem;
    color: white;

    text-transform: uppercase;
    font-family: 'Roboto Condensed', franklin-gothic-urw, helvetica, arial,
      verdana, sans-serif;
    display: block;
    text-align: right;
  }
`

const Por = ({ brand }) => {
  return (
    <Wrap>
      <Inner>
        <span>Hoy Por: </span>
        <Logo>{brand}</Logo>
      </Inner>
    </Wrap>
  )
}

export default Por
