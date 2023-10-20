import React from 'react'
import styled from 'styled-components'

const Custom2022 = () => {
  return (
    <Wrap>
      <div className="intro">
        <div className="huella">
          <img src="https://www.latercera.com/resizer/KkH9pwkyC33i0mzu5n1bAQ17_GY=/arc-anglerfish-arc2-prod-copesa/public/H5V6BMEOWNG7XIHZAHKD442BEE.png" />
        </div>
        <div className="text">
          <h2>
            <strong>Ecosistema minero:</strong>
            <span>
              más allá de los <br />
              yacimientos
            </span>
          </h2>
          <p>
            Conoce cómo la minería está trabajando en el presente para hacer un
            mejor futuro: <br /> más innovación, más inclusión, más
            sostenibilidad, para seguir contribuyendo al desarrollo sostenible
            de Chile.
          </p>
          <div className="presented-by">
            <span>Presentado por </span>
            <a
              href="https://compromisominero.cl/?utm_source=latercera"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://www.latercera.com/resizer/HQFGomJNtHeixN7E1R_NsH17wf8=/arc-anglerfish-arc2-prod-copesa/public/7IEGXH3LLJHBVCLITNMIZHXYWI.png"
                alt="Compromiso Minero"
              />
            </a>
          </div>
        </div>
        <div className="recuadros">
          <div className="inner">
            <div className="col">
              <div className="blo">
                <img
                  alt="hor01"
                  src="https://www.latercera.com/resizer/sPO9WLf6T7Ad45uDJMidHV0dVJE=/arc-anglerfish-arc2-prod-copesa/public/AC4Y3C4ENFDNLGL37ROTIULJPY.jpg"
                />
              </div>
            </div>
            <div className="col">
              <div className="blo spa"></div>
              <div className="blo">
                <img
                  alt="vert01"
                  src="https://www.latercera.com/resizer/7V-JcMmYnVosfrz4g1ZUly3tFdI=/arc-anglerfish-arc2-prod-copesa/public/TNMH7EPZQJDVRBZXMEXKBBIBSI.jpg"
                />
              </div>
            </div>
            <div className="col">
              <div className="blo">
                <img
                  alt="vert02"
                  src="https://www.latercera.com/resizer/a5VOyIKMM0oYPK5JR2kbmFzB5Nk=/arc-anglerfish-arc2-prod-copesa/public/MGNXEXZLXZCLZGG2OUE6NVV3BU.jpg"
                />
              </div>
              <div className="blo">
                <img
                  alt="hor02"
                  src="https://www.latercera.com/resizer/gKsfXwFporG1ekHm4a-BZc9QkZc=/arc-anglerfish-arc2-prod-copesa/public/GWRPRLNLNRCVBC6JKLWHLD7WHU.jpg"
                />
              </div>
              <div className="blo spa"></div>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  )
}

export default Custom2022

const Wrap = styled.div`
  background-color: #c7d4d4;
  color: #103030;

  font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
  .intro {
    max-width: 1200px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 auto;
    display: grid;
    grid-column: 1 / -1 !important;
    grid-template-columns: 100px 3fr 2fr;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    > div {
      grid-column: auto;
    }
    h2 {
      font-size: 3rem;
      line-height: 1.1;
      margin-bottom: 1rem;
      font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;

      strong {
        display: block;
        font-weight: bold;
        color: #fe5946;
      }
    }
    p {
      font-size: 1.6rem;
      font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    }
  }
  .presented-by {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    img {
      max-width: 160px;
    }
    span {
      font-size: 1rem;
      text-transform: uppercase;
    }
  }
  .huella {
    padding-right: 0.5rem;
    padding-top: 4rem;

    img {
      max-width: 100%;
      display: block;
    }
    @media (max-width: 768px) {
      max-width: 20%;
      padding-top: 2rem;
    }
  }
  .text {
    padding-top: 4rem;
    padding-bottom: 4rem;
    @media (max-width: 768px) {
      padding-top: 1rem;
    }
  }
  .recuadros {
    display: flex;
    justify-content: flex-end;
    .inner {
      display: grid;
      @media (max-width: 768px) {
        max-width: 70%;
      }

      grid-template-columns: repeat(3, 1fr);
      .col {
        display: flex;
        grid-column: auto;
        flex-direction: column;
        justify-content: flex-end;
      }
      .blo {
        background-color: #fe5946;
        img {
          max-width: 100%;
          display: block;
        }
      }
      .spa {
        min-height: 100px;
        @media (max-width: 768px) {
          min-height: 30px;
        }
      }
    }
  }
`

//coral: #fe5946
//gris: #0f1313
//piedra: #103030

{
  /* <img alt="vert01" src="https://www.latercera.com/resizer/7V-JcMmYnVosfrz4g1ZUly3tFdI=/arc-anglerfish-arc2-prod-copesa/public/TNMH7EPZQJDVRBZXMEXKBBIBSI.jpg" />

<img alt="vert02" src="https://www.latercera.com/resizer/a5VOyIKMM0oYPK5JR2kbmFzB5Nk=/arc-anglerfish-arc2-prod-copesa/public/MGNXEXZLXZCLZGG2OUE6NVV3BU.jpg" />

<img alt="vert03" src="https://www.latercera.com/resizer/9tVtmD2Kit3CyAbeeOSd7c_yOw8=/arc-anglerfish-arc2-prod-copesa/public/ONOIKKR45FAJVC4FZWFAE6ZSOU.jpg" />

<img alt="hor01" src="https://www.latercera.com/resizer/sPO9WLf6T7Ad45uDJMidHV0dVJE=/arc-anglerfish-arc2-prod-copesa/public/AC4Y3C4ENFDNLGL37ROTIULJPY.jpg" />

<img alt="hor02" src="https://www.latercera.com/resizer/gKsfXwFporG1ekHm4a-BZc9QkZc=/arc-anglerfish-arc2-prod-copesa/public/GWRPRLNLNRCVBC6JKLWHLD7WHU.jpg" />

<img alt="hor03" src="https://www.latercera.com/resizer/eLjebkmR2YxgRoDFZ_CP1y8RMaY=/arc-anglerfish-arc2-prod-copesa/public/VRQBC57FCZCSHJLZ7GLNIZQCQY.jpg" />

 */
}
