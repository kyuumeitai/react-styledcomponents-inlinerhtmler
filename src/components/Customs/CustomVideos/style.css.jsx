import styled from 'styled-components'

const StCustomWidget = styled.div`
  background-color: black;
  position: relative;
  a{
    display: grid;
    grid-template-columns: 2fr 2fr;
    align-items: center;
    color: white;
    text-decoration: none;
    position: relative;
    @media(max-width: 800px){
      grid-template-columns: 1fr;
    }
  }
  .logo{
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    img{
      max-width: 140px;
      display: block;
    }
  }
`

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`

const Col = styled.div`
  position: relative;
  img{
    max-width: 100%;
    display: block;
  }
  &:last-of-type{
    padding: 20px;
  }
  h2{
    img{
      max-width: 290px;
    }
  }
  p{
    padding: 0 0 0 10px;
    line-height: 1.2;
    margin-top: 10px;
    font-family: 'Merriweather', serif;
    font-size: 16px;
  }
  .footer{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .button{
    color: #000;
    background-color: white;
    border-radius: 4px;
    font-size: 12px;
    padding: 6px 10px;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
  }
`
export { StCustomWidget, Col, Bg }