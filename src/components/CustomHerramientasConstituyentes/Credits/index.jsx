import React from 'react'

import { StCredits } from './style.css'

const Credits = () => (
  <StCredits>
    <div className="creditsWrapper">
      <h2>Créditos</h2>

      <p>
        <div className="col">
          <span>Coordinación y Edición:</span>
        </div>
        <div className="col">
          <strong>Juan Manuel Ojeda</strong>
          <strong>Tania Opazo</strong>
          <strong>Sebastián Rivas</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Periodistas:</span>
        </div>
        <div className="col">
          <strong>Valentina Danker</strong>
          <strong>Felipe Díaz</strong>
          <strong>Sofía Gómez</strong>
          <strong>Sebastián Labrín</strong>
          <strong>Juan Manuel Ojeda</strong>
          <strong>Carlos Said</strong>
          <strong>Daniela Jiménez</strong>
          <strong>Julie Arredondo</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Diseño:</span>
        </div>
        <div className="col">
          <strong>Alfredo Duarte</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Desarrollo:</span>
        </div>
        <div className="col">
          <strong>Álex Acuña Viera</strong>
        </div>
      </p>
    </div>
  </StCredits>
)

export default Credits
