import styled from 'styled-components'

const StCustomWidget = styled.div`
  position: relative;
  z-index: 0;
  border-radius: 40px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  border: 1px solid #ccc;
`

const Illustration = styled.div`
  position: relative;
  grid-column: span 7;
  padding: 50px;
  @media(max-width: 1200px){
    grid-column: span 6;
  }
  @media(max-width: 900px){
    grid-column: span 12;
  }
  img{
    max-height: 190px;
    max-width: 100%;
    display: block;
  }
`

const Content = styled.div`
  position: relative;
  grid-column: span 5;
  padding: 0 50px;
  display: grid;
  align-items: center;
  justify-content: center;
  @media(max-width: 1200px){
    grid-column: span 6;
    padding: 0 20px;
  }
  @media(max-width: 900px){
    grid-column: span 12;
    padding: 0 20px 20px;
  }
  @media(max-width: 800px){
    grid-column: span 12;
    padding: 0 10px 10px;
  }

`

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  background: ${props => props.imgbg ? `url(${props.imgbg}) no-repeat center center;` : ''};
  background-size: cover;
`

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    max-width: 100%;
  }
  span{
    padding-right: 5px;
    font-size: 11px;
  }
`

const ContentBody = styled.div`
  .iframewrap{
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
    iframe{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    @media(max-width: 400px){
      padding-bottom: 70%;
    }
  }
  .iframewrapwrap{
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
  }
  height: auto;
`


export { StCustomWidget, Bg, Content, Illustration, ContentHeader, ContentBody}