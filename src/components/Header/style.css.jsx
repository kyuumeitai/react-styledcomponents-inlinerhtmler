import styled, {css} from 'styled-components'

const defaultHeader = css`

`

const piensadigitalHeader = css`
  background-color: gray;
  padding: 20px;
  border-bottom: 10px solid #ff8201;
  @media(max-width: 800px){
    padding: 10px;
  }
  margin-bottom: 10px;
  span{
    color: white;
    text-transform: uppercase;
    font-size: 13px;
    font-family: 'Open Sans', sans-serif;
  }
  img{
    max-height: 60px;
    max-width: 90px;
  }
  a{
    text-decoration: none;
  }
  &.two-cols{
    @media(max-width: 800px){
      span{
        font-size: 10px;
        display: block;
      }

    }
    .featured-logo{
      img{
        max-height: 44px;
      }
    }
    .sponsor-logo{
      a{
        display: flex;
        align-items: center;
        @media(max-width: 800px){
          display: block;
          text-align: right;
          img{
            max-height: 30px;
          }
        }
      }
    }
  }
`

const minvuHeader = css`

`

const cultoHeader = css`
  ${'' /* background-color: black; */}
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
      font-size: 8px;
      @media(max-width: 800px){
        margin-top: 4px;
      }
    }
    img{
      @media(max-width: 800px){
        max-width: 100%;
        margin: 0;
      }
    }
    @media(max-width: 800px){

    }
  }
  span{
    color: white;
  }

`

const tresconstyleHeader = css`
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
    align-items: center;
    a{
      display: flex;
      text-align: right;
    }
    img{
      @media(max-width: 800px){
        max-width: 100%;
        margin: 0;
        padding-left: 10px;
      }
    }
    @media(max-width: 800px){
      ${'' /* padding-left: 10px; */}
    }
  }
  span{
    color: white;
  }
`

const cincoHeader = css`
  .sponsor-logo{
    justify-self: flex-end;
  }
`

const tresYTres = css`
  .sponsor-logo{
    justify-self: flex-end;
  }
  &.two-cols{
    @media(max-width: 800px){
      img{
        max-width: 100%;
      }
      .sponsor-logo{
        a{
          text-align: right;
          display: block;
        }
        img{
          max-width: 50%;
        }
      }
    }
  }
`

const unoHeader = css`
  position: absolute;
  right: 10px;
  padding: 10px;
  top: 24px;
  bottom: 0;
  z-index: 2;
  &.two-cols{
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    justify-content: flex-end;
    a{
      float: right;
    }
    div.col{
      &:first-of-type{
        align-self: flex-start;

      }
      &:last-of-type{
        align-self: flex-end;
      }
    }
  }
`

const StHeader = styled.header`
  display: grid;
  align-items: center;
  justify-content: flex-start;
  &.one-col{
    justify-content: center;
  }
  &.two-cols{
    justify-content: center;
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
  .simplelink{
    display: block;
    text-decoration: none;
    color: inherit;
    padding: 0 10px;
    h1{
      margin: 0;
    }
  }
  a.brand{
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
      case 'tresconstyle':
        return tresconstyleHeader
      case 'minvu':
        return minvuHeader
      case 'piensadigital':
        return piensadigitalHeader
      case 'cinco':
        return cincoHeader
      case 'tresytres':
        return tresYTres
      case 'uno':
        return unoHeader
      default:
        return defaultHeader
    }
  } : ``
  }
`

export { StHeader }