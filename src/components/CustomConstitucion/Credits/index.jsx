import React from 'react'

import { StCredits } from './style.css'

const Credits = () => (
  <StCredits>
    <div className="creditsWrapper">
      <h2>Créditos</h2>

      <p className="col">
        <span>Coordinación y Edición:</span>
        <strong>Sebastián Rivas</strong>
        <strong>Tania Opazo</strong>
      </p>

      <p className="col">
        <span>Periodistas:</span>
        <strong>Valentina Danker</strong>
        <strong>Sofía Gómez</strong>
      </p>

      <p className="col">
        <span>Diseño:</span>

        <strong>Alfredo Duarte</strong>
      </p>

      <p className="col">
        <span>Desarrollo:</span>
        <strong>Álex Acuña Viera</strong>
      </p>
    </div>
  </StCredits>
)

export default Credits
