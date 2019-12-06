import React, { useContext } from 'react'
import ArticleContext from '../../contexts/context-articles'
import { StArticleItem, StArticles, StEditMenu } from './style.css'

const ArticleItem = ({article}) => {
  const {title} = article
  const artCon = useContext(ArticleContext)
  return (
    <StArticleItem>
      <span className="title">{title}</span>
      <StEditMenu>
        {/* <button>Editar</button> */}
        <button onClick={() => artCon.handleRemoveArticle(article)}>Borrar</button>
      </StEditMenu>
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