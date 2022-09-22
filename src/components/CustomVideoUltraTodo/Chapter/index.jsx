import React from 'react'

const LinkOrDiv = ({ url, children }) => {
  if (url && url.length > 0) {
    return (
      <a href={url} className="chap-wrap">
        {children}
      </a>
    )
  }
  return <div className="chap-wrap">{children}</div>
}

const Chapter = ({ chapter, ...props }) => {
  return (
    <div className={`chapter ${chapter.status.join(' ')}`} {...props}>
      <LinkOrDiv url={chapter.url}>
        <div className="chapter-img">
          <img src={chapter.img} alt={chapter.name} />
        </div>
        <div className="chapter-info">
          <div className="wrap">
            <h3>
              <small>{chapter.pretitle}</small>
              {chapter.name}
              {chapter.aftername && <small>{chapter.aftername}</small>}
            </h3>
            <p>{chapter.title}</p>
          </div>
        </div>
        <div className="chapter-iframe">
          <div className="video-proportion-16by9">
            <video
              src={chapter.preview}
              muted={true}
              autoPlay={true}
              playsInline={true}
              preload="auto"
              loop></video>
          </div>
        </div>
        <div className="chapter-availability">
          <span>{chapter.label}</span>
        </div>
      </LinkOrDiv>
    </div>
  )
}

export default Chapter
