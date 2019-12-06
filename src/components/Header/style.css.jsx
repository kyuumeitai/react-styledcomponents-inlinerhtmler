import styled from 'styled-components'

const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  h3{
    line-height: 50px;
    padding: 0;
    margin: 0;
  }
  a{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: #1b3043;
    margin: 10px 0;
    line-height: 50px;
    vertical-align: middle;
  }
  img{
    max-height: 40px;
    margin-left: 12px;
    @media(max-width: 800px){
      max-height: 20px;
      margin-left: 6px;
    }
  }
`

export { StHeader }