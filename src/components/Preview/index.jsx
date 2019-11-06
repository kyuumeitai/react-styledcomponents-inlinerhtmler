import React from 'react'
import PropTypes from 'prop-types'
import Article from '../Article'
import { StWidget, StHeader, StBody } from './style.css'

const Preview = ({articles}) => {
  return (
    <StWidget>
      <StHeader columns="2">
        <div className="col">
          <h2>
            <a href="https://www.latercera.com/tiempo-de-actuar/" target="_blank" rel="noreferrer noopener">
              <img src="https://s2.latercera.com/wp-content/uploads/2019/09/logo-tiempodeactuar-new.png" alt="Tiempo de Actuar"/>
            </a>
          </h2>
        </div>
        <div className="col">
          <div className="sponsored-by">
            <span>Presentado por:</span>
            <a href="https://www.intervialchile.cl/" target="_blank" rel="noreferrer noopener">
              <img src="https://s2.latercera.com/wp-content/uploads/2019/09/logo-isa.png" alt="ISA Intervial" />
            </a>
          </div>
        </div>
      </StHeader>
      <StBody columns={articles.length}>
        {
          articles.length > 0 ? articles.map((article, index) => {
            return (
              <Article title={article.title} url={article.url} tag={article.tag} excerpt={article.excerpt} img={article.img}  key={index} />
            )
          })
          :
          (
            <h2>Agrega algunos artículos :0 </h2>
          )
        }
      </StBody>
    </StWidget>
  )
}

Preview.propTypes = {
  articles: PropTypes.array
}

Preview.defaultProps = {
  articles: []
}

export default Preview