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


const Header = ({header}) => {
  if(!header) return null
  const { url, urlesp, img, imgesp, title, presentedby, pixel, source, medium, cssclass, theme } = header

  const sourcesuffix = source ? `utm_source=${source}&` : ''
  const mediumsuffix = medium ? `utm_medium=${medium}&` : ''

  const suffix = sourcesuffix && mediumsuffix ? `?${sourcesuffix}${mediumsuffix}` : ''

  return (
    <div className={cssclass ? 'cssclass' : ''}>
      <div dangerouslySetInnerHTML={{ __html: pixel }} />
      {
        img && (
          <StHeader className={imgesp ? 'two-cols' : 'one-col'} theme={theme}>
            {
              imgesp && (
                <LinkOrNot url={urlesp} suffix={suffix} cssClassName="featured-logo">
                  <img src={imgesp} alt={title} />
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
              <img src={img} alt={title} />
            </LinkOrNot>
          </StHeader>
        )
      }
    </div>
  )
}

export default Header