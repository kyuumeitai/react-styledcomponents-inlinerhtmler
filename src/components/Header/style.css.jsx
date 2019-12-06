import styled from 'styled-components'

const StHeader = styled.header`
  display: grid;
  align-items: center;
  justify-content: center;
  &.two-cols{
    grid-template-columns: repeat(2, 1fr);
    div.col{
      &:first-of-type{
        a{
          justify-content: flex-start;
        }
      }
      &:last-of-type{
        a{
          justify-content: flex-end;
        }
      }
    }
  }
  h3{
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
    /* margin: 10px 0; */
    vertical-align: middle;
    @media(max-width: 800px){
      font-size: 10px;
    }
  }
  img{
    max-height: 40px;
    margin-left: 12px;
    @media(max-width: 800px){
      max-height: 30px;
      margin-left: 6px;
    }
  }
`

export { StHeader }