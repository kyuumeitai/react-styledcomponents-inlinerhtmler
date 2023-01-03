import styled from 'styled-components'

const Sharers = styled.div`
  h6 {
    font-size: 14px;
    font-family: 'franklin-gothic-urw', helvetica, arial, verdana, sans-serif;
    text-transform: uppercase;
    margin: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  color: white;

  a {
    display: flex;
    margin-bottom: 10px;
    margin-top: 5px;
    border-radius: 50px;
    border: 2px solid white;
    &:last-of-type {
      margin-right: 0;
    }
    color: white;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

export { Sharers }
