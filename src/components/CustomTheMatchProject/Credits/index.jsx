import React from 'react'

import { StCredits } from './style.css'

const Credits = () => (
  <StCredits>
    <div className="creditsWrapper">
      <h2>Créditos</h2>

      <p>
        <div className="col">
          <span>Dirección:</span>
        </div>
        <div className="col">
          <strong>Daniela Cruzat</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Realización:</span>
        </div>
        <div className="col">
          <strong>Ángel Quinteros</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Diseño y animación:</span>
        </div>
        <div className="col">
          <strong>Valentina Marmié</strong>
          <strong>Alfredo Duarte</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Producción:</span>
        </div>
        <div className="col">
          <strong>Daniela Cruzat</strong>
          <strong>Alejandra Olguín</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Dirección de Arte:</span>
        </div>
        <div className="col">
          <strong>Verónica Calderón</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Desarrollo Web:</span>
        </div>
        <div className="col">
          <strong>Álex Acuña Viera</strong>
        </div>
      </p>
      <p>
        <div className="col">
          <span>Editor General Laboratorio de Contenidos:</span>
        </div>
        <div className="col">
          <strong>Ignacio Bazán</strong>
        </div>
      </p>
    </div>
  </StCredits>
)

export default Credits
