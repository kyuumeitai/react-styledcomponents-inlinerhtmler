import React, {useState, useEffect} from 'react'
import Preview from './components/Preview/'
import Options from './components/Options/'
import ArticleContext from './contexts/context-articles'
import Outputs from './components/Outputs'

import GlobalStyle from './global.css'

function App() {
  const initialState = () => JSON.parse(window.localStorage.getItem('articles')) || []
  const initialHeaderState = () => JSON.parse(window.localStorage.getItem('header')) || {}
  const initialSitesState = () => JSON.parse(window.localStorage.getItem('sites')) || []
  const [articles, setArticles] = useState(initialState)
  const [article, setArticle] = useState({})
  const [header, setHeader] = useState(initialHeaderState)

  const [sites, setSites] = useState(initialSitesState)
  const [site, setSite] = useState({})

  const handleAddArticle = (article) => {
    setArticles([...articles, article])
  }

  const handleAddHeader = (header) => {
    setHeader(header)
  }

  const handleAddSite = (site) => {
    setSites([...sites, site])
  }

  const handleEditArticle = (article) => {
    const newArr = [...articles]
    const oldArtIndex = newArr.findIndex(item => item.articleid === article.articleid)
    newArr[oldArtIndex] = article
    setArticles(newArr)
    setArticle({})
  }

  const handleEditSite = (site) => {
    console.log(site)
    const newArr = [...sites]
    const oldSiteIndex = newArr.findIndex(item => item.siteid === site.siteid)
    console.log('>>>oldSiteIndex', oldSiteIndex)
    newArr[oldSiteIndex] = site
    setSites(newArr)
    setSite({})
  }

  const removeArticle = article => {
    setArticles(articles.filter(item => item.articleid !== article.articleid))
  }

  const removeSite = site => {
    setSites(sites.filter(item => item.siteid !== site.siteid))
  }

  const triggerEditArticle = article => {
    setArticle(...articles.filter(item => item.articleid === article.articleid))
  }

  const triggerEditSite = site => {
    console.log('>>>triggerEditSite', site)
    setSite(...sites.filter(item => item.siteid === site.siteid))
  }

  const orderArticles = thearticles => {
    setArticles(thearticles)
  }

  const orderSites = thesites => {
    setSites(thesites)
  }

  useEffect(() => {
    window.localStorage.setItem('articles', JSON.stringify(articles))
    window.localStorage.setItem('header', JSON.stringify(header))
    window.localStorage.setItem('sites', JSON.stringify(sites))
  }, [articles, header, sites])

  return (
    <ArticleContext.Provider
      value={{
        articles: articles,
        sites: sites,
        handleAddArticle: (article) => handleAddArticle(article),
        handleRemoveArticle: (article) => removeArticle(article),
        handleEditArticle: (article) => handleAddArticle(article),
        handleOrderArticles: (articles) => orderArticles(articles),
        triggerEditArticle: (article) => triggerEditArticle(article),

        handleRemoveSite: (site) => removeSite(site),
        handleOrderSites: (sites) => orderSites(sites),
        triggerEditSite: (site) => triggerEditSite(site),

        header: header,
        article: article,
        handleAddHeader: (header) => handleAddHeader(header),
        site: site,
      }}
    >
      <div className="App">
        <GlobalStyle />
        <header className="App-header">
          <h1>Widgetizador</h1>
        </header>
        <main>
          <div className="section-data">
            <div className="sectionOptions">
              <Options articles={articles} sites={sites} setArticles={setArticles} onAddArticle={handleAddArticle} onEditArticle={handleEditArticle} header={header} onAddHeader={handleAddHeader} onAddSite={handleAddSite} onEditSite={handleEditSite} />
            </div>
          </div>
          <div className="section-data">
            <h3>Previsualización</h3>
            <div className="preview">
              <Preview articles={articles} header={header} site={sites && sites.length ? sites[0] : {}} />
            </div>
          </div>
          <Outputs sites={sites} articles={articles} header={header} />
        </main>
        <footer>

        </footer>
      </div>
    </ArticleContext.Provider>
  );
}

export default App
