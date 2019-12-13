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

const cultoHeader = css`
  background-color: black;
  position: relative;
  &.two-cols{
    grid-template-columns: 1fr 150px;
    @media(max-width: 800px){
      grid-template-columns: 1fr 80px;
    }
  }
  .featured-logo{
    height: 100%;
    a{
      display: block;
      height: 100%;
    }
    img{
      width: 100%;
      height: auto;
      max-height: none;
      margin: 0;
      display: block;
      @media(max-width: 800px){
        object-fit: cover;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .sponsor-logo{
    padding: 10px;
    a{
      display: block;
      text-align: right;
    }
    span{
      display: block;
      margin-bottom: 2px;
      margin-top: -15px;
      font-size: 10px;
    }
    img{
      @media(max-width: 800px){
        max-width: 100%;
        margin: 0;
      }
    }
    @media(max-width: 800px){
      padding-top: 20px;
    }
  }
  span{
    color: white;
  }

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
      case 'culto':
        return cultoHeader
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