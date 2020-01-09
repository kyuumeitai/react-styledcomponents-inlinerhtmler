import React, {useState, useEffect} from 'react'

import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import Preview from '../Preview/'

import { StOutputs, StOutput, StTextarea } from './style.css'

const sheet = new ServerStyleSheet()

const Output = ({site, articles, header}) => {
  const [htmloutput, setHtmloutput] = useState()
  useEffect(() => {
    setHtmloutput(`${ReactDOMServer.renderToStaticMarkup(
      sheet.collectStyles(<Preview articles={articles} header={header} site={site} />)
    )} ${sheet.getStyleTags()}`)
  }, [articles, header, site])

  return (
    <StOutput>
      <h4>{site.sitename}</h4>
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