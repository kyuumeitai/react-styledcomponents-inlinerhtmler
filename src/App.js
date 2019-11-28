import React, {useState, useEffect} from 'react'
import Preview from './components/Preview/'
import Options from './components/Options/'
import ArticleList from './components/ArticleList'
import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import GlobalStyle from './global.css'

const sheet = new ServerStyleSheet()

function App() {
  const initialState = () => JSON.parse(window.localStorage.getItem('articles')) || []
  const [articles, setArticles] = useState(initialState)
  const [htmloutput, setHtmloutput] = useState()

  const handleAddArticle = (article) => {
    setArticles([...articles, article])
  }

  useEffect(() => {
    setHtmloutput(`${ReactDOMServer.renderToStaticMarkup(
      sheet.collectStyles(<Preview articles={articles} />)
    )} ${sheet.getStyleTags()}`)
    window.localStorage.setItem('articles', JSON.stringify(articles))
  }, [articles])

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <h1>Widgetizador</h1>
      </header>
      <main>
        <div className="section-data">
          <div className="sectionOptions">
            <Options articles={articles} setArticles={setArticles} onAddArticle={handleAddArticle} />
          </div>
        </div>
        <div className="section-data">
          <p>Previsualización</p>
          <div className="preview">
            <Preview articles={articles} />
          </div>
        </div>
        <div className="section-output">
          <p>Salida</p>
          <textarea value={htmloutput}></textarea>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App
