import styled from "styled-components";

const StCredits = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: black;
  color: white;
  .creditsWrapper {
    max-width: 600px;
    padding: 2rem 1rem;
    margin: 0 auto;
  }
  h2 {
    line-height: 1;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 1rem;
  }
  strong {
    font-weight: bold;
    display: block;
  }
`;

export { StCredits };
