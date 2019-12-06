import React from 'react'
import PropTypes from 'prop-types'
import Article from '../Article'
import Header from '../Header'
import { StWidget, StHeader, StBody } from './style.css'

const Preview = ({articles, header}) => {
  return (
    <StWidget>
      <StHeader>
        <Header header={header}/>
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