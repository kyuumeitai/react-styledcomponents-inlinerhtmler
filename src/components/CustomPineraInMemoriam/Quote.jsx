import React from 'react'
import styled from 'styled-components'

const StQuote = styled.div`
  background-color: black;
  color: white;
  padding: 4rem 1rem;
  .quote-content {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  .quote-text {
    text-align: left;
    font-family: 'Acta Headline', sans-serif;
    font-style: italic;
    font-weight: normal;
    line-height: 1.3;
    /* text-transform: uppercase; */
  }
  .quote-author {
    text-align: right;
    font-family: 'Acta Sans', sans-serif;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    max-width: 60%;
    margin-left: auto;
    margin-top: 2rem;
  }
  strong {
    display: block;
  }
  &.big {
    .quote-text p {
      font-size: 4rem;
      @media (orientation: portrait) {
        font-size: 2.4rem;
      }
    }
  }
  &.small {
    .quote-text p {
      font-size: 3rem;
      @media (orientation: portrait) {
        font-size: 2rem;
      }
    }
  }
  &.smaller {
    .quote-text p {
      font-size: 2.3rem;
      @media (orientation: portrait) {
        font-size: 1.6rem;
      }
    }
  }
`

const Quote = ({ text, author, size = 'big', children }) => {
  return (
    <StQuote className={size}>
      <div className="quote-content">
        <div className="quote-text">
          <p>
            <span>“</span>
            {text}
            <span>”</span>
          </p>
        </div>
        <div className="quote-author">
          <p dangerouslySetInnerHTML={{ __html: author }}></p>
        </div>
        <div>{children}</div>
      </div>
    </StQuote>
  )
}

export default Quote
