import React from 'react'
import Preview from './components/Preview/'
import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import './App.css'

const sheet = new ServerStyleSheet()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Widgetizador</h1>
      </header>
      <main>
        <div className="section-data">
          <p>Data</p>
        </div>
        <div className="section-data">
          <p>Previsualización</p>
          <div className="preview">
            <Preview />
          </div>
        </div>
        <div className="section-output">
          <p>Salida</p>

          <textarea value={`${ReactDOMServer.renderToStaticMarkup(
            sheet.collectStyles(<Preview />)
          )} ${sheet.getStyleTags()}`}
          ></textarea>

        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App
