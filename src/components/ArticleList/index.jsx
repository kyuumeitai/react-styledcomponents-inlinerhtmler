import React from 'react'
import { StArticleItem, StArticles } from './style.css'

const ArticleItem = ({article}) => {
  const {title} = article
  return (
    <StArticleItem>
      <span className="title">{title}</span>
    </StArticleItem>
  )
}

const ArticleList = ({articles}) => {
  return (
    <>
      <h3>Listado de Artículos</h3>
      <StArticles>
        {
          articles.map((article, index) => {
            return (
              <ArticleItem article={article} key={index} />
            )
          })
        }
      </StArticles>
    </>
  )
}

export default ArticleList