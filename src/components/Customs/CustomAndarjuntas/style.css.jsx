import styled from "styled-components";

const StCustomWidget = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  .elheader {
    max-width: 1200px;
    margin: 10px auto;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    img {
      display: block;
      max-width: 100px;
    }
    h2 {
      margin: 0;
      padding: 0;
      line-height: 1;
    }
    span {
      position: relative;
      z-index: 2;
      font-family: "Open Sans", sans-serif;
      color: #000;
      text-decoration: none;
    }
    > div {
      &:first-of-type {
        justify-self: flex-start;
        img {
          max-width: 200px;
          @media (max-width: 1330px) {
            max-width: 160px;
          }
          @media (max-width: 1100px) {
            max-width: 80px;
          }
          @media (max-width: 500px) {
            max-width: 80px;
          }
        }
      }

      &:last-of-type {
        justify-self: flex-end;
        display: grid;
        grid-template-columns: 1fr 120px;
        grid-gap: 10px;
        padding-bottom: 5px;
        align-items: center;
        img {
          max-width: 110px;
        }
        @media (max-width: 500px) {
          grid-template-columns: 1fr;
          grid-gap: 1px;
        }
      }
    }
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  margin: 10px auto;

  gap: 1rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  .w100b {
    display: block;
    width: 100%;
    position: relative;
    height: 0;
    padding-bottom: 60%;
    iframe {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }
  img {
    max-width: 100%;
    display: block;
  }
  line-height: 1;
  a {
    text-decoration: none;
    color: black;
  }
  figure {
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 60%;
    a {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
  }
  h3 {
    padding: 10px 0 10px;
    font-weight: 100;
    font-size: 18px;
  }
  .art-container {
    @media (max-width: 800px) {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
    }
  }
`;

export { StCustomWidget, Body };
