import React from 'react'
import ArticleForm from '../ArticleForm'
import ArticleList from '../ArticleList'
import HeaderForm from '../HeaderForm'
import { StOptions, StOptionsWrapper, StOptionsHeader } from './style.css'

const Options = ({articles, onAddArticle, header, onAddHeader}) => {
  return (
    <StOptionsWrapper>
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
      <StOptionsHeader>
        <div>
          <HeaderForm onAddHeader={onAddHeader} header={header} />
        </div>
      </StOptionsHeader>
    </StOptionsWrapper>
  )
}

export default Options