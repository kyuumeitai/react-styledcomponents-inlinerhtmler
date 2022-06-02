import React from 'react'
import { WrapVideo } from '../style.css'

const VideoHero = ({ desktop, mobile }) => {
  return (
    <div className="hero-video-wrapper">
      <div className="video-cut-top-bottom">
        <div className="video-proportion-16by9">
          <video
            src={desktop}
            muted={true}
            autoPlay={true}
            playsInline={true}
            loop></video>
        </div>
        <div className="video-proportion-9by16">
          <video
            src={mobile}
            muted={true}
            autoPlay={true}
            playsInline={true}
            loop></video>
        </div>
      </div>
    </div>
  )
}

const ImageHero = ({ image }) => {
  return (
    <div className="hero-image-wrapper">
      <img src={image} alt="" />
    </div>
  )
}

const MetaLayer = ({
  logo,
  title,
  supplemental,
  synopsis,
  mainlink,
  secondarylink,
  btntext,
}) => {
  return (
    <div className="meta-layer">
      <div className="title-wrapper">
        <div className="logo-wrapper">
          <img src={logo} alt={title} />
        </div>
        <div className="info-wrapper">
          {supplemental && (
            <div className="supplemental h-m">{supplemental}</div>
          )}
          {synopsis && (
            <p
              className="synopsis h-m"
              dangerouslySetInnerHTML={{ __html: synopsis }}></p>
          )}

          <div className="video-actions">
            {mainlink && (
              <a className="btn-action btn-action-solid" href={mainlink}>
                <div className="btn-icon">
                  <div className="btn-icon-play" role="presentation">
                    <svg viewBox="0 0 24 24">
                      <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <span className="btn-text">{btntext}</span>
              </a>
            )}
            {secondarylink && (
              <a
                className="btn-action btn-action-transparent"
                href={secondarylink}
                target="_blank"
                rel="noopener noreferrer">
                <div className="btn-icon">
                  <div className="btn-icon-info" role="presentation">
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z"
                        fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <span className="btn-text">Info</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Hero = ({ desktop, mobile, image, metadata, className }) => {
  const {
    logo,
    title,
    supplemental,
    synopsis,
    mainlink,
    secondarylink,
    btntext,
  } = metadata
  return (
    <WrapVideo className={className ? className : 'wrap-home'}>
      <VideoHero desktop={desktop} mobile={mobile} />
      <ImageHero image={image} />
      <span className="bg-vignette"></span>
      <MetaLayer
        logo={logo}
        title={title}
        supplemental={supplemental}
        synopsis={synopsis}
        mainlink={mainlink}
        secondarylink={secondarylink}
        btntext={btntext}
      />
    </WrapVideo>
  )
}

export default Hero
