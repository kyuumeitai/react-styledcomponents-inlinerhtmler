import styled from "styled-components";

const StHeader = styled.header`
  background-color: black;
  color: white;
  height: 80px;
  padding: 15px 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  div {
    &:first-of-type {
      justify-self: flex-start;
      img,
      svg {
        height: 40px;
      }
    }
    &:last-of-type {
      justify-self: flex-end;
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
    }
  }
`;

export { StHeader };
