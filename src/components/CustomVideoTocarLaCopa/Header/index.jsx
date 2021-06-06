import React from "react";
import { StHeader } from "./style.css";

const Header = ({ posmode }) => {
  return (
    <StHeader posmode={posmode}>
      <div>
        <img
          src="https://www.latercera.com/resizer/kXPp5UxoLulsiUCHx6GjdFCGC5s=/arc-anglerfish-arc2-prod-copesa/public/YE4IYFI4NNCD7JV4EMCR3OPPBI.png"
          alt="Laboratorio de Contenidos de Marca"
        />
      </div>
      <div>
        <span>Presentado por</span>
        <img
          src="https://www.latercera.com/resizer/CDuEaFeGx2OhhX7GeAzArfhueqQ=/arc-anglerfish-arc2-prod-copesa/public/U3223TJYFRAR7HNHDUQUZJBGUE.png"
          alt="Adidas"
        />
      </div>
    </StHeader>
  );
};

export default Header;
