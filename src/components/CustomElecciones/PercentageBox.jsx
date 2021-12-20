import React from 'react'
import CirclePercentage from './CirclePercentage'
import styled from 'styled-components'

const Wrap = styled.div`
  max-width: 220px;
  margin: 0 auto;
  h4 {
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    small {
      font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;

      margin-top: 8px;
      line-height: 1;
      display: block;
      font-weight: normal;
      text-transform: none;
      margin-bottom: 18px;
    }
  }
`

const PercentageBox = ({ votes, percentage, titulo, bajada }) => {
  return (
    <Wrap>
      <h4>
        {titulo}
        <small dangerouslySetInnerHTML={{ __html: bajada }}></small>
      </h4>
      <CirclePercentage votes={votes} percentage={percentage} />
    </Wrap>
  )
}

export default PercentageBox
