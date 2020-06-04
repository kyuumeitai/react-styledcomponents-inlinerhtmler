import React from 'react'
import { Wrap, WrapVideo, WrapMenu } from './style.css'
import LogoAsiEmpiezaConBajada from './logo-asi-empieza-con-bajada.jsx'

const CustomAsiEmpiezaNetflix = () => {
  return (
    <Wrap>
      <WrapVideo>
        <div className="hero-video-wrapper">
          <div className="video-cut-top-bottom">
            <div className="video-proportion-16by9">
              <video src="https://rudo.video/redirector/1080/3b8c7cd681e57df1d0d86100cd7f4a44.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
            </div>
            <div className="video-proportion-9by16">
              <video src="https://rudo.video/redirector/2008/211a6d2438da0d89932df80d908c3e4e.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/YJR5544SLZDLBNJPFVA4TJJVTU.jpg" />
        </div>
        <span className="bg-vignette"></span>
        <div className="meta-layer">
          <div className="title-wrapper">
            <div className="logo-wrapper">
              <LogoAsiEmpiezaConBajada />
            </div>
            <div className="info-wrapper">
              <div className="supplemental h-m">Ya disponible</div>
              {/* <div className="episode-title h-m">Sebastián Lelio</div> */}
              <p className="synopsis h-m">
                Desentrañamos la mente de los creadores para entender el punto exacto donde aparece la creación.
            </p>
              <div className="video-actions">
                <a className="btn-action btn-action-solid" href="https://www.latercera.com/culto/2020/05/26/asi-empieza/">
                  <div className="btn-icon">
                    <div className="btn-icon-play" role="presentation">
                      <svg viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z" fill="currentColor"></path></svg>
                    </div>
                  </div>
                  <span className="btn-text">Reproducir</span>
                </a>
                <a className="btn-action btn-action-transparent" href="https://www.latercera.com/culto/2020/05/26/asi-empieza/">
                  <div className="btn-icon">
                    <div className="btn-icon-info" role="presentation">
                      <svg viewBox="0 0 24 24"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z" fill="currentColor"></path></svg>
                    </div>
                  </div>
                  <span className="btn-text">Info</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </WrapVideo>
      <WrapMenu>
        <div className="hero-chapters">
          <div className="chapter available">
            <a href="https://www.latercera.com/culto/2020/05/26/asi-empieza/" className="chap-wrap">
              <div className="chapter-img">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/ZYVAUS6LAZAGFEIHHSOXBICXTU.jpg" alt="" />
              </div>
              <div className="chapter-info">
                <div className="wrap">
                  <h3>
                    <small>Capítulo 01:</small>
                    Sebastián Lelio</h3>
                  <p>Director</p>
                </div>
              </div>
              <div className="chapter-iframe">
                <div className="video-proportion-16by9">
                  <video src="https://rudo.video/redirector/480/48580584c186bb45f6f55bb80516b2fc.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
                </div>
              </div>
              <div className="chapter-availability">
                <span>
                  Disponible
                </span>
              </div>
            </a>
          </div>

          <div className="chapter available">
            <a href="https://www.latercera.com/culto/2020/05/26/asi-empieza/" className="chap-wrap">
              <div className="chapter-img">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/TBEO647IRJCQNCB7SAJ5NZH6RA.jpg" alt="" />
              </div>
              <div className="chapter-info">
                <div className="wrap">
                  <h3>
                    <small>Capítulo 02:</small>
                    Susannah Buchan</h3>
                  <p>Oceanógrafa</p>
                </div>
              </div>
              <div className="chapter-iframe">
                <div className="video-proportion-16by9">
                  <video src="https://rudo.video/redirector/480/1ee073b5a20ab3d26ccd8953564c3d6a.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
                </div>
              </div>
              <div className="chapter-availability">
                <span>
                  Disponible
                </span>
              </div>
            </a>
          </div>

          <div className="chapter available">
            <a href="https://www.latercera.com/culto/2020/05/26/asi-empieza/" className="chap-wrap">
              <div className="chapter-img">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/DAKUSRCYF5A4HJQZYGV2P5ZIAU.jpg" alt="" />
              </div>
              <div className="chapter-info">
                <div className="wrap">
                  <h3>
                    <small>Capítulo 03:</small>
                    Paulina Villalobos</h3>
                  <p>Lightning Designer</p>
                </div>
              </div>
              <div className="chapter-iframe">
                <div className="video-proportion-16by9">
                  <video src="https://rudo.video/redirector/480/b00c097985bf914ebb108183036dffb3.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
                </div>
              </div>
              <div className="chapter-availability">
                <span>
                  Disponible
                </span>
              </div>
            </a>
          </div>

          <div className="chapter soon">
            <div className="chap-wrap">
              <div className="chapter-img">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/3OM2XBFXBNBTJGN4VDLAZO3XUE.jpg" alt="" />
              </div>
              <div className="chapter-info">
                <div className="wrap">
                  <h3>
                    <small>Capítulo 04:</small>
                    Francisca Valenzuela</h3>
                  <p>Cantautora</p>
                </div>
              </div>
              <div className="chapter-iframe">
                <div className="video-proportion-16by9">
                  <video src="https://rudo.video/redirector/480/b00c097985bf914ebb108183036dffb3.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
                </div>
              </div>
              <div className="chapter-availability">
                <span>
                  Pronto
                </span>
              </div>
            </div>
          </div>

          <div className="chapter soon">
            <div className="chap-wrap">
              <div className="chapter-img">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/HVHEUPDXNZDJFN7SWRBCGEFDTY.jpg" alt="" />
              </div>
              <div className="chapter-info">
                <div className="wrap">
                  <h3>
                    <small>Capítulo 05:</small>
                  Alex Andwandter</h3>
                  <p>Músico</p>
                </div>
              </div>
              <div className="chapter-iframe">
                <div className="video-proportion-16by9">
                  <video src="https://rudo.video/redirector/480/b00c097985bf914ebb108183036dffb3.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
                </div>
              </div>
              <div className="chapter-availability">
                <span>
                  Pronto
                </span>
              </div>
            </div>
          </div>

          <div className="chapter soon">
            <div className="chap-wrap">
              <div className="chapter-img">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/GUWYUPCS2BDI3C5KAHJ7SAHIHI.jpg" alt="" />
              </div>
              <div className="chapter-info">
                <div className="wrap">
                  <h3>
                    <small>Capítulo 06:</small>
                  Alejandro Zambra</h3>
                  <p>Escritor</p>
                </div>
              </div>
              <div className="chapter-iframe">
                <div className="video-proportion-16by9">
                  <video src="https://rudo.video/redirector/480/b00c097985bf914ebb108183036dffb3.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
                </div>
              </div>
              <div className="chapter-availability">
                <span>
                  Pronto
                </span>
              </div>
            </div>
          </div>

          <div className="chapter soon">
            <div className="chap-wrap">
              <div className="chapter-img">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/75WFR6WBQ5BCZDB6DRRQDKRTZU.jpg" alt="" />
              </div>
              <div className="chapter-info">
                <div className="wrap">
                  <h3>
                    <small>Capítulo 07:</small>
                  Caiozzama</h3>
                  <p>Artista</p>
                </div>
              </div>
              <div className="chapter-iframe">
                <div className="video-proportion-16by9">
                  <video src="https://rudo.video/redirector/480/b00c097985bf914ebb108183036dffb3.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
                </div>
              </div>
              <div className="chapter-availability">
                <span>
                  Pronto
                </span>
              </div>
            </div>
          </div>

        </div>
      </WrapMenu>
    </Wrap>
  )
}

export default CustomAsiEmpiezaNetflix