import React from 'react'
import LogoBox from '../Logo2022Box'
import LogoWide from '../Logo2022Wide'
import styled from 'styled-components'
import { LaTerceraPM, LaTercera } from 'copesa-logos'
import Por from '../Por'

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
    padding-top: 4px;
    padding-bottom: 4px;
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
    > div {
      grid-column: span 1 !important;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 120px 1fr;
  }
`

const Presented = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

const PresentedWrap = styled.div`
  background-color: white;
  padding: 10px;
  span {
    font-size: 11px;
    font-size: 0.8rem;
    color: #000;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', franklin-gothic-urw, helvetica, arial,
      verdana, sans-serif;
    margin-right: 6px;
    display: block;
    text-align: right;
  }
  img {
    max-width: 130px;
    margin-right: auto;
    @media (max-width: 768px) {
      max-width: 80px;
    }
  }
`
const Section = styled.div`
  display: block;
  padding: 15px;
  @media (max-width: 768px) {
    padding: 4px;
  }
  &.ltpm {
    padding-bottom: 0;
  }
  svg {
    max-width: 100%;
    height: 200px;
    max-height: 80px;
    @media (max-width: 768px) {
      max-height: 40px;
    }
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
  grid-template-columns: 1fr 200px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 120px;
  }
`

const PorWrap = styled.div``
const OverWrap = styled.div``

const Custom2022Widget = ({ bgColor = '#24364e' }) => {
  return (
    <OverWrap>
      <Wrap>
        <LogoWrap>
          <LogoBox className="logobox" mainColor={bgColor} />
          <LogoWide className="logowide" mainColor={bgColor} />
        </LogoWrap>
        <RestWrap bgColor={bgColor}>
          <SectionWrap>
            <Section className="ltpm">
              <LaTerceraPM schema="light" />
            </Section>
          </SectionWrap>
          <Presented>
            <PresentedWrap>
              <span>Presentado por: </span>
              <a
                href="https://www.ivitalia.cl/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="https://www.latercera.com/resizer/PYQxSGhSv9HpkjNGocj701g8cDE=/arc-anglerfish-arc2-prod-copesa/public/J2TK5HCGWVEA5L36DRDQEYSO2U.png
"
                  alt="Vitalia"
                />
              </a>
            </PresentedWrap>
          </Presented>
        </RestWrap>
      </Wrap>
      <PorWrap>
        <Por brand={<LaTercera schema="light" />} />
      </PorWrap>
    </OverWrap>
  )
}

export default Custom2022Widget
