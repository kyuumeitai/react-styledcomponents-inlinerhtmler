import styled from 'styled-components'

const overallStyle = () => {
  return `
    display: block;
    width: 100%;
    margin: 0 auto 8px;
    letter-spacing: -0.01em;
    font-size: 1rem;
    font-weight: 400;
    outline: none;
    box-shadow: none;
    border-radius: 3px;
    padding: 15px;
    background-color: white;
  `
}

const StForm = styled.form`

`

const StLabel = styled.label`
  font-size: 0.6rem;
  line-height: 1;
  display: block;
  user-select: none;
  text-align: left;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 20px 0 3px;
  &[for] {
    cursor: pointer;
  }
`

const StInput = styled.input`
  ${overallStyle}
  border: ${props => props.border || '1px solid #ccc' };
`

const StTextarea = styled.textarea`
  ${overallStyle}
  border: ${props => props.border || '1px solid #ccc' };
`

const StButton = styled.button`
  ${overallStyle}
  background-color: #5995ef;
  color: white;
  cursor: pointer;
`

const StTitle = styled.h3`

`

const StError = styled.span`
  color: ${props => props.color || 'tomato' };
  text-transform: none;
  letter-spacing: normal;
  padding-left: 0.5rem;
`

const StCols = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)` || 'auto'};
`

const StCol = styled.div`
`

const StArticleWrap = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
`

export { StForm, StLabel, StInput, StTextarea, StButton, StTitle, StError, StCols, StCol, StArticleWrap }