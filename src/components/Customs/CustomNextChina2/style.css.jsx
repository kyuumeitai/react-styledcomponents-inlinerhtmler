import styled from 'styled-components'

const StCustomWidget = styled.div`
  /* background: linear-gradient(to bottom right,rgba(47,37,80,.8),rgba(47,37,80,.8)); */
  background: black;
  position: relative;
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  h1{
    max-width: 400px;
    margin: 0;
  }
  p{
    font-family: 'Merriweather', 'Georgia', 'Times New Roman', serif;
    text-align: center;
    max-width: 680px;
    padding: 10px;
    color: white;
    text-align: center;
    font-size: 22px;
    strong{
      font-weight: bold;
    }
    @media(max-width: 800px){
      max-width: 100%;
    }
  }
  img{
    max-width: 100%;
    display: block;
  }
`

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  opacity: 0.5;
  align-items: center;
  background: ${props => props.imgbg ? `url(${props.imgbg}) no-repeat center center;` : ''};
  background-size: cover;
`
export { StCustomWidget, Bg, Content }