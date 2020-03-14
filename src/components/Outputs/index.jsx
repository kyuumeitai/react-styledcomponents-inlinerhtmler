import React, {useState, useEffect} from 'react'

import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Preview from '../Preview/'

import { StOutputs, StOutput, StOutputHeader, StTextarea } from './style.css'

const sheet = new ServerStyleSheet()

const Output = ({site, articles, header}) => {
  const [htmloutput, setHtmloutput] = useState()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if(copied === true){
      setTimeout(() => { setCopied(false) }, 3000)
    }
  }, [copied])

  useEffect(() => {
    setHtmloutput(`${ReactDOMServer.renderToStaticMarkup(
      sheet.collectStyles(<Preview articles={articles} header={header} site={site} />)
    )} ${sheet.getStyleTags()}`)
  }, [articles, header, site])

  return (
    <StOutput>
      <StOutputHeader>
        <h4>
          {site.sitename}
        </h4>
        <div>
          <CopyToClipboard
            text={htmloutput}
            onCopy={() => setCopied(true)}
            >
            <button>Copiar al portapapeles</button>
          </CopyToClipboard>
          {copied && (
            <span>¡Copiado!</span>
          )}
        </div>
      </StOutputHeader>
      <StTextarea value={htmloutput} spellcheck="false" />
    </StOutput>
  )
}

const Outputs = ({sites, articles, header}) => {
  return (
    <StOutputs>
      <h2>Salidas</h2>
      {
        sites && (
          <>
            {
              sites.map(site => {
                return (
                  <Output site={site} key={site.siteid} articles={articles} header={header} />
                )
              })
            }
          </>
        )
      }
    </StOutputs>
  )
}

export default Outputs