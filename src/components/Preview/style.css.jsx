import styled, {css} from 'styled-components'

const StWidget = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
  position: relative;
  @media(max-width: 1520px){
    max-width: none;
  }
  @media(min-width: 1550px){
    width: calc(100% - 330px);
    max-width: 1550px;
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
`

const piensadigitalBody = css`
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
  article{
    position: relative;
    .tag{
      background-color: rgb(0,142,255);
      color: rgb(255,255,255);
      padding: 2px 6px 3px;
      border-radius: 10px;
      font-size: 12px;
      line-height: 1;
      margin-bottom: 10px;
    }
    @media(max-width: 900px){
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
      ${'' /* grid-column: span 4;
      @media(max-width: 700px){
        figcaption{
          position: relative;
        }
      } */}
      ${'' /* @media(max-width: 560px){
        grid-column: span 12;
        figure{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          min-height: 0;
        }
      } */}
    }
  }
`

const degradadoBody = css`
  article{
    position: relative;
    .tag{
      background-color: #1f2935;
      border-radius: 3px;
      padding: 1px 5px;
      color: #fff;
      font-size: 12px;
      line-height: 1;
      margin-bottom: 5px;
      display: inline-block;
    }
    @media(max-width: 900px){
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
      ${'' /* grid-column: span 4;
      @media(max-width: 700px){
        figcaption{
          position: relative;
        }
      } */}
      ${'' /* @media(max-width: 560px){
        grid-column: span 12;
        figure{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          min-height: 0;
        }
      } */}
    }
  }
`

const unoBody = css`
  figure{
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
    background-color: black;
    max-height: 200px;
    overflow: hidden;
    @media(max-width: 900px){
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      max-height: none;
    }
    img{
      width: 100%;
      max-height: inherit;
      object-fit: cover;
      display: block;
    }
    .imgwrap{
      max-height: inherit;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 30%;
        background: linear-gradient(to right, transparent, black);
        @media(max-width: 900px){
          top: auto;
          height: 30%;
          left: 0;
          right: 0;
          width: 100%;
          background: linear-gradient(transparent, black);
        }
      }
    }
  }
  figcaption{
    color: white;
    max-width: 60%;
    padding: 10px;
    @media(max-width: 900px){
      max-width: 100%;
    }
    h2{
      max-width: 80%;
    }
    p{
      line-height: 1.1;
      margin-bottom: 10px;
    }
    .more{
      float: right;
      background: white;
      color: black;
      padding: 3px 6px;
      border-radius: 4px;
      font-size: 14px;
      @media(max-width: 900px){
        float: left;
      }
    }
  }
`

const defaultLayout = (columns) => {
  const columncss = `grid-template-columns: repeat(${columns ? columns : '1'}, 1fr);`

  return css`
    border: 10px solid #0f0;
    ${columncss}
  `
}

const featuredLayout = () => {
  return css`
    grid-template-columns: repeat(12, 1fr);
      @media(max-width: 1000px){
      grid-template-columns: repeat(12, 1fr);
    }
    article{
      grid-column: span 3;
      @media(max-width: 1000px){
        figure{
          height: 100%;
          @media(max-width: 800px){
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 10px;
          }
          @media(max-width: 550px){
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 10px;
          }
        }
        grid-column: span 6;
      }
      &:first-of-type{
        grid-column: span 6;
        @media(max-width: 1000px){
          grid-column: span 12;
        }
      }
    }
  `
}


const StBody = styled.div`
  display: grid;

  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
  ${props => props.theme ? (props) => {
    switch (props.theme) {
      case 'minvu':
        return minvuBody
      case 'piensadigital':
        return piensadigitalBody
      case 'culto':
        return cultoBody
      case 'degradado':
        return degradadoBody
      case 'uno':
        return unoBody
      default:
        return defaultBody
    }
  } : ``};
  ${
  props => props.layout ? (props) => {
    switch (props.layout) {
      case 'featured':
        return featuredLayout()
      default:
        return defaultLayout(props.columns)
    }
  } : `grid-template-columns: repeat(${props => props.columns ? props.columns : '1'}, 1fr);`
  };
`



export { StWidget, StHeader, StBody }