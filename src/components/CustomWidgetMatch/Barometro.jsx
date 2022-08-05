import * as React from "react";

function SvgBarometro(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401 208.5" {...props}>
      <g data-name="Layer 2">
        <g data-name="barometro">
          <g stroke="#ccc" strokeMiterlimit={10}>
            <path
              d="M.5 201A200.8 200.8 0 013 169.62l79 12.54A119.89 119.89 0 0080.5 201z"
              fill="#d75c5c"
            />
            <path
              d="M3 169.62A200.88 200.88 0 0122.3 110l71.28 36.4A120.48 120.48 0 0082 182.16z"
              fill="#e49292"
            />
            <path
              d="M22.3 110a200.2 200.2 0 0187.4-87.62L146 93.8a120.18 120.18 0 00-52.44 52.57z"
              fill="#f1c8c8"
            />
            <path
              d="M109.7 22.35a199.61 199.61 0 01181.6 0L255 93.8a119.75 119.75 0 00-109 0z"
              fill="#eee"
            />
            <path
              d="M291.3 22.35A200.2 200.2 0 01378.7 110l-71.28 36.4A120.18 120.18 0 00255 93.8z"
              fill="#bdd7ed"
            />
            <path
              d="M378.7 110a200.88 200.88 0 0119.3 59.62l-79 12.54a120.48 120.48 0 00-11.6-35.79z"
              fill="#7bb0dc"
            />
            <path
              d="M398 169.62a200.8 200.8 0 012.5 31.38h-80a119.89 119.89 0 00-1.5-18.84z"
              fill="#3489cd"
            />
          </g>
          <path d="M185.73 190.82l34.11-105.9-4.57 111.19" fill="#ccc" />
          <ellipse cx={200.5} cy={193.46} rx={15} ry={15.04} fill="#464a4f" />
        </g>
      </g>
    </svg>
  );
}

export default SvgBarometro;
