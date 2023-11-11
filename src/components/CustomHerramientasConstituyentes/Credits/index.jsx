import React from 'react'

import { StCredits } from './style.css'

const Credits = () => (
  <StCredits>
    <div className="creditsWrapper">
      <h2>Créditos</h2>
      <h3>La Tercera</h3>
      <p>
        <div className="col">
          <span>Coordinación y Edición:</span>
        </div>
        <div className="col">
          <strong>Tania Opazo</strong>
          <strong>Juan Manuel Ojeda</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Periodistas:</span>
        </div>
        <div className="col">
          <strong>Sofía Gómez</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Desarrollo:</span>
        </div>
        <div className="col">
          <strong>Esteban Yáñez</strong>
          <strong>Álex Acuña Viera</strong>
        </div>
      </p>
      <h3>CRiSS-Lab UDD</h3>
      <span>Computational Research in Social Science Laboratory</span>
      <br />
      &nbsp;
      <br />
      <p>
        <div className="col">
          <span>Director:</span>
        </div>
        <div className="col">
          <strong>Cristian Candia </strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Equipo:</span>
        </div>
        <div className="col">
          <strong>Alonso Astroza</strong>
          <strong>Nicolás Hormazábal</strong>
          <strong>Roberto Correa</strong>
          <strong>Carlos Navarrete</strong>
          <strong>Dänae Catalán</strong>
          <strong>Matías Bull</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Colabora:</span>
        </div>
        <div className="col">
          <strong>CINSDATA Spa</strong>
        </div>
      </p>
    </div>
  </StCredits>
)

export default Credits
