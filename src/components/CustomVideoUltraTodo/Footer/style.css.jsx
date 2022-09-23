import styled from "styled-components";

const StFooter = styled.header`
  background-color: black;
  color: white;
  height: 140px;
  padding: 15px 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  div {
    &:first-of-type {
      justify-self: flex-start;
      img,
      svg {
        max-height: 80px;
        max-width: 100%;
      }
    }
    &:last-of-type {
      justify-self: flex-end;
      display: flex;
      align-items: center;
      img,
      svg {
        max-height: 80px;
        max-width: 100%;
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

export { StFooter };
