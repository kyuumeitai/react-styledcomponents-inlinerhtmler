import React from 'react'
import { Wrap } from '../style.css'
import { related } from '../Data/UltraTodo'
import Card from './Card'
import styled from 'styled-components'

const Related = () => {
  return (
    <WrapRelated>
      <Inner>
        <h3>{related.title}</h3>
        <Cols>
          {related.cards.map((item, index) => {
            const { title, logo, url, bgimg } = item
            return (
              <Card
                key={index}
                title={title}
                logo={logo}
                url={url}
                bgimg={bgimg}
              />
            )
          })}
        </Cols>
      </Inner>
    </WrapRelated>
  )
}

const WrapRelated = styled(Wrap)`
  display: block;
  background-image: linear-gradient(
    rgb(23, 20, 36),
    rgb(42, 35, 62) calc(10rem),
    rgb(42, 35, 62)
  );
  padding-bottom: 2rem;
  color: white;
`

const WrapCols = styled.div``

const Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (max-width: 1200px) {
    max-width: 100vw;
  }
  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    font-weight: 700;
  }
`

const Cols = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(
    ${props => (props.items ? props.items : 3)},
    1fr
  );
  grid-gap: 10px;
  @media screen and (max-device-width: 640px) {
    width: 100vw;
    display: flex;
    flex-direction: row;
    overflow: scroll hidden;
    scroll-snap-type: x mandatory;
    padding-left: 1.25rem;
  }

  .card {
    padding-right: 20px;
    margin-right: 20px;
    scroll-snap-align: center;
    scroll-margin-left: 20px;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: black;
    display: flex;
    align-items: flex-end;
    position: relative;
    height: 200px;
    width: 100%;
    @media screen and (max-device-width: 640px) {
      height: auto;
      padding-top: 3rem;
      width: 75%;
      flex: 1 0 auto;
    }
    span {
      display: block;
    }
    img {
      display: block;
      max-width: 100%;
    }
    .overlay {
      padding: 10px;
      position: relative;
      z-index: 2;
      img {
        max-height: 60px;
      }
    }
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      bottom: 0;
      right: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`

export default Related
