import React from "react";
import { StHeader } from "./style.css";

const Header = ({ posmode }) => {
  return (
    <StHeader posmode={posmode}>
      <div>
        <img
          src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/KT55QY2YOBEO7NDP674ISHI3PI.png"
          alt="Laboratorio de Contenidos de Marca"
        />
      </div>
      <div>
        <span>Presentado por</span>
        <img
          src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/A5ZKXB5H3NEJ7KSRAADS5RI7AE.png"
          alt="Casillero del Diablo"
        />
      </div>
    </StHeader>
  );
};

export default Header;
