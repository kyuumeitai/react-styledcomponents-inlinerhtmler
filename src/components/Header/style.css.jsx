import styled, {css} from 'styled-components'

const defaultHeader = css`

`

const piensadigitalHeader = css`
  background-color: gray;
  padding: 20px;
  border-bottom: 10px solid #ff8201;
  margin-bottom: 10px;
  span{
    color: white;
  }
  img{
    max-height: 60px;
    max-width: 90px;
  }
`

const minvuHeader = css`

`

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

  ${props => props.theme ? (props) => {
    switch (props.theme) {
      case 'minvu':
        return minvuHeader
      case 'piensadigital':
        return piensadigitalHeader
      default:
        return defaultHeader
    }
  } : ``
  }
`

export { StHeader }