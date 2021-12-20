import React from 'react'
import styled from 'styled-components'

const Wrap = styled.h4`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 30px;
  font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
`

const Title = ({ children }) => {
  return <Wrap>{children}</Wrap>
}

export default Title
