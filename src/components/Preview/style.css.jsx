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

const cultoBody = css`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0;
  @media(max-width: 800px){
    grid-template-columns: repeat(12, 1fr);
  }
  article{
    position: relative;
    grid-column: span 3;
    @media(max-width: 900px){
      grid-column: span 6;
      .icon{
        img{
          max-width: 20px;
        }
      }
      .type{
        font-size: 10px;
        margin: 0;
      }
    }

    figure{
      position: relative;
      background-color: black;
      @media(max-width: 800px){
        grid-template-columns: 1fr;
        min-height: 230px;
      }
      .imgwrap{
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }
      &:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 50%;
        background: linear-gradient(transparent,rgba(0,0,0,1));
      }
      figcaption{
        color: white;
        padding: 15px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        @media(max-width: 500px){
          padding: 5px;
        }
        span{
          color: white;
        }
        h2{
          font-weight: bold;
          font-size: 24px;
          @media(max-width: 800px){
            font-size: 18px;
            margin: 0;
          }
          @media(max-width: 500px){
            font-size: 14px;
            margin: 0;
          }
        }
        p{
          display: none;
        }
      }
    }
    &:first-of-type{
      grid-column: span 6;
      @media(max-width: 900px){
        grid-column: span 12;
      }
      figure{
        figcaption{
          p{
            display: block;
            @media(max-width: 800px){
              display: none;
            }
          }
        }
      }
    }
    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(6){
      grid-column: span 4;
      @media(max-width: 700px){
        figcaption{
          position: relative;
        }
      }
      @media(max-width: 560px){
        grid-column: span 12;
        figure{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          min-height: 0;
        }
      }
    }
  }
`

const tresBodyStyle = css`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0;
  @media(max-width: 800px){
    grid-template-columns: repeat(12, 1fr);
  }
  article{
    position: relative;
    grid-column: span 3;
    @media(max-width: 900px){
      grid-column: span 6;
      .icon{
        img{
          max-width: 20px;
        }
      }
      .type{
        font-size: 10px;
        margin: 0;
      }
    }

    figure{
      position: relative;
      background-color: black;
      @media(max-width: 800px){
        grid-template-columns: 1fr;
        min-height: 230px;
      }
      .imgwrap{
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }
      &:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 50%;
        background: linear-gradient(transparent,rgba(0,0,0,1));
      }
      figcaption{
        color: white;
        padding: 15px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        @media(max-width: 500px){
          padding: 5px;
        }
        span{
          color: white;
        }
        h2{
          font-weight: bold;
          font-size: 24px;
          @media(max-width: 800px){
            font-size: 18px;
            margin: 0;
          }
          @media(max-width: 500px){
            font-size: 14px;
            margin: 0;
          }
        }
        p{
          display: none;
        }
      }
    }
    &:first-of-type{
      grid-column: span 6;
      @media(max-width: 900px){
        grid-column: span 12;
      }
      figure{
        figcaption{
          p{
            display: block;
          }
        }
      }
    }
    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(6){
      grid-column: span 4;
      @media(max-width: 700px){
        figcaption{
          position: relative;
        }
      }
      @media(max-width: 560px){
        grid-column: span 12;
        figure{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          min-height: 0;
        }
      }
    }
  }
`

const cincoBody = css`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0;
  @media(max-width: 800px){
    grid-template-columns: repeat(12, 1fr);
  }
  article{
    position: relative;
    grid-column: span 3;
    @media(max-width: 900px){
      grid-column: span 6;
      .icon{
        img{
          max-width: 20px;
        }
      }
      .type{
        font-size: 10px;
        margin: 0;
      }
    }

    figure{
      position: relative;
      background-color: black;
      @media(max-width: 800px){
        grid-template-columns: 1fr;
        min-height: 230px;
      }
      .imgwrap{
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }
      &:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 50%;
        background: linear-gradient(transparent,rgba(0,0,0,1));
      }
      figcaption{
        color: white;
        padding: 15px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        @media(max-width: 500px){
          padding: 5px;
        }
        span{
          color: white;
        }
        h2{
          font-weight: bold;
          font-size: 24px;
          @media(max-width: 800px){
            font-size: 18px;
            margin: 0;
          }
          @media(max-width: 500px){
            font-size: 14px;
            margin: 0;
          }
        }
        p{
          display: none;
        }
      }
    }
    &:first-of-type{
      grid-column: span 6;
      @media(max-width: 900px){
        grid-column: span 12;
      }
      figure{
        figcaption{
          p{
            display: block;
          }
        }
      }
    }
    &:nth-of-type(4),
    &:nth-of-type(5){
      grid-column: span 6;
      figure{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        min-height: 0;
      }
      figcaption{
        position: relative;
      }
      @media(max-width: 560px){
        grid-column: span 12;
      }
    }
  }
`

const dosBody = css`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0;
  @media(max-width: 800px){
    grid-template-columns: repeat(12, 1fr);
  }
  article{
    position: relative;
    grid-column: span 3;
    @media(max-width: 900px){
      grid-column: span 6;
      .icon{
        img{
          max-width: 20px;
        }
      }
      .type{
        font-size: 10px;
        margin: 0;
      }
    }

    .tag{
      background-color: #dedede;
      color: #000;
      padding: 2px 1px;
      border-radius: 4px;
      font-size: 12px;
      margin-bottom: 6px;
      display: inline-block;
    }

    figure{
      position: relative;
      background-color: black;

      @media(max-width: 800px){
        grid-template-columns: 1fr;
        min-height: 230px;
      }
      .imgwrap{
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }
      &:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 50%;
        background: linear-gradient(transparent,rgba(0,0,0,1));
      }
      figcaption{
        color: white;
        padding: 15px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        @media(max-width: 500px){
          padding: 5px;
        }
        span{
          color: white;
        }
        h2{
          font-weight: bold;
          font-size: 24px;
          @media(max-width: 800px){
            font-size: 18px;
            margin: 0;
          }
          @media(max-width: 500px){
            font-size: 14px;
            margin: 0;
          }
        }
        p{
          display: none;
        }
      }
    }
    &:first-of-type,
    &:nth-of-type(2){
      grid-column: span 6;
      @media(max-width: 900px){
        grid-column: span 12;
      }
      figure{
        figcaption{
          p{
            display: block;
            @media(max-width: 900px){
              display: none;
            }
          }
        }
      }
    }

  }
`

const tresBody = css`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0;
  @media(max-width: 800px){
    grid-template-columns: repeat(12, 1fr);
  }
  article{
    position: relative;
    grid-column: span 4;
    @media(max-width: 900px){
      grid-column: span 6;
      .icon{
        img{
          max-width: 20px;
        }
      }
      .type{
        font-size: 10px;
        margin: 0;
      }
    }

    .tag{
      background-color: #dedede;
      color: #000;
      padding: 2px 1px;
      border-radius: 4px;
      font-size: 12px;
      margin-bottom: 6px;
      display: inline-block;
    }

    figure{
      position: relative;
      background-color: black;

      @media(max-width: 800px){
        grid-template-columns: 1fr;
        min-height: 230px;
      }
      .imgwrap{
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }
      &:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 50%;
        background: linear-gradient(transparent,rgba(0,0,0,1));
      }
      figcaption{
        color: white;
        padding: 15px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        @media(max-width: 500px){
          padding: 5px;
        }
        span{
          color: white;
        }
        h2{
          font-weight: bold;
          font-size: 24px;
          @media(max-width: 800px){
            font-size: 18px;
            margin: 0;
          }
          @media(max-width: 500px){
            font-size: 14px;
            margin: 0;
          }
        }
        p{
          display: none;
        }
      }
    }
    &:first-of-type,
    &:nth-of-type(2)
    &:nth-of-type(3){
      grid-column: span 4;
      @media(max-width: 900px){
        grid-column: span 12;
      }
      figure{
        figcaption{
          p{
            display: block;
            @media(max-width: 900px){
              display: none;
            }
          }
        }
      }
    }

  }
`

const StBody = styled.div`
  display: grid;

  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
  .box-campamento & {
    @media(max-width: 800px){
      grid-template-columns: repeat(2, 1fr);
    }
  }
  ${props => props.theme ? (props) => {
    switch (props.theme) {
      case 'minvu':
        return minvuBody
      case 'piensadigital':
        return piensadigitalBody
      case 'culto':
        return cultoBody
      case 'cinco':
        return cincoBody
      case 'dos':
        return dosBody
      case 'tres':
        return tresBody
      case 'tresconstyle':
        return tresBodyStyle
      default:
        return defaultBody
    }
  } : `grid-template-columns: repeat(${props => props.columns ? props.columns : '1'}, 1fr);`
  }
`



export { StWidget, StHeader, StBody }