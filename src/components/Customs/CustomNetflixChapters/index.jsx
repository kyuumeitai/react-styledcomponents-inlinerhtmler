import React from 'react'
import { WrapMenu } from '../CustomAsiEmpiezaNetflix/style.css'

const CustomNetflixChapters = ({ chapters }) => {

  return (
    <WrapMenu className={`${chapters ? `wrapchapters-${chapters}` : ''}`}>
      <div className={`hero-chapters ${chapters ? 'withchapters-' + chapters : ''}`}>
        <div className="chapter available">
          <a href="https://www.latercera.com/asi-empieza/01-sebastian-lelio/" className="chap-wrap">
            <div className="chapter-img">
              <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/X262HLKIVZCEHIUNH32QWWFAAQ.jpg" alt="" />
            </div>
            <div className="chapter-info">
              <div className="wrap">
                <h3>
                  <small>Capítulo 01:</small>
                    Sebastián Lelio</h3>
                <p>Cineasta</p>
              </div>
            </div>
            <div className="chapter-iframe">
              <div className="video-proportion-16by9">
                <video src="https://rudo.video/redirector/320/ccc2162da35f15c11df3d9a78dc2a691.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
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
          <a href="https://www.latercera.com/asi-empieza/02-susannah-buchan/" className="chap-wrap">
            <div className="chapter-img">
              <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/33URTPQE4ZADVN6KBJQWLDCUMI.jpg" alt="" />
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
          <a href="https://www.latercera.com/asi-empieza/03-paulina-villalobos/" className="chap-wrap">
            <div className="chapter-img">
              <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/57MLVKMOCZFBRMVAX6TG42DB6M.jpg" alt="" />
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
        {
          !chapters && chapters !== 'available' ? (
            <>
              <div className="chapter soon">
                <div className="chap-wrap">
                  <div className="chapter-img">
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/HVHEUPDXNZDJFN7SWRBCGEFDTY.jpg" alt="" />
                  </div>
                  <div className="chapter-info">
                    <div className="wrap">
                      <h3>
                        <small>Capítulo 04:</small>
                  Alex Anwandter</h3>
                      <p>Cantautor</p>
                    </div>
                  </div>
                  <div className="chapter-iframe">
                    <div className="video-proportion-16by9">
                      <video></video>
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
                        <small>Capítulo 05:</small>
                  Caiozzama</h3>
                      <p>Artista</p>
                    </div>
                  </div>
                  <div className="chapter-iframe">
                    <div className="video-proportion-16by9">
                      <video></video>
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
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/3OM2XBFXBNBTJGN4VDLAZO3XUE.jpg" alt="" />
                  </div>
                  <div className="chapter-info">
                    <div className="wrap">
                      <h3>
                        <small>Capítulo 06:</small>
                    Francisca Valenzuela</h3>
                      <p>Cantautora</p>
                    </div>
                  </div>
                  <div className="chapter-iframe">
                    <div className="video-proportion-16by9">
                      <video></video>
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
                        <small>Capítulo 07:</small>
                  Alejandro Zambra</h3>
                      <p>Escritor</p>
                    </div>
                  </div>
                  <div className="chapter-iframe">
                    <div className="video-proportion-16by9">
                      <video></video>
                    </div>
                  </div>
                  <div className="chapter-availability">
                    <span>
                      Pronto
                </span>
                  </div>
                </div>
              </div>
            </>
          ) : null}
      </div>
    </WrapMenu>
  )
}

export default CustomNetflixChapters