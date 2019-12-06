import React from 'react'
import { StHeader } from './style.css'

const LinkOrNot = ({url, children}) => {
  if(!url) {
    return (
      <>
        {children}
      </>
    )
  } else {
    return (
      <a href={url} rel="noreferrer noopener" target="_blank">
        {children}
      </a>
    )
  }
}


const Header = ({header}) => {
  if(!header) return null
  const { url, img, title, presentedby, pixel } = header
  return (
    <StHeader>
      <h3>
        <LinkOrNot url={url}>
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
      </h3>
      <div dangerouslySetInnerHTML={{ __html: pixel }} />
    </StHeader>
  )
}

export default Header