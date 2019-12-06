import styled from 'styled-components'

const StWidget = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
  @media(max-width: 1520px){
    max-width: none;
  }
`

const StHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(${props => props.columns ? props.columns : '1'}, 1fr);
  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
`

const StBody = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns ? props.columns : '1'}, 1fr);
  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
  .box-campamento & {
    @media(max-width: 800px){
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export { StWidget, StHeader, StBody }