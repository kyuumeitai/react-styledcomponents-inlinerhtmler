import styled from 'styled-components'

const StOutputs = styled.div`
  background-color: tomato;
  color: white;
  text-align: center;
`

const StOutput = styled.div`
  max-width: 1200px;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  @media(max-width: 1200px){
    max-width: 100%;
  }
`

const StTextarea = styled.textarea`
  display: block;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.5;
`

const StOutputHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export { StOutputs, StOutput, StOutputHeader, StTextarea}