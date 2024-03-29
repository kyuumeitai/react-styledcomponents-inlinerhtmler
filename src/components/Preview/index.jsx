import React from 'react'
import PropTypes from 'prop-types'
// import Article from '../Article'
import Header from '../Header'
import CustomWidget from '../CustomTheMatchProject/'
import { StWidget, StHeader, StBody } from './style.css'

const Preview = ({ articles, header, site }) => {
  const colnumber = articles.length
  return (
    <StWidget>
      <StBody columns={colnumber} theme={header.theme} layout={header.layout}>
        {articles.length > 0 ? (
          articles.map((article, index) => {
            return null
            // return (
            //   <Article
            //     title={article.title}
            //     url={article.url}
            //     tag={article.tag}
            //     excerpt={article.excerpt}
            //     img={article.img}
            //     icon={article.icon}
            //     type={article.type}
            //     source={site ? site.source : ''}
            //     medium={site ? site.medium : ''}
            //     theme={header.theme}
            //     iframe={article.iframe}
            //     key={index}
            //     isIframeReplacingContent={article.isIframeReplacingContent}
            //     iframeRatio={article.iframeRatio}
            //   />
            // )
          })
        ) : (
          <CustomWidget />
        )}
      </StBody>
    </StWidget>
  )
}

Preview.propTypes = {
  articles: PropTypes.array,
}

Preview.defaultProps = {
  articles: [],
}

export default Preview
