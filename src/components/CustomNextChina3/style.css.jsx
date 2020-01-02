import styled from 'styled-components'

const StCustomWidget = styled.div`
  /* background: linear-gradient(to bottom right,rgba(47,37,80,.8),rgba(47,37,80,.8)); */
  background: black;
  position: relative;
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  align-items: center;
  justify-content: flex-start;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  padding: 20px;
  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
  img{
    max-width: 280px;
    max-height: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media(max-width: 800px){
      max-width: 100%;
    }
  }
  h1{
    &:first-of-type{
      justify-self: flex-start;
      @media(max-width: 800px){
        justify-self: center;
      }
    }
    &:last-of-type{
      justify-self: flex-end;
      img{
        max-height: 20px;
      }
      @media(max-width: 800px){
        justify-self: center;
      }
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
  opacity: 0.5;
  align-items: center;
  background: ${props => props.imgbg ? `url(${props.imgbg}) no-repeat center center;` : ''};
  background-size: cover;
`
export { StCustomWidget, Bg, Content }