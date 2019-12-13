import styled, {css} from 'styled-components'

const StWidget = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
  @media(max-width: 1520px){
    max-width: none;
  }
`

const StHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(${props => props.columns ? props.columns : '1'}, 1fr);
  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
`

const defaultBody = css`
  grid-template-columns: repeat(${props => props.columns ? props.columns : '1'}, 1fr);
`

const piensadigitalBody = css`
  grid-template-columns: repeat(${props => props.columns ? props.columns + 1 : '1'}, 1fr);
  grid-gap: 20px;
  @media(max-width: 900px){
    grid-template-columns: 1fr;
  }
  article{
    position: relative;
    h2{
      font-weight: bold;
      font-size: 18px;
    }
    figure{
      @media(max-width: 900px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        figcaption{
          grid-column: span 2;
          p{
            display: none;
          }
        }
      }
    }
    &::after{
      content: '';
      border-right: 1px solid gray;
      position: absolute;
      top: 0;
      bottom: 0;
      right: -10px;
      @media(max-width: 900px){
        right: 0;
        bottom: -10px;
        top: auto;
        left: 0;
        border-bottom: 1px solid gray;
      }
    }
    &:last-of-type{
      &::after{
        display: none;
      }
    }
    &:first-of-type{
      grid-column: span 2;
      @media(max-width: 900px){
        grid-column: auto;
      }
      figcaption{
        background-color: #ff8201;
        color: white;
        padding: 15px;
        span{
          color: white;
        }
        h2{
          font-size: 24px;
        }
      }
      figure{
        display: block;
      }
    }
  }
`

const minvuBody = css`
  grid-template-columns: repeat(${props => props.columns ? props.columns + 1 : '1'}, 1fr);
`

const StBody = styled.div`
  display: grid;
  ${props => props.theme ? (props) => {
      switch(props.theme) {
        case 'minvu':
          return minvuBody
        case 'piensadigital':
          return piensadigitalBody
        default:
          return defaultBody
      }
    } : `grid-template-columns: repeat(${props => props.columns ? props.columns : '1'}, 1fr);`
  }

  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
  .box-campamento & {
    @media(max-width: 800px){
      grid-template-columns: repeat(2, 1fr);
    }
  }
`



export { StWidget, StHeader, StBody }