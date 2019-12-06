import React from 'react'
import { StHeader } from './style.css'

const LinkOrNot = ({url, suffix, children}) => {
  if(!url) {
    return (
      <div className="col">
        {children}
      </div>
    )
  } else {
    return (
      <div className="col">
        <a href={url+suffix} rel="noreferrer noopener" target="_blank">
          {children}
        </a>
      </div>
    )
  }
}


const Header = ({header}) => {
  if(!header) return null
  const { url, urlesp, img, imgesp, title, presentedby, pixel, source, medium, cssclass } = header

  const sourcesuffix = source ? `utm_source=${source}&amp;` : ''
  const mediumsuffix = medium ? `utm_medium=${medium}&amp;` : ''

  const suffix = sourcesuffix && mediumsuffix ? `?${sourcesuffix}${mediumsuffix}` : ''

  return (
    <div className={cssclass ? 'cssclass' : ''}>
      <StHeader className={imgesp ? 'two-cols' : 'one-col'}>
          {
            imgesp && (
              <LinkOrNot url={urlesp} suffix={suffix}>
                <img src={imgesp} alt={title} />
              </LinkOrNot>
            )
          }
          <LinkOrNot url={url} suffix={suffix}>
            <span>{
              presentedby ? (
                <span>{presentedby}</span>
              ) : (
                <span>Presentado por:</span>
              )
            }
            </span>
            <img src={img} alt={title}/>
          </LinkOrNot>
      </StHeader>
      <div dangerouslySetInnerHTML={{ __html: pixel }} />
    </div>
  )
}

export default Header