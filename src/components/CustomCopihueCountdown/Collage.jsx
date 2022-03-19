import * as React from 'react'
import styled from 'styled-components'

const StyledSvg = styled.svg`
  .collage_svg__st1 {
    will-transform: fill;
    transition: fill 0.5s ease;
    transition-delay: 0.5s;
  }
  .collageBg {
    will-transform: fill;
    transition: fill 0.5s ease;
    transition-delay: 0.5s;
  }
`

function SvgCollage({ mainColor = '#e42317', bgColor = '#e42317', ...props }) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      width="100%"
      height="100%"
      viewBox="0 0 1920 1920"
      // xmlSpace="preserve"
      // preserveAspectRatio="xMidYMid meet"
      {...props}>
      <style>{`.collage_svg__st1{fill: ${mainColor}}`}</style>
      <path
        className="collageBg"
        fill={bgColor}
        d="M-768.6-1067.6h2903.1v2903.1H-768.6V-1067.6z"
      />
      <path
        className="collage_svg__st1"
        d="M606.2 604.7c-7-5.6-11.9-13.2-14.6-22.6-1.3-5.7-1.9-11.5-1.7-17.4.1-6.3 1.4-17.8 3.8-34.3 2.4-16.6 5.7-37.6 9.9-63.1s7.7-46.6 10.7-63c2.9-16.5 5.4-27.7 7.3-33.8 1.7-5.6 4.1-10.9 7.2-15.9 5-7.7 12.4-13.6 21-16.8 8.5-3.1 18.6-3.7 30.5-1.8 7.2 1 14.1 3.2 20.6 6.3 5.6 2.8 10.6 6.8 14.6 11.7 4.2 5.1 7.2 11.2 8.6 17.7 1.4 7.3 1.7 14.8.9 22.2-.7 8.5-2.4 20.7-5 36.7l-46-7.6c1.8-10.8 3.1-19.6 4.1-26.2.9-6.6 1.4-10.8 1.2-12.5 0-1.4-.4-2.8-1.1-4-.5-.6-1.1-1.1-1.7-1.5-1-.5-2-.8-3-.9-3.4-.5-5.8.4-7.2 2.8-.5 1.3-1.9 8.5-4.1 21.8-2.3 13.3-6.3 37.3-12 72.1s-9.5 58.9-11.6 72.2c-2 13.3-3 20.6-3 22 .6 2.8 2.6 4.4 5.9 4.9 1 .2 2.1.2 3.2.1.8-.1 1.5-.4 2.1-.8 1.1-1 1.9-2.2 2.4-3.6.7-1.7 1.6-5.9 2.8-12.5 1.2-6.6 2.7-15.4 4.5-26.5l46.1 7.5c-2.4 14.7-4.8 26.5-7.2 35.4-2 7.8-4.8 15.3-8.6 22.4-3.2 5.9-7.8 10.9-13.5 14.5-5 3.3-10.6 5.4-16.5 6.2-6.3 1-13.6.8-22.2-.6-11.9-1.7-21.4-5.5-28.4-11.1"
      />
      <path
        className="collage_svg__st1"
        d="M1129 698.2c-3.1-13.5-1.8-27.3 4-41.3 3.9-8.1 8.7-15.7 14.5-22.6 6.2-7.6 18.7-20.2 37.4-37.8s42.9-39.9 72.3-66.8 53.8-48.9 73.1-65.9c19.3-17.1 33-28.4 41.1-33.8 7.4-5.1 15.4-9.3 23.9-12.4 13.5-4.5 28-4.6 41.5-.2 13.2 4.3 26 13.3 38.5 27 12.8 14 20.7 27.7 23.8 41.3 3.1 13.5 1.7 27.3-4 41.3-3.9 8.1-8.7 15.7-14.5 22.6-6.2 7.6-18.7 20.1-37.6 37.6-18.9 17.5-43.1 39.7-72.5 66.6-29.4 26.9-53.8 48.9-72.9 66.2-19.2 17.2-32.8 28.6-40.9 34.1-7.4 5.1-15.4 9.3-23.9 12.4-14.5 4.5-28.3 4.6-41.5.2-13.2-4.3-26.2-13.5-38.9-27.4-12.6-13.9-20.4-27.5-23.4-41.1m83.3 0c1.7-.5 5.1-2.9 10.2-7.2 5.1-4.3 15.6-13.8 31.7-28.5s38.7-35.3 67.8-61.9 51.8-47.2 67.8-61.9c16.1-14.7 26.5-24.3 31.3-28.9 4.8-4.6 7.5-7.8 8.1-9.5 2.2-3.6 1.3-7.5-2.5-11.7-3.5-3.9-7.3-5-11.4-3.5-1.8 1.1-10.4 8.5-25.8 22.3s-43.3 39.1-83.4 75.7c-40.2 36.7-67.8 62-83 76.2-15.2 14.1-23.4 22-24.6 23.7-1.9 3.9-1.1 7.8 2.5 11.7 3.8 4.1 7.5 5.3 11.3 3.5"
      />
      <path
        className="collage_svg__st1"
        d="M1518.4 625.7l98.4 9.6c17.3 1.7 30.6 5.2 39.8 10.6 9.1 5.2 15.9 13.7 19 23.8 1.9 5.1 3.1 10.4 3.3 15.9.2 8.8-.2 17.6-1 26.4-1 12.1-2.4 27.4-4.2 45.9-1.8 18.1-3.3 33.3-4.7 45.6-.8 8.8-2.2 17.5-4.1 26.1-1.3 5.2-3.5 10.1-6.3 14.6-4.9 9.2-13.3 16.2-23.2 19.4-10.1 3.3-23.8 4.1-41.1 2.4l-26.6-2.6-19 195.6-71.9-7 41.6-426.3zm63.2 177.4c2.7.4 5.4.2 8-.4 2.3-.7 4.1-2.3 5.3-4.4 1-1.9 1.9-6.3 2.8-13.1.9-6.8 2.1-18.5 3.7-35 1.7-17.3 2.8-29.4 3.2-36.3.5-6.9.4-11.3-.2-13.4-1.7-3.8-5.7-6-12.2-6.7l-7.8-.8-10.6 109.3 7.8.8z"
      />
      <path
        className="collage_svg__st1"
        d="M787 1124.1c-10.6-5.1-19.2-16-25.8-32.6l-79-198.2 41.5-16.6 79.5 199.3c.9 2.7 2.4 5.1 4.4 7.1 1.6 1.2 3.6 1.4 6.2.4 2-.6 3.6-2.3 4.1-4.4.4-2-.1-4.8-1.5-8.2l-79.5-199.3 41.5-16.6 79 198.2c6.5 16.4 7.7 30.2 3.4 41.3-4.2 11.2-14.9 20.2-31.9 27-17.3 6.8-31.3 7.7-41.9 2.6"
      />
      <path
        className="collage_svg__st1"
        d="M362.3 1032.1L336.7 1310l75.6 7 4.1-44.1-28.7-2.6 7.7-83.4 27.6 2.5 4.1-44.1-27.6-2.5 5.7-61.8 28.7 2.6 4.1-44.5-75.7-7z"
      />
      <path
        className="collage_svg__st1"
        d="M1274.8 1019.5l-121.5 78.1-11.3-17.6 121.5-78.1-34.4-53.5-317.6 204.2 34.4 53.5 145.8-93.7 11.3 17.5-145.8 93.7 34.7 54 317.6-204.2-34.7-53.9z"
      />
      <path
        transform="rotate(-1.719 1413.443 1234.238) scale(1.00005)"
        className="collage_svg__st1"
        d="M1391.8 1105.6h43.3v256.9h-43.3z"
      />
      <path
        className="collage_svg__st1"
        d="M376.1 994.3c-30.7-6.8-57.5-22.9-80.5-48.3-12.9-15.8-23.7-33.1-32.2-51.6-9.5-20-23.1-57.7-41.1-113.3s-40.1-126.5-66.5-212.8c-26.4-86.3-47.7-157.5-63.9-213.6s-26-95-29.3-116.9c-3.3-20.1-4-40.5-2.2-60.8 3.9-31.9 17.8-61.6 39.8-85.1 21.6-22.8 52.5-40.4 92.6-52.6 24-7.8 49.1-11.8 74.3-12 22 .2 43.7 5 63.7 14.1 21.2 9.5 39.8 23.9 54.3 42 15.7 20.7 28.2 43.6 37.2 68 10.8 27.7 24.5 68.5 41.1 122.6l-155.6 47.6c-11.2-36.6-20.4-66-27.6-88.1-7.2-22.1-12.4-35.8-15.4-41.1-2.2-4.4-5.6-8-9.7-10.6-2.4-1.2-5-1.9-7.7-1.9-3.7.1-7.4.7-10.9 1.9-11.3 3.5-17.4 10.1-18.2 19.9.4 4.6 7.3 29.5 20.6 74.5s37.9 126.4 73.9 244.1C348.8 638 373.9 719.2 388 764c14.2 44.8 22.3 69.2 24.6 73.3 6.1 7.7 14.9 9.8 26.2 6.3 3.6-1 7-2.5 10.1-4.5 2.2-1.5 4.1-3.6 5.3-5.9 2-4.7 2.7-9.8 1.9-14.9-.6-6.5-4-20.9-10.4-43.3s-15.3-52.3-26.7-89.8l155.6-47.6c15.2 49.7 25.9 90.3 32.2 121.7 5.9 27.4 8.5 55.4 7.6 83.5-.9 23.4-7.7 46.1-19.8 66.1-10.5 17.9-24.8 33.3-42 45-18.1 12.7-41.5 23.4-70.3 32.2-40.2 12.3-75.5 15.1-106.2 8.2"
      />
      <path
        className="collage_svg__st1"
        d="M734.6 777.9c-15.9-19.5-24.7-42.9-26.5-70.3-.3-16.3 1.6-32.5 5.4-48.4 4-17.2 14.1-47.7 30.5-91.4 16.3-43.7 37.6-99.2 63.9-166.4 26.3-67.2 48.3-122.4 65.9-165.6 17.7-43.2 30.9-72.5 39.6-87.8 7.9-14.2 17.6-27.4 28.8-39.2 18.3-18 41.8-29.8 67.2-33.6 24.9-3.6 52.9.7 84.2 12.9 31.9 12.5 55.8 28.5 71.7 48s24.7 42.9 26.5 70.3c.2 16.3-1.6 32.5-5.4 48.4-4 17.2-14.3 47.6-31 91.2-16.6 43.6-38.1 99-64.4 166.2-26.3 67.2-48.1 122.5-65.4 165.8-17.3 43.3-30.4 72.7-39.1 88-7.9 14.2-17.6 27.4-28.8 39.2-19.9 18.8-42.3 30-67.2 33.6-24.9 3.6-53.3-.9-85.2-13.3-31.3-12.3-54.8-28.1-70.7-47.6M869.9 711c2.4-2.2 6-8.8 10.7-19.9 4.7-11.1 14.3-35 28.6-71.6 14.3-36.7 34.5-88.3 60.5-154.8 26-66.5 46.2-118.2 60.5-154.8 14.3-36.7 23.5-60.7 27.6-72 4-11.3 5.9-18.6 5.6-21.9.6-7.6-3.8-13.2-13.3-17-8.8-3.5-15.9-2.3-21.3 3.4-2 3.1-10 22.1-24 57-14 34.8-38.9 98.1-74.8 189.8-35.8 91.7-60.4 155.1-73.8 190.2-13.3 35.1-20.3 54.5-21 58.1 0 7.9 4.5 13.5 13.3 17 9.6 3.6 16.7 2.5 21.4-3.5"
      />
      <path
        className="collage_svg__st1"
        d="M1443.6-16.5l168-63.5c29.5-11.2 54-16.1 73.3-14.8 19.1 1.2 37 9.6 50.1 23.5 7.3 6.7 13.4 14.5 18.2 23.2 7.3 14.2 13.9 28.9 19.5 43.9 8.1 20.5 18.2 46.5 30.1 78.1 11.7 30.9 21.3 56.9 28.9 78 5.7 15 10.5 30.3 14.4 45.8 2 9.5 2.5 19.2 1.5 28.9-.6 19-8.6 37-22.2 50.2-13.8 13.4-35.4 25.8-65 36.9l-45.4 17.1 126.2 333.9-122.6 46.4-275-727.6zm245.5 238.1c4.6-1.6 8.9-4 12.6-7.1 3.1-3 4.9-7.1 5.1-11.4.1-3.9-1.9-11.8-6-23.6s-11.4-31.8-22.1-60c-11.2-29.5-19.1-50.1-23.9-61.6-4.8-11.6-8.5-18.8-11.1-21.7-5.8-4.9-14.2-5.2-25.2-1.1l-13.4 5.1 70.5 186.5 13.5-5.1z"
      />
      <path
        className="collage_svg__st1"
        d="M834.1 1538.5c-23.8.2-49-11.8-75.8-35.9l-319.9-288.1 60.3-67 321.6 289.6c4 4.1 8.9 7.1 14.3 8.8 3.9.9 7.8-.8 11.4-4.9 3.1-3 4.4-7.4 3.4-11.6-1.1-4-4.4-8.6-10-13.6l-321.6-289.6 60.3-67L898 1347.4c26.4 23.8 40.8 47.7 43.1 71.7s-8.9 49.8-33.7 77.3c-25.1 27.9-49.6 42-73.3 42.1"
      />
      <path
        className="collage_svg__st1"
        d="M55.9 1175.9L315.1 1851l183.6-70.5-41.1-107.1-69.8 26.8-77.8-202.7 66.9-25.7-41.1-107.1-66.9 25.7-57.6-150.1 69.8-26.8-41.5-108-183.7 70.4z"
      />
      <path
        className="collage_svg__st1"
        d="M1373.8 1379.2L1218 1638.6l-37.5-22.5 155.8-259.4L1222 1288l-407.5 678.2 114.3 68.7 187-311.2 37.5 22.5-187 311.2 115.3 69.3 407.5-678.2-115.3-69.3z"
      />
      <path
        transform="rotate(-27.974 1767.333 1557.624)"
        className="collage_svg__st1"
        d="M1688.2 1087.6h158.5v940.2h-158.5z"
      />
    </StyledSvg>
  )
}

export default SvgCollage
