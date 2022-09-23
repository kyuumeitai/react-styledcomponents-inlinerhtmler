import React from 'react'
import { Wrap } from '../style.css'
import { related } from '../Data/UltraTodo'
import Card from './Card'
import styled from 'styled-components'

const Related = () => {
  return (
    <Wrap>
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
    </Wrap>
  )
}

const Cols = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(
    ${props => (props.items ? props.items : 3)},
    1fr
  );
  grid-gap: 10px;
  .card {
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: black;
    display: block;
    height: 200px;
    display: flex;
    align-items: flex-end;
    position: relative;
    span {
      display: block;
    }
    img {
      display: block;
      max-width: 100%;
    }
    .overlay {
      padding: 10px;
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
    }
  }
`

export default Related
