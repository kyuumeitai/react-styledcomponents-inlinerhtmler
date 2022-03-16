import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  border-bottom: 1px solid #ccc;
  h2 {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    color: #666;
    font-weight: normal;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    text-align: center;
  }
  ul {
    display: flex;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    li {
      list-style: none;
      margin-right: 10px;

      a {
        align-items: center;
        justify-content: center;
        display: flex;
        font-size: 14px;
        color: black;
        font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
        text-align: center;
      }
    }
  }
`

const CustomTransformadores = () => {
  return (
    <Wrap>
      <h2>Síguenos en nuestras redes sociales</h2>
      <ul>
        <li>
          <a href="https://www.instagram.com/transformadoreslt/">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
              />
            </svg>
            INSTAGRAM
          </a>
        </li>
        <li>
          <a href="https://facebook.com/TransformadoresLT/">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
              />
            </svg>
            FACEBOOK
          </a>
        </li>
      </ul>
    </Wrap>
  )
}

export default CustomTransformadores
