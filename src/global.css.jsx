import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import theme from './theme'
import { math } from 'polished'

const titlesizes = () => [...Array(6).keys()].map((i) => {
  return `h${6 - i} {
		font-size: ${math(`(${theme.fontTitleSize} / 6) * ${i + 1}`)};
	}`
})

export default createGlobalStyle`
  ${reset}

html{
    box-sizing: border-box;

    @media(max-width: 800px){
        font-size: 80%;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${theme.background};
    color: ${theme.color};
    font-family: ${theme.fontBody};
    line-height: ${theme.lineHeight};
    padding-top: ${theme.headerHeight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: ${theme.spacing};
  }

  h1,h2,h3,h4,h5,h6{
    font-family: ${theme.fontTitle};
    font-weight: normal;
  }

  ${titlesizes}

  *:focus {
    outline: none;
  }

  .more-link,
  .link-more{
    display: none !important;
  }

  .section-output{
    background: black;
    color: white;
    text-align: center;
    textarea{
      display: block;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid #0f0;
      font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
      padding: 1rem;
      font-size: 1rem;
      line-height: 1.5;
    }
  }

`