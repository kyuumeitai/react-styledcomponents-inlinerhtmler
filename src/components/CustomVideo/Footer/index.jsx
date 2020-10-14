import React from "react";
import { StFooter } from "./style.css";
import Banner from "../Banner";

const Footer = () => {
  return (
    <>
      <Banner />
      <StFooter>
        <div>
          <img
            src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/KT55QY2YOBEO7NDP674ISHI3PI.png"
            alt="Laboratorio de Contenidos de Marca"
          />
        </div>
        <div>
          <span>Presentado por</span>
          <img
            src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/WXDJ3WWUWBFDHMUWQHSKELPONQ.png"
            alt="Casillero del Diablo"
          />
        </div>
      </StFooter>
    </>
  );
};

export default Footer;
