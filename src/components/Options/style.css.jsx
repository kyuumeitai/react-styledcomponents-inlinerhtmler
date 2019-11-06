import styled from 'styled-components'

const StOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  .options-form{
    grid-column: span 8;
  }
  .options-list{
    grid-column: span 4;
  }
`

export { StOptions }