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
  background-color: black;
  display: grid;
  grid-template-columns: 56% 1fr;
  grid-gap: 20px;
  align-items: center;
  padding: 0 20px 20px 0;
  margin-right: 40px;
  @media(max-width: 900px){
    grid-template-columns: 1fr;
  }
  @media(max-width: 500px){
    margin-right: 0;
  }
  img{
    max-width: 100%;
  }
  >div{
    &:first-of-type{
      display: grid;
      align-items: flex-start;
      justify-content: flex-end;
      height: 100%;
      position: relative;
      >span{
        display: flex;
        width: 100%;
        justify-content: flex-end;
      }
      >h2{
        margin: 0 0 0 60px;
        @media(max-width: 600px){
          margin: 20px 0 0 60px;
        }
        @media(max-width: 500px){
          margin: 0px 0 0 60px;
        }
      }
      .nbtn{
        max-width: 130px;
        display: block;
      }
      .papel{
        display: flex;
        justify-content: flex-start;
        img{
          max-width: 100%;
        }
        .img{
          margin: 15px;
          display: block;
          max-width: 260px;
          position: relative;
          z-index: 2;
          @media(max-width: 1330px){
            max-width: 200px;
          }
          @media(max-width: 1100px){
            max-width: 150px;
          }
          @media(max-width: 500px){
            max-width: 100px;
          }
        }
        &::after{
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          background: url(https://s1.latercera.com/wp-content/uploads/2020/02/papel-2.png) no-repeat left top;
          width: 100%;
          background-size: contain;
          padding-bottom: 20%;
          @media(max-width: 900px){
            padding-bottom: 15%;
          }
          @media(max-width: 600px){
            padding-bottom: 25%;
          }
        }
      }
    }
    &:last-of-type{
      margin-top: -40px;
      margin-right: -50px;
      margin-bottom: -20px;
      @media(max-width: 500px){
        margin-top: -60px;
        margin-right: 0;
      }
    }
  }
`

export { StCustomWidget, Body}