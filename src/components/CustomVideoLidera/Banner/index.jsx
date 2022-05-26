import React from "react";
import styled from "styled-components";

const StBanner = styled.a`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: black;
  img {
    border: 1px solid #222;
    border-radius: 5px;
  }
  .mob {
    display: none;
    max-width: 100%;

    @media (max-width: 800px) {
      display: block;
    }
  }

  .desk {
    display: block;
    max-width: 100%;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const Banner = () => {
  return (
    <StBanner
      href="https://www.youtube.com/watch?v=P3fxPfI2XOg&utm_source=bannerfooter&utm_medium=latercera"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="mob"
        src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/NVXNZWPPLRA2BPI7R34YYTBVWI.png"
      />
      <img
        className="desk"
        src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/ZMUUB64PJBE4JPSOBTSGQIEMH4.png"
      />
    </StBanner>
  );
};

export default Banner;
