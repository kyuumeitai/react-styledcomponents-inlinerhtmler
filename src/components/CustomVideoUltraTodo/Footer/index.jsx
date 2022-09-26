import React from 'react'
import { StFooter } from './style.css'
import Credits from '../Credits'
import Related from '../Related'

const Footer = () => {
  return (
    <>
      <Related />
      <Credits />
      <StFooter></StFooter>
    </>
  )
}

export default Footer
