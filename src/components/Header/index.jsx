import React from 'react'
import { StHeader } from './style.css'

const LinkOrNot = ({ url, suffix, children, cssClassName}) => {
  if(!url) {
    return (
      <div className={`col ${cssClassName ? cssClassName : ''}`}>
        {children}
      </div>
    )
  } else {
    return (
      <div className={`col ${cssClassName ? cssClassName : ''}`}>
        <a href={url+suffix} rel="noreferrer noopener" target="_blank">
          {children}
        </a>
      </div>
    )
  }
}


const Header = ({header, site}) => {
  if(!header) return null
  const { url, title, urlesp, img, imgesp, brand, presentedby, theme, bajada } = header
  const { pixel, source, medium } = site

  const sourcesuffix = source ? `utm_source=${source}&` : ''
  const mediumsuffix = medium ? `utm_medium=${medium}&` : ''

  const suffix = sourcesuffix && mediumsuffix ? `?${sourcesuffix}${mediumsuffix}` : ''

  return (
    <div>
      {
        pixel && (
          <div dangerouslySetInnerHTML={{ __html: pixel }} />
        )
      }
      {
        title && (
          <StHeader theme={theme}>
            {
              urlesp ? (
                <a href={urlesp} target="_blank" rel="noopener noreferrer" className="simplelink">
                  <h1>{title}</h1>
                  <p>{bajada}</p>
                </a>
              ) : (
                <>
                  <h1>{title}</h1>
                  <p>{bajada}</p>
                </>
              )
            }
          </StHeader>
        )
      }
      {
        img && (
          <StHeader className={imgesp ? 'two-cols' : 'one-col'} theme={theme}>
            {
              imgesp && (
                <LinkOrNot url={urlesp} suffix={suffix} cssClassName="featured-logo">
                  <img src={imgesp} alt={brand} />
                </LinkOrNot>
              )
            }
            <LinkOrNot url={url} suffix={suffix} cssClassName="sponsor-logo">
              <span className="spanwrap">{
                presentedby && (
                  <span>{presentedby}</span>
                )
              }
              </span>
              <img src={img} alt={brand} />
            </LinkOrNot>
          </StHeader>
        )
      }
    </div>
  )
}

export default Header