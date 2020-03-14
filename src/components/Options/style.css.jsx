import styled from 'styled-components'

const StOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  .options-form{
    grid-column: span 8;
  }
  .options-list{
    grid-column: span 4;
  }
  .option{
    grid-column: span 4;
  }
`

const StOptionsWrapper = styled.div``
const StOptionsHeader = styled.div`

`

const StOptionsVersions = styled.div`

`

const StOptionsSiteslist = styled.div`

`

export { StOptions, StOptionsWrapper, StOptionsHeader, StOptionsVersions, StOptionsSiteslist }