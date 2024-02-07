import React, { useContext } from 'react'
import styled from 'styled-components'

const StPlayer = styled.div`
  position: relative;
  width: ${props => (props.size ? `${props.size}px` : '200px')};
  height: ${props => (props.size ? `${props.size}px` : '200px')};
`

const PlayerCircle = styled.svg`
  transform: rotate(-90deg);
  display: block;
`

const Interior = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }
  h3 {
    text-align: center;
    font-weight: bold;
    letter-spacing: -0.05em;
    line-height: 1;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    text-shadow: 1px 1px 0 white, -1px -1px 0 white, -1px 1px 0 white,
      1px -1px 0 white;
    small {
      display: block;
      font-size: 80%;
      letter-spacing: 0;
      font-weight: normal;
    }
  }
`

const PlayerIcon = styled.div`
  border-radius: ${props => (props.size ? `${props.size / 3}px` : '60px')};
  position: absolute;
  top: 50%;
  right: ${props => (props.size ? `-${props.size / 6}px` : '-30px')};
  margin-top: ${props => (props.size ? `-${props.size / 6}px` : '-30px')};
  width: ${props => (props.size ? `${props.size / 3}px` : '60px')};
  height: ${props => (props.size ? `${props.size / 3}px` : '60px')};
  z-index: 1;
  svg {
    position: relative;
    z-index: 3;
  }
  &:after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: black;
    top: 20px;
    left: 0;
    border-radius: inherit;
    z-index: 1;
  }
  &:before {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    top: 0;
    left: 0;
    border-radius: inherit;
    background-color: white;
    z-index: 2;
  }
`

const Percentage = styled.h3`
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.05em;
  line-height: 1;
  top: -3px;
  right: 53%;
  font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
`

const CirclePercentage = ({
  size = 200,
  votes = '',
  strokeBackground = 'white',
  strokeActive = '#2E74E5',
  strokeWidth = 30,
  percentage = 0,
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const dashoffset = circumference - (circumference / 100) * percentage
  const smallRadius = ((size - strokeWidth * 2) / 2 / 100) * percentage
  return (
    <StPlayer size={size}>
      <PlayerCircle viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeBackground}
          strokeWidth={strokeWidth}
          fill="none"></circle>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeActive}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          fill="none"></circle>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={smallRadius}
          fill={strokeActive}></circle>
      </PlayerCircle>
      <Interior>
        <h3>
          {votes} <small>votos</small>
        </h3>
      </Interior>
      <Percentage>{percentage}%</Percentage>
    </StPlayer>
  )
}

export default CirclePercentage
