import React from 'react'

import { StCredits } from './style.css'

const Credits = () => (
  <StCredits>
    <div className="creditsWrapper">
      <h2>Créditos</h2>

      <div class="wra">
        <div className="col">
          <span>Edición y montaje:</span>
        </div>
        <div className="col">
          <strong>Sebastián Millán</strong>
        </div>
      </div>
      <div class="wra">
        <div className="col">
          <span>Edición General</span>
        </div>
        <div className="col">
          <strong>Ignacio Bazán</strong>
        </div>
      </div>
      <div class="wra">
        <div className="col">
          <span>Edición y producción periodística:</span>
        </div>
        <div className="col">
          <strong>Jorge Arellano</strong>
        </div>
      </div>
      <div class="wra">
        <div className="col">
          <span>Producción periodística:</span>
        </div>
        <div className="col">
          <strong>Daniela Durán</strong>
        </div>
      </div>

      <div class="wra">
        <div className="col">
          <span>Cámaras:</span>
        </div>
        <div className="col">
          <strong>Álex Utreras</strong>
          <strong>Rodrigo Bacigalupe</strong>
          <strong>Ángel Quinteros</strong>
          <strong>Catalina Jaque</strong>
          <strong>Sebastián Millán</strong>
        </div>
      </div>
      <div class="wra">
        <div className="col">
          <span>Dirección de Arte:</span>
        </div>
        <div className="col">
          <strong>Patricia Holmqvist</strong>
        </div>
      </div>
      <div class="wra">
        <div className="col">
          <span>Gráficas:</span>
        </div>
        <div className="col">
          <strong>Sebastián Sánchez</strong>
        </div>
      </div>
      <div class="wra">
        <div className="col">
          <span>Desarrollo:</span>
        </div>
        <div className="col">
          <strong>Álex Acuña Viera</strong>
        </div>
      </div>
    </div>
  </StCredits>
)

export default Credits
