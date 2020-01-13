import React from 'react'
import { StArticle, IframeRatio, StArticleWrap} from './style.css'

const IFrameComponent = ({iframeRatio, iframe}) => {
  return (
    <div className="iframe-wrapper-wrapper-wrapper">
      <div className="iframe-wrapper-wrapper">
        <IframeRatio aspectRatio={iframeRatio} dangerouslySetInnerHTML={{ __html: iframe }} />
      </div>
    </div>
  )
}

const Article = ({ title, url, tag, excerpt, img, icon, type, source, medium, theme, iframe, isIframeReplacingContent, iframeRatio}) => {

  const addDefaultSrc = (e) => {
    e.target.src = 'https://www.placecage.com/700/450'
  }

  const sourcesuffix = source ? `utm_source=${source}&` : ''
  const mediumsuffix = medium ? `utm_medium=${medium}&` : ''

  const suffix = sourcesuffix && mediumsuffix ? `?${sourcesuffix}${mediumsuffix}` : ''

  return (
    <StArticle theme={theme}>
      {
        isIframeReplacingContent ? (
          <IFrameComponent iframeRatio={iframeRatio} iframe={iframe} />
        ) : (
        <StArticleWrap hasIframe={iframe ? true : false} theme={theme}>
          {
            iframe && (
              <IFrameComponent iframeRatio={iframeRatio} iframe={iframe} />
            )
          }
          <a href={url + suffix} target="_blank" rel="noopener noreferrer">
            <figure>
              <div className="imgwrap">
                <img
                  onError={addDefaultSrc}
                  src={img}
                  alt={title} />
              </div>
              <figcaption>
                {
                  icon && icon.length > 0 && (
                    <span className="icon">
                      <img src={icon} alt="" />
                    </span>
                  )
                }
                {
                  type && type.length > 0 && (
                    <span className="type">
                      {type}
                    </span>
                  )
                }
                {
                  tag && tag.length > 0 && (
                    <span className="tag">
                      {tag}
                    </span>
                  )
                }
                <h2>
                  {
                    title && title.length > 0 ? title : 'Nostrud aliquip tempor excepteur ut eiusmod cillum.'
                  }
                </h2>
                <p>{excerpt}</p>
                {
                  theme && theme === 'uno' && (
                    <span className="more"> ver más</span>
                  )
                }
              </figcaption>
            </figure>
          </a>
          </StArticleWrap>
        )
      }
    </StArticle>
  )
}

export default Article