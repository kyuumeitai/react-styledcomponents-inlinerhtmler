import styled from 'styled-components'

const StSites = styled.ul`
  list-style: none;
`

const StSiteItem = styled.li`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 3px;
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: white;
`

const StEditMenu = styled.div`
`

export { StSites, StSiteItem, StEditMenu }