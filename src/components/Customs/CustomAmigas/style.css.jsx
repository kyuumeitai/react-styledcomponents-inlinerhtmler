import styled from 'styled-components'

const StCustomWidget = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;
  margin-top: 15px;
  margin-bottom: 15px;
  header{
    background-color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    img{
      display: block;
    }
    h2{
      margin: 0;
      padding: 0;
      line-height: 1;
    }
    span{
      position: relative;
      z-index: 2;
      font-family: 'Open Sans', sans-serif;
      color: #000;
      text-decoration: none;
    }
    >div{
      &:first-of-type{
        justify-self: flex-start;
        img{
          max-width: 300px;
          @media(max-width: 1330px){
            max-width: 260px;
          }
          @media(max-width: 1100px){
            max-width: 180px;
          }
          @media(max-width: 500px){
            max-width: 140px;
          }
        }
      }

      &:last-of-type{
        justify-self: flex-end;
        display: grid;
        grid-template-columns: 1fr 80px;
        grid-gap: 10px;
        padding-bottom: 5px;
        img{
          max-width: 80px;
        }
        @media(max-width: 500px){
          grid-template-columns: 1fr;
          grid-gap: 1px;
        }
      }
    }
  }
`

const Body = styled.div`
  img{
    display: block;
    max-width: 100%;
  }
  .desktop{
    @media(max-width: 900px){
      display: none;
    }
  }
  .mobile{
    display: none;
    @media(max-width: 900px){
      display: block;
    }
  }


`

export { StCustomWidget, Body}