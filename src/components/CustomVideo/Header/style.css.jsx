import styled, { css } from "styled-components";

// padding-bottom: ${props => props.aspectRatio ? () => {

const fixedMode = css`
  position: fixed;
  top: 38px;
  right: 0;
  left: 0;
  z-index: 2;
  grid-template-columns: repeat(3, 1fr);
  div {
    &:last-of-type {
      justify-self: center;
    }
  }
`;

const widgetMode = css`
  grid-template-columns: repeat(2, 1fr);
  div {
    &:last-of-type {
      justify-self: flex-end;
    }
  }
`;

const StHeader = styled.header`
  ${(props) =>
    props.posmode
      ? () => {
          if (props.posmode === "fixed") {
            return fixedMode;
          }
          if (props.posmode === "widget") {
            return widgetMode;
          }
        }
      : ""};
  grid-template-rows: 1fr;
  color: white;
  grid-template-rows: repeat(1, 1fr);
  background-color: black;
  height: 80px;
  padding: 15px 25px;
  display: grid;
  align-items: center;
  pointer-events: none;
  z-index: 12;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  &:after {
    content: "";
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 15vh;
    z-index: -1;
  }
  div {
    &:first-of-type {
      justify-self: flex-start;
      grid-column: span 1;
      img,
      svg {
        height: 40px;
      }
    }
    &:last-of-type {
      grid-column: span 1;
      display: flex;
      align-items: center;
      img,
      svg {
        height: 55px;
      }
      span {
        margin-right: 10px;
        @media (max-width: 800px) {
          display: none;
        }
      }
      @media (max-width: 800px) {
        justify-self: flex-end;
      }
    }
  }
`;

export { StHeader };
