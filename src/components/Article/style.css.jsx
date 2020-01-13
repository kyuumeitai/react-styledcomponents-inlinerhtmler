import styled, {css} from 'styled-components'

const StArticle = styled.article`
  font-family: 'Merriweather', serif;
  line-height: 1.1;
  padding: 0.2rem;
  .iframe-wrapper-wrapper-wrapper{
    /* background: black; */
  }
  .iframe-wrapper-wrapper{
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
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
`

const IframeRatio = styled.div`
  position: relative;
  padding-bottom: ${props => props.aspectRatio ? () => {
  if (props.aspectRatio === '16x9'){
      return '56.25%'
    } else {
      return '90%'
    }
  } : '80%' };
  padding-top: 1px;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const defaultArticleWrap = css`
  display: grid;
  grid-template-columns: ${props => props.hasIframe ? 'repeat(2, 1fr)' : '1fr'};
  grid-gap: 10px;
  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
`

const videowithiframeArticleWrap = css`
  position: relative;
  background-color: black;
  display: grid;
  grid-template-columns: ${props => props.hasIframe ? 'repeat(2, 1fr)' : '1fr'};
  grid-gap: 10px;
  z-index: 1;
  >a {
    display: grid;
    align-items: flex-end;
    justify-content: flex-end;
  }
  figure{
    color: white;
    padding: 10px;
    height: auto;
    @media(max-width: 800px){
      grid-template-columns: 1fr;
    }
  }
  .imgwrap{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 60%;
    z-index: -1;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media(max-width: 800px){
      width: 100%;
      left: 0;
      top: 0;
      height: 40%;
    }
    &::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(transparent, black);
    }
  }
  .iframe-wrapper-wrapper-wrapper{
    margin: 10px;
    background-color: black;
  }
  @media(max-width: 800px){
    grid-template-columns: 1fr;
    grid-gap: 0;
    > a{
      order: 1;
      padding-top: 33%;
    }
    > div{
      order: 2;
    }
  }
`

const StArticleWrap = styled.div`
  ${props => props.theme ? (props) => {
    switch (props.theme) {
      case 'videowithiframe':
        return videowithiframeArticleWrap
      default:
        return defaultArticleWrap
    }
  } : ``}
`

export { StArticle, IframeRatio, StArticleWrap}