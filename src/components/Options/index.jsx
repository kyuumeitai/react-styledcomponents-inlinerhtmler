import React, {useContext} from 'react'
import ArticleForm from '../ArticleForm'
import ArticleList from '../ArticleList'
import HeaderForm from '../HeaderForm'
import { StOptions, StOptionsWrapper, StOptionsHeader } from './style.css'
import ArticleContext from '../../contexts/context-articles'

const Options = ({ articles, onAddArticle, onEditArticle, header, onAddHeader}) => {
  const artCon = useContext(ArticleContext)

  return (
    <StOptionsWrapper>
      <StOptions>
        <div className="options-form">
          <ArticleForm onAddArticle={onAddArticle} onEditArticle={onEditArticle} initialArticle={artCon.article}> </ArticleForm>
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