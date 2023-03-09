import styled from 'styled-components'

const StCredits = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: tomato;
  color: black;
  margin-top: -1rem;
  margin-bottom: -1rem;
  .creditsWrapper {
    max-width: 600px;
    padding: 2rem 1rem;
    margin: 0 auto;
  }
  h2 {
    line-height: 1;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    text-transform: uppercase !important;
    font-size: 16px;
    letter-spacing: 1.8px;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
  }
  strong {
    font-weight: bold;
    display: block;
  }
`

export { StCredits }
