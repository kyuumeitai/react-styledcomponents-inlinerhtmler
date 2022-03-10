import React from 'react'
import Hero from './Hero'
import SvgMegaphone from './output/Megaphone'
import ladata from './data'
import styled from 'styled-components'
import Sharer from './Sharer'

const Wrap = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #eeeae0;
  img {
    max-width: 100%;
  }
  h4 {
    text-transform: uppercase;
    font-size: 16px;
    color: #d99400;
  }
`

const NoNoteWrap = styled.div`
  figure {
    background-color: #222221;
    min-height: 300px;
    border-radius: 6px;
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      max-width: 100px;
    }
    @media (max-width: 768px) {
      min-height: 200px;
    }
  }
`

const NoNote = ({ date }) => {
  return (
    <NoNoteWrap>
      <figure>
        <SvgMegaphone />
      </figure>
      <h4>{date}</h4>
      <small>Pronto</small>
    </NoNoteWrap>
  )
}

const Note = ({ title, description, imgurl, url, date }) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <figure>
          <img src={imgurl} alt={title} />
        </figure>
      </a>
      <h4>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {date}
        </a>
      </h4>
      <h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  )
}

const ColWrap = styled.div`
  display: grid;
  grid-column: 1 / -1 !important;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px 100px;
  text-align: center;
  > div {
    grid-column: span 1 !important;
    > div {
      grid-column: span 1 !important;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px 10px;
  }
  .ital {
    font-style: italic;
  }
`

const DottedHr = styled.hr`
  border: 0;
  border-top: 3px dotted #d99400;
  margin-left: 100px;
  margin-right: 100px;
`

const Archetype = ({ title, description, imgurl, note, pos }) => {
  return (
    <>
      <ColWrap>
        <div>
          <h3>
            {pos}. {title}
          </h3>
          <p className="ital">{description}</p>
          <figure>
            <img src={imgurl} alt={title} />
          </figure>
        </div>
        <div>
          {note.title ? <Note {...note} /> : <NoNote date={note.date} />}
        </div>
      </ColWrap>
      <Sharer
        className="sharer"
        url="https://www.latercera.com/8m-en-8-arquetipos-de-mujeres/"
        description={`${title} - 8M en 8 arquetipos de mujeres - La Tercera`}
        hashtags="8M"
      />
      <DottedHr />
    </>
  )
}

const Notes = ({ data }) => {
  return (
    <div>
      {data.map((archetype, ind) => {
        return <Archetype key={ind} pos={ind + 1} {...archetype} />
      })}
    </div>
  )
}

const Custom8M = () => {
  return (
    <Wrap>
      <Hero />
      <Notes data={ladata} />
    </Wrap>
  )
}

export default Custom8M
