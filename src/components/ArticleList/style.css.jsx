import styled from 'styled-components'

const StArticles = styled.ul`
  list-style: none;
`

const StArticleItem = styled.li`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 3px;
  display: grid;
  grid-template-columns: 1fr auto;
`

const StEditMenu = styled.div`
`

export { StArticles, StArticleItem, StEditMenu }