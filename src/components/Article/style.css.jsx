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
  }
  img {
    max-width: 100%;
  }
  .tag{
    font-family: 'Open Sans', sans-serif;
    font-size: 14.4px;
    color: #aa272f;
    margin-bottom: 5px;
  }

`

export {StArticle}