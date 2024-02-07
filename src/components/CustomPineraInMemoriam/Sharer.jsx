import React from 'react'
import styled from 'styled-components'
const Sharers = styled.div`
  padding: 2rem 1rem;

  h6 {
    text-align: left;
    font-size: 14px;
    font-family: 'Acta Sans', sans-serif;
    text-transform: uppercase;
  }
  .sharer-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    a {
      color: white;
      display: flex;
      margin-bottom: 10px;
      margin-top: 5px;
      border-radius: 50px;
      border: 2px solid white;
      margin-right: 5px;
      &:last-of-type {
        margin-right: 0;
      }
      color: white;
      width: 46px;
      height: 46px;
      align-items: center;
      justify-content: center;
      svg {
        width: 30px;
        height: 31px;
      }
    }
  }
`
const Sharer = ({ url, description, hashtags, comparte = 'Comparte:' }) => {
  return (
    <Sharers>
      <h6>{comparte}</h6>
      <div className="sharer-content">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url,
          )}&text=${encodeURIComponent(
            description,
          )}&via=latercera&hashtags=${encodeURIComponent(hashtags)}`}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="twitter"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-twitter fa-w-16">
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              className=""></path>
          </svg>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://facebook.com/sharer.php?display=page&u=${url}`}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="svg-inline--fa fa-facebook-f fa-w-10">
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              className=""></path>
          </svg>
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=&text=${encodeURIComponent(
            description + ' ' + url,
          )}&source=&data=&app_absent=`}
          target="_blank"
          className="mobileonly">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="whatsapp"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-whatsapp fa-w-14">
            <path
              fill="currentColor"
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              className=""></path>
          </svg>
        </a>
      </div>
    </Sharers>
  )
}

export default Sharer
