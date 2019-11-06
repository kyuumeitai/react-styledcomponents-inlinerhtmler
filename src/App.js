import React, {useState, useEffect} from 'react'
import Preview from './components/Preview/'
import Options from './components/Options/'
import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import GlobalStyle from './global.css'

const sheet = new ServerStyleSheet()

function App() {
  const [articles, setArticles] = useState([])
  const [htmloutput, setHtmloutput] = useState()

  const handleAddArticle = (article) => {
    setArticles([...articles, article])
  }

  useEffect(() => {
    setHtmloutput(`${ReactDOMServer.renderToStaticMarkup(
      sheet.collectStyles(<Preview articles={articles} />)
    )} ${sheet.getStyleTags()}`)
  }, [articles])


  // const handleArticleChanges = (articles) => {



  // }

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <h1>Widgetizador</h1>
      </header>
      <main>
        <div className="section-data">
          <p>Opciones</p>
          <Options articles={articles} setArticles={setArticles} onAddArticle={handleAddArticle} />
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
