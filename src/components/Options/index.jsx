import React from 'react'
import ArticleForm from '../ArticleForm'
import ArticleList from '../ArticleList'
import { StOptions } from './style.css'

const Options = ({articles, onAddArticle}) => {
  return (
    <StOptions>
      <div className="options-form">
        <ArticleForm onAddArticle={onAddArticle} />
      </div>
      <div className="options-list">
        <div className="sectionList">
          <ArticleList articles={articles} />
        </div>
      </div>
    </StOptions>
  )
}

export default Options