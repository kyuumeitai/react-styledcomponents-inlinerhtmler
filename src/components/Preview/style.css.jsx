import styled from 'styled-components'

const StWidget = styled.div`
`

const StHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(${props => props.columns ? props.columns : '1'}, 1fr);
`

const StBody = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns ? props.columns : '1'}, 1fr);

`

export { StWidget, StHeader, StBody }