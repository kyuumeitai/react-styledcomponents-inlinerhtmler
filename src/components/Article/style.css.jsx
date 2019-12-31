import styled from 'styled-components'

const StArticle = styled.article`
  font-family: 'Merriweather', serif;
  line-height: 1.1;
  padding: 0.2rem;
  .iframe-wrapper-wrapper-wrapper{
    background: black;
  }
  .iframe-wrapper-wrapper{
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .iframe-wrapper{
    position: relative;
    padding-bottom: 100%;
    padding-top: 1px;
    height: 0;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  a{
    color: #1b1b1b;
    text-decoration: none;
    display: block;
    height: 100%;
  }
  h2 {
    font-size: 20px;
    font-family: 'Merriweather', serif;
    margin-top: 5px;
    margin-bottom: 10px;
    line-height: 1;
  }
  p{
    font-size: 14px;
    line-height: 1.47;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  .tag{
    font-family: 'Open Sans', sans-serif;
    font-size: 14.4px;
    color: #aa272f;
    margin-bottom: 5px;
  }
  .icon{
    display: block;
    img{
      max-width: 25px;
    }
  }
  .type{
    display: block;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    padding: 5px 0;
  }
  figure{
    height: 100%;
    @media(max-width: 800px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
    @media(max-width: 550px){
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
    }
  }
  .box-campamento &{
    &.article-main{
      grid-column: span 2;
      h2{
        max-width: 40%;
      }
    }
    &.article-secondary{
      @media(max-width: 800px){

      }
    }
    figure{
      position: relative;
      @media(max-width: 800px){
        display: block;
      }
      @media(max-width: 550px){
        display: block;
      }
      figcaption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: white;
        padding: 20px;
        @media(max-width: 800px){
          padding: 10px;
        }
        h2{
          font-size: 26px;
          font-weight: normal;
          @media(max-width: 800px){
            font-size: 18px;
          }
        }
        z-index: 1;
      }
      &::after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 40%;
        background: linear-gradient(transparent, black);
      }
    }
  }

`

export {StArticle}