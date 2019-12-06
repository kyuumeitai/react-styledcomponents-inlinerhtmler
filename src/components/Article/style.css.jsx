import styled from 'styled-components'

const StArticle = styled.article`
  font-family: 'Merriweather', serif;
  line-height: 1.1;
  padding: 1rem;
  a{
    color: #1b1b1b;
    text-decoration: none;
  }
  h2 {
    font-size: 20px;
    font-family: 'Merriweather', serif;
    margin-top: 5px;
    margin-bottom: 10px;
    line-height: 1;
  }
  p{
    font-size: 14px;
    line-height: 1.47;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  .tag{
    font-family: 'Open Sans', sans-serif;
    font-size: 14.4px;
    color: #aa272f;
    margin-bottom: 5px;
  }
  figure{
    @media(max-width: 800px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    }
    @media(max-width: 550px){
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    }
  }

`

export {StArticle}