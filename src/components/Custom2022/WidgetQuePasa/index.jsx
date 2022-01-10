import React from 'react'
import LogoBox from '../Logo2022Box'
import LogoWide from '../Logo2022Wide'
import styled from 'styled-components'
import { QuePasa } from '@labcon/copesa-logos'

const LogoWrap = styled.div`

  .logowide{
    display: block;
  }
  .logobox{
    display: none;
  }
  padding-top: 15px;
  padding-bottom: 15px;

  @media(max-width: 768px) {
    padding: 0;
    .logowide{
      display: none;
    }
    .logobox{
      display: block;
    }
  }
}
`

const Wrap = styled.div`
  grid-column: 1 / -1 !important;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1rem;
  > div {
    grid-column: span 1 !important;
  }
`

const Presented = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

const PresentedWrap = styled.div`
  background-color: white;
  padding: 1rem;
  span {
    font-size: 11px;
    font-size: 0.8rem;
    color: #000;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', franklin-gothic-urw, helvetica, arial,
      verdana, sans-serif;
    margin-right: 6px;
  }
`
const Section = styled.div`
  display: block;
  padding: 15px;
  svg {
    max-width: 100%;
    height: 200px;
    max-height: 80px;
  }
`

const SectionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const RestWrap = styled.div`
  background-color: ${props => (props.bgColor ? props.bgColor : 'black')};
  display: grid;
  grid-template-columns: 140px 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
  }
`

const Custom2022Widget = ({ bgColor = '#4bc7bd' }) => {
  return (
    <Wrap>
      <LogoWrap>
        <LogoBox className="logobox" mainColor={bgColor} />
        <LogoWide className="logowide" mainColor={bgColor} />
      </LogoWrap>
      <RestWrap bgColor={bgColor}>
        <SectionWrap>
          <Section>
            <QuePasa schema="light" />
          </Section>
        </SectionWrap>
        <Presented>
          {/* <PresentedWrap>
            <span>Presentado por: </span>
          </PresentedWrap> */}
        </Presented>
      </RestWrap>
    </Wrap>
  )
}

export default Custom2022Widget
