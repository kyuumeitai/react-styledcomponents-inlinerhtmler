import React, {useContext} from 'react'
import ArticleForm from '../ArticleForm'
import ArticleList from '../ArticleList'
import HeaderForm from '../HeaderForm'
import { StOptions, StOptionsWrapper, StOptionsHeader, StOptionsVersions, StOptionsSiteslist } from './style.css'
import ArticleContext from '../../contexts/context-articles'
import SitesForm from '../SitesForm'
import SitesList from '../SitesList'

const Options = ({ articles, sites, onAddArticle, onEditArticle, header, onAddHeader, onAddSite, onEditSite }) => {
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
      <StOptions>
        <div className="option">
          <StOptionsHeader>
            <div>
              <HeaderForm onAddHeader={onAddHeader} header={header} />
            </div>
          </StOptionsHeader>
        </div>
        <div className="option">
          <StOptionsVersions>
            <div>
              <SitesForm onAddSite={onAddSite} onEditSite={onEditSite} initialSite={artCon.site} />
            </div>
          </StOptionsVersions>
        </div>
        <div className="option">
          <StOptionsSiteslist>
            <div>
              <SitesList sites={sites} />
            </div>
          </StOptionsSiteslist>
        </div>
      </StOptions>
    </StOptionsWrapper>
  )
}

export default Options