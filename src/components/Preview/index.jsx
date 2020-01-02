import React from 'react'
import PropTypes from 'prop-types'
import Article from '../Article'
import Header from '../Header'
import CustomWidget from '../CustomNextChina2'
import { StWidget, StHeader, StBody } from './style.css'

const Preview = ({articles, header}) => {
  const colnumber = header.cssclass && header.cssclass === 'box-campamento' ? 4 : articles.length
  return (
    <StWidget className={header.cssclass ? header.cssclass : ''}>
      <StHeader theme={header.theme}>
        <Header header={header}/>
      </StHeader>
      <StBody columns={colnumber} theme={header.theme}>
        {
          articles.length > 0 ? articles.map((article, index) => {
            return (
              <Article title={article.title} url={article.url} tag={article.tag} excerpt={article.excerpt} img={article.img} icon={article.icon} type={article.type} cssclass={article.cssclass} source={header.source} medium={header.medium} widgetclass={header.cssclass} theme={header.theme} iframe={article.iframe} key={index} />
            )
          })
          :
          (
            <CustomWidget />
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