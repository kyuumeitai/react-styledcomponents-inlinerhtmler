import React, {useState, useEffect} from 'react'
import Preview from './components/Preview/'
import Options from './components/Options/'
import ReactDOMServer from 'react-dom/server'
import ArticleContext from './contexts/context-articles'
import { ServerStyleSheet } from 'styled-components'

import GlobalStyle from './global.css'

const sheet = new ServerStyleSheet()

function App() {
  const initialState = () => JSON.parse(window.localStorage.getItem('articles')) || []
  const initialHeaderState = () => JSON.parse(window.localStorage.getItem('header')) || {}
  const initialVersionsState = () => JSON.parse(window.localStorage.getItem('versions')) || {}
  const [articles, setArticles] = useState(initialState)
  const [article, setArticle] = useState({})
  const [header, setHeader] = useState(initialHeaderState)
  const [htmloutput, setHtmloutput] = useState()
  const [versions, setVersions] = useState(initialVersionsState)
  const [version, setVersion] = useState({})

  const handleAddArticle = (article) => {
    setArticles([...articles, article])
  }

  const handleAddHeader = (header) => {
    setHeader(header)
  }

  const handleEditArticle = (article) => {
    const newArr = [...articles]
    const oldArtIndex = newArr.findIndex(item => item.articleid === article.articleid)
    newArr[oldArtIndex] = article
    setArticles(newArr)
    setArticle({})
  }

  const removeArticle = article => {
    setArticles(articles.filter(item => item.articleid !== article.articleid))
  }

  const triggerEditArticle = article => {
    setArticle(...articles.filter(item => item.articleid === article.articleid))
  }

  const orderArticles = thearticles => {
    setArticles(thearticles)
  }

  useEffect(() => {
    setHtmloutput(`${ReactDOMServer.renderToStaticMarkup(
      sheet.collectStyles(<Preview articles={articles} header={header} />)
    )} ${sheet.getStyleTags()}`)
    window.localStorage.setItem('articles', JSON.stringify(articles))
    window.localStorage.setItem('header', JSON.stringify(header))
    window.localStorage.setItem('versions', JSON.stringify(versions))
  }, [articles, header, versions])

  return (
    <ArticleContext.Provider
      value={{
        articles: articles,
        handleAddArticle: (article) => handleAddArticle(article),
        handleRemoveArticle: (article) => removeArticle(article),
        handleEditArticle: (article) => handleAddArticle(article),
        handleOrderArticles: (articles) => orderArticles(articles),
        triggerEditArticle: (article) => triggerEditArticle(article),
        header: header,
        article: article,
        handleAddHeader: (header) => handleAddHeader(header)
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
              <Options articles={articles} setArticles={setArticles} onAddArticle={handleAddArticle} onEditArticle={handleEditArticle} header={header} onAddHeader={handleAddHeader} />
            </div>
          </div>
          <div className="section-data">
            <h3>Previsualización</h3>
            <div className="preview">
              <Preview articles={articles} header={header} />
            </div>
          </div>
          <div className="section-output">
            <p>Salida</p>
            <textarea rows="30" cols="200" value={htmloutput}></textarea>
          </div>
        </main>
        <footer>

        </footer>
      </div>
    </ArticleContext.Provider>
  );
}

export default App
