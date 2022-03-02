import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.a`
  display: inline-block;
  padding: 6px 30px;
  border: 1px solid black;
  box-shadow: 3px 4px 0 0 black;
  border-radius: 25px;
  background-color: #f0faff;
  transition: all 0.2s;
  text-decoration: none;
  font-size: 12px;
  text-transform: uppercase;
  font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
  color: black;
  &:hover {
    box-shadow: 6px 7px 0 0 black;
  }
`

const Button = ({ children, href, ...props }) => {
  return (
    <ButtonStyled
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}>
      {children}
    </ButtonStyled>
  )
}

export default Button
